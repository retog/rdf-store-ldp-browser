var LdpStore = require('rdf-store-ldp');
LdpStore.ParserUtil = require('rdf-mime-type-util').ParserUtil;
if (typeof window !== 'undefined') {
    window.LdpStore = LdpStore;
}