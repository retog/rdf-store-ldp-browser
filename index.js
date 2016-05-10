var LdpStore = require('rdf-store-ldp');
//var MimeTypeUtil = require('rdf-mime-type-util');
//LdpStore.ParserUtil = MimeTypeUtil.ParserUtil;
//LdpStore.parsers = MimeTypeUtil.parsers;
if (typeof window !== 'undefined') {
    window.LdpStore = LdpStore;
}