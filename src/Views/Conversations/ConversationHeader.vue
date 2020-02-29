<template>
    <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
        <div class="flex items-center" v-if="contact">

            <span @click="backToContactsClicked()" class="span show-on-small-screen" style="padding: 10px">
                <i class="fa fa-arrow-left"> </i>
            </span>

            <div class="w-15 h-15 rounded-full" style="height: 49px; width: 49px;">
                <img v-if="contact.img.length > 0" class="rounded-full"
                     v-bind:src="contact.img">
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212">
                    <path fill="#DFE5E7" class="background"
                          d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path>
                    <path fill="#FFF" class="primary"
                          d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path>
                </svg>
            </div>

            <div class="ml-4">
                <small class="no-padding text-grey-darkest" style="font-weight: bold">
                    {{ contact.contact.name | firstNameOnly}}
                </small>
                <p class="text-xs px-1 py-1 rounded">
                    {{ contact.last_seen }}
                </p>
            </div>
        </div>



        <div class="flex dropdown inline-block relative" v-if="contact">

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
            </div>

            <div class="ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
            </div>

            <div v-click-outside="hideDropDown">
                <div class="ml-3" @click="toggleHeaderDropDown()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="#263238" fill-opacity=".6"
                              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                    </svg>
                </div>
                <ul v-if="showHeaderDropDown" class="dropdown-menu block -ml-32 text-left absolute text-gray-700 pt-1">
                    <li class="divider"></li>
                    <li class=""><a class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"> Contact info</a></li>
                    <li class=""><a class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"> Select Messages</a></li>
                    <li class=""><a class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"> Mute notifications</a></li>
                    <li class=""><a class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"> Clear messages</a></li>
                    <li class=""><a class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"> Delete Chat</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

    import ClickOutside from 'vue-click-outside';

    export default {
        name: 'ConversationHeader',
        props: {
            contact: {
                type: Object,
                default() {
                    return null;
                }
            }
        },
        data() {
            return {
                showHeaderDropDown: false
            }
        },
        methods: {
            backToContactsClicked() {
                this.$emit('backToContacts');
            },
            toggleHeaderDropDown() {
                this.showHeaderDropDown = !this.showHeaderDropDown;
            },
            showSpiritualStageSection() {
                this.$emit('showSpiritualStageSection', true);
            },
            hideDropDown() {
                this.showHeaderDropDown = false;
            }
        },
        filters: {
            firstNameOnly: function (name) {
                return name.indexOf(' ') === -1 ? name : name.substr(0, name.indexOf(' '));
            }
        },
        directives: {
            ClickOutside
        }
    }
</script>
