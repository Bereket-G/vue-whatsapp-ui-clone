<template>
    <div class="conversations flex flex-col h-full">
        <div class="conversation-header">
            <ConversationHeader @backToContacts="backToContacts" @showSpiritualStageSection="showSpiritualStageSection" :contact="contact"></ConversationHeader>
        </div>
        <div class="conversation-messages custom-scroll-bar-style">
            <ConversationMessages :contact="contact" :conversations="conversations"></ConversationMessages>
        </div>
        <div class="conversation-composer">
            <ConversationComposer :contact="contact" :conversations="conversations"
                                  @newMessage="newMessage"></ConversationComposer>
        </div>
    </div>
</template>
<script>
    import ConversationHeader from "./ConversationHeader";
    import ConversationMessages from "./ConversationMessages";
    import ConversationComposer from "./ConversationComposer";

    export default {
        name: 'Conversations',
        components: {ConversationComposer, ConversationMessages, ConversationHeader},
        props: {
            contact: {
                type: Object,
                default() {
                    return [];
                }
            },
            conversations: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        watch: {},
        methods: {
            newMessage(newMessage) {
                this.$emit('newMessage', newMessage);
            },
            backToContacts() {
                this.$emit('backToContacts');
            },
            showSpiritualStageSection(val) {
                this.$emit('showSpiritualStageSection', val);
            }
        },
    }
</script>
