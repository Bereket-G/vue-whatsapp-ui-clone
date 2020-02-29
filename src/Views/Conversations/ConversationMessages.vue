<template>
    <div class="flex-1" ref="conv">
        <ul v-if="contact && conversations">
            <div class="flex justify-center mb-4">
                <div class="rounded py-2 px-4" style="background-color: #FCF4CB">
                    <p class="text-xs">
                        Messages to this chat and calls are now secured with end-to-end encryption. Tap for more info.
                    </p>
                </div>
            </div>
            <li v-for='(message , idx) in messages' v-bind:key="message.id"
                :class="`message${message.sender_id === currentUser.user_id ? ' sent' : ' received'}`">

                <div v-if=" idx == 0 ||  (idx > 0 && getDateDifference( message.created_at, conversations[idx - 1].created_at )) "
                     class="flex justify-center mb-2">
                    <div class="rounded pt-1 px-2" style="background-color: #DDECF2">
                        <p class="text-xs uppercase py-1">
                            {{ message.created_at | date }}
                        </p>
                    </div>
                </div>

                <div class="message_body">
                    <div class="text">
                        <p class="text-sm"> {{message.body}} </p>
                        <span class="text-right text-grey-dark mt-1 flex float-right" style="font-size:11px;">
                            {{message.created_at | hours}} &nbsp;
                            <svg class="sent_message_status mx-1" v-if="message.is_read" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15"
                                 width="16" height="15">
                                <path
                                        fill="#4FC3F7"
                                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                            </svg>
                            <svg class="sent_message_status mx-1" v-if="!message.is_read" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path
                                    fill="#92A58C"
                                    d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
                        </span>
                    </div>
                </div>
                <!--                <span class="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle">Paid</span>-->
            </li>
        </ul>
    </div>
</template>
<script>
    import moment from 'moment';
    import Api from "../../utils/api";

    export default {
        name: 'ConversationMessages',
        props: {
            contact: {
                type: Object,
                default() {
                    return null;
                }
            },
            conversations: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods: {
            scrollToBottom() {
                setTimeout(() => {
                    this.$refs.conv.scrollTop = this.$refs.conv.scrollHeight - this.$refs.conv.clientHeight;
                }, 50)
            },
            getDateDifference(timestamp_1, timestamp_2) {
                return moment(timestamp_1).startOf('day').diff(moment(timestamp_2).startOf('day'), 'days');
            }
        },
        watch: {
            conversations(val) {
                this.scrollToBottom();
                this.messages = val;
            },
            messages() {
                this.scrollToBottom();
            }
        },
        filters: {
            date: function (date) {
                return moment(date).format('MMMM DD YYYY');
            },
            hours: function (date) {
                return moment(date).format('h:mm a');
            }
        },
        data  () {
            return {
                currentUser : {},
                messages : this.conversations
            }
        },
        created() {
            this.currentUser = Api.getUserDetail();
            this.$eventHub.$on('newMessage',  (newMessage) => {
                this.messages.push({
                    sender_id : this.currentUser.user_id,
                    body : newMessage.reply,
                    is_read : false,
                    created_at : new Date()
                })
            });
        }
    }
</script>
