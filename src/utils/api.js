/* eslint-disable no-unused-vars */

import _ from 'lodash';

const Api = {
    fetchConversationsList: async function () {
        // let contacts = await axios.get('/basic/instant_messages');
        return [
            {
                conversation_id: 1,
                contact: {
                    name: 'Mary',
                    sex: 'Female'
                },
                last_seen: '01/05/2020',
                unread_count: 1,
                img: ''
            },
            {
                conversation_id: 3,
                contact: {
                    name: 'Jake ',
                    sex: 'Male'
                },
                last_seen: '01/05/2020',
                unread_count: 2,
                img: ''
            }, {
                conversation_id: 2,
                contact: {
                    name: 'Bereket',
                    sex: 'Male'
                },
                last_seen: '01/05/2020',
                unread_count: 0,
                img: 'https://i.stack.imgur.com/oi2Ei.jpg'
            }
        ];
    },

    getMessagesOfConversation: async function (conversation_id) {

        let sample_conversation_data = [
            {
                conversation_id: 1,
                messages: [
                    {
                        body: 'Hey Buddy',
                        sender_id: 2,
                        created_at: '02/01/2020',
                        is_read: true
                    },
                    {
                        body: 'Hello there',
                        sender_id: 1,
                        created_at: '02/01/2020',
                        is_read: true
                    }, {
                        body: 'I hv got a very awesome and interesting repo worth sharing.',
                        sender_id: 2,
                        created_at: '02/01/2020',
                        is_read: true
                    }, {
                        body: 'Oh really plz share me, ',
                        sender_id: 1,
                        created_at: '02/01/2020',
                        is_read: true
                    }, {
                        body: 'https://github.com/Bereket-G/a-for-apple.   I hope u going contribute  ',
                        sender_id: 2,
                        created_at: '02/01/2020',
                        is_read: true
                    }, {
                        body: 'Oh yeah why not...',
                        sender_id: 1,
                        created_at: '02/01/2020',
                        is_read: true
                    },
                ]
            },
            {
                conversation_id: 2,
                messages: [
                    {
                        body: 'Hey Buddy, I have been looking for a whatsapp clone repo.       Finally I found this.',
                        sender_id: 2,
                        created_at: '02/01/2020',
                        is_read: true
                    },
                    {
                        body: 'Me too. I starred this repo after I have checked the file structures. ',
                        sender_id: 1,
                        created_at: '02/01/2020',
                        is_read: true
                    }]
            },
            {
                conversation_id: 3,
                messages: [
                    {
                        body: 'Hey man, there is some issue with our yesterday build. Can u check it ? Its working on my machine',
                        sender_id: 2,
                        created_at: '02/01/2020',
                        is_read: false
                    },
                    {
                        body: 'Rose are red, ' +
                            'Skies are blue ' +
                            'I would hv not pushed the .env file if i were you.' +
                            ' \n ' +
                            'Looooooooool :-0 ',
                        sender_id: 1,
                        created_at: '02/01/2020',
                        is_read: true
                    }]
            }
        ];

        return (_.find(sample_conversation_data, ['conversation_id', conversation_id])).messages;
    },

    replyToMessage: async function (conversation_id, message_id, reply) {
        const newConversation = {
            cid: conversation_id,
            mid: message_id,
            reply: reply
        };
        // let result = await axios.post(`/conversation/${conversation_id}/instant_reply`, newConversation);
        return [];
    },

    markConversationRead: async function (conversation_id) {
        // return await axios.get(`/conversation/${conversation_id}/mark/read`);
    },

    getUserDetail: function () {
        return {
            username: 'Bereket',
            user_id: 1,
            last_seen: '02/02/2020'
        }
    }

};


export default Api;
