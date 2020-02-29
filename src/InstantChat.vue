<template>
    <div class="flex border border-grey rounded shadow-lg" style="height: 92vh;">

        <!--Left-->
        <div :class="getColWidth()[0]" class="border flex flex-col">

            <!--Contacts -->
            <ContactListPage :contacts="contacts" @onContactSelected="getContactConversations"></ContactListPage>

        </div>

        <!--Messages-->
        <div :class="getColWidth()[1]" style="background-color: #e2e8f0">
            <ConversationsPage :contact="selectedContact" :conversations="conversations"
                               @newMessage="replyToMessage" @showSpiritualStageSection="showSpiritualStageSection"
                               @backToContacts="backToContacts"></ConversationsPage>
        </div>

    </div>
</template>
<script>

    import './assets/css/instant_chat.scss';

    import ContactListPage from "./Views/Contacts/Contacts";
    import ConversationsPage from "./Views/Conversations/Conversations";
    import Api from './utils/api';


    export default {
        name: 'InstantMessages',
        props: {
            user_id: {
                type: String,
                default() {
                    return null;
                }
            }
        },
        data() {
            return {
                contacts: [],
                conversations: [],
                selectedContact: null,
                showStageOptions: false,
                windowWidth: window.innerWidth || 0
            }
        },
        created() {
            window.addEventListener("resize", this.onResize);
            this.$eventHub.$on('spiritualStageUpdated', this.refreshContacts);
        },
        beforeDestroy(){
            this.$eventHub.$off('spiritualStageUpdated');
        },
        async mounted() {
            this.contacts = await Api.fetchConversationsList();

        },
        methods: {
            selectContact(contact) {
                this.selectedContact = contact;
                this.getContactConversations(contact);
            },
            async getContactConversations(contact) {
                this.conversations = null;
                this.showStageOptions = false;
                this.selectedContact = contact;
                this.conversations = await Api.getMessagesOfConversation(contact.conversation_id);
            },
            async replyToMessage(newMessage) {
                this.conversations = await Api.replyToMessage(this.selectedContact.conversation_id, newMessage.id, newMessage.reply);
            },
            getColWidth() {
                if (this.windowWidth > 576 && !this.showStageOptions) {
                    // on large screen
                    return ['w-1/4', 'w-3/4', 'w-0 hidden'];
                } else if (this.selectedContact != null && this.windowWidth > 576 && this.showStageOptions) {
                    return ['w-1/4', 'w-2/4', 'w-1/4'];
                } else if (this.selectedContact == null && this.windowWidth < 576) {
                    return ['w-full', 'w-o hidden', 'w-o hidden'];
                } else if (this.selectedContact != null && this.windowWidth < 576 && !this.showStageOptions) {
                    return ['w-0 hidden', 'w-full', 'w-o hidden'];
                } else if (this.selectedContact != null && this.windowWidth < 576 && this.showStageOptions){
                    return ['w-0 hidden', 'w-0 hidden', 'w-full']
                }
            },
            onResize() {
                this.windowWidth = window.innerWidth;
            },
            backToContacts() {
                this.selectedContact = null;
                this.conversations = null;
            },
            showSpiritualStageSection(val){
                this.showStageOptions = val;
            },
            async refreshContacts(){
                this.contacts = await Api.fetchConversationsList();
                this.translateJourneyStage();
                this.conversations = null;
                this.showStageOptions = false;
                this.selectedContact = null;
            }
        },
        watch: {
            conversations() {
            }
        },
        components: {
            ContactListPage, ConversationsPage,
        }
    }
</script>
