/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Email application or protocol at the point of interception. It indicates
 * which annex has the encoding rules. The enumeration is not closed.
 *
 * Annex H advises against defining email IRI or content specifically for
 * webmail, because the HTTP exchanges are application-specific and change
 * without notice. Webmail can instead be intercepted as the SMTP and POP3 that
 * the webmail server uses; the customer IP address is then the webmail server's
 * address unless it is correlated with HTTP or with web-server logs.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex H.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_E_mail_Protocol {
    /**
     * Simple Mail Transfer Protocol, IETF RFC 5321. A push of mail from one
     * host to another; the sender need not be the origin and the receiver need
     * not be the final destination. Events and attribute mapping are in annex
     * A. There is no mailbox notion in SMTP itself.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex A.
     */
    smtp = 1,
    /**
     * Post Office Protocol version 3, IETF RFC 1939. Remote manipulation of
     * mail stored in a mailbox. No send facility. Events and attribute mapping
     * are in annex B.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex B.
     */
    pop3 = 2,
    /**
     * Internet Message Access Protocol version 4rev2, IETF RFC 9051. Mailbox
     * access plus folder create, change, and delete. `APPEND` is the send-like
     * operation. Event mapping is in annex C.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex C.
     */
    imap4 = 3,
    /**
     * Web access to mail. See annex H. The HTTP dialogue is not standardised.
     * The specification's advice is not to invent email IRI or content just to
     * accommodate webmail; intercept the underlying SMTP and POP3 where
     * possible.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex H.
     */
    webmail = 4,
    /**
     * The protocol is not known, or it cannot be represented by the current
     * enumeration.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`E-mail-Protocol`).
     */
    undefined = 255,
}

/**
 * @summary E_mail_Protocol
 * @description
 *
 * Email application or protocol at the point of interception. It indicates
 * which annex has the encoding rules. The enumeration is not closed.
 *
 * Annex H advises against defining email IRI or content specifically for
 * webmail, because the HTTP exchanges are application-specific and change
 * without notice. Webmail can instead be intercepted as the SMTP and POP3 that
 * the webmail server uses; the customer IP address is then the webmail server's
 * address unless it is correlated with HTTP or with web-server logs.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex H.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Protocol  ::=  ENUMERATED
 * {
 *     smtp(1),
 *     pop3(2),
 *     imap4(3),
 *     webmail(4),
 *         -- See Annex H for more information
 *     undefined(255),
 *         -- The protocol is not known or not representable by the current enumeration
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type E_mail_Protocol = _enum_for_E_mail_Protocol | ENUMERATED;

/**
 * @summary E_mail_Protocol_smtp
 * @description
 *
 * Simple Mail Transfer Protocol, IETF RFC 5321. A push of mail from one host to
 * another; the sender need not be the origin and the receiver need not be the
 * final destination. Events and attribute mapping are in annex A. There is no
 * mailbox notion in SMTP itself.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_smtp = _enum_for_E_mail_Protocol.smtp; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smtp
 * @description
 *
 * Simple Mail Transfer Protocol, IETF RFC 5321. A push of mail from one host to
 * another; the sender need not be the origin and the receiver need not be the
 * final destination. Events and attribute mapping are in annex A. There is no
 * mailbox notion in SMTP itself.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const smtp = E_mail_Protocol_smtp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_pop3
 * @description
 *
 * Post Office Protocol version 3, IETF RFC 1939. Remote manipulation of mail
 * stored in a mailbox. No send facility. Events and attribute mapping are in
 * annex B.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex B.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_pop3 = _enum_for_E_mail_Protocol.pop3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pop3
 * @description
 *
 * Post Office Protocol version 3, IETF RFC 1939. Remote manipulation of mail
 * stored in a mailbox. No send facility. Events and attribute mapping are in
 * annex B.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex B.
 *
 * @constant
 * @type {number}
 */
export
const pop3 = E_mail_Protocol_pop3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_imap4
 * @description
 *
 * Internet Message Access Protocol version 4rev2, IETF RFC 9051. Mailbox access
 * plus folder create, change, and delete. `APPEND` is the send-like operation.
 * Event mapping is in annex C.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex C.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_imap4 = _enum_for_E_mail_Protocol.imap4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imap4
 * @description
 *
 * Internet Message Access Protocol version 4rev2, IETF RFC 9051. Mailbox access
 * plus folder create, change, and delete. `APPEND` is the send-like operation.
 * Event mapping is in annex C.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex C.
 *
 * @constant
 * @type {number}
 */
export
const imap4 = E_mail_Protocol_imap4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_webmail
 * @description
 *
 * Web access to mail. See annex H. The HTTP dialogue is not standardised. The
 * specification's advice is not to invent email IRI or content just to
 * accommodate webmail; intercept the underlying SMTP and POP3 where possible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex H.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_webmail = _enum_for_E_mail_Protocol.webmail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary webmail
 * @description
 *
 * Web access to mail. See annex H. The HTTP dialogue is not standardised. The
 * specification's advice is not to invent email IRI or content just to
 * accommodate webmail; intercept the underlying SMTP and POP3 where possible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.1 and annex H.
 *
 * @constant
 * @type {number}
 */
export
const webmail = E_mail_Protocol_webmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_undefined
 * @description
 *
 * The protocol is not known, or it cannot be represented by the current
 * enumeration.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`E-mail-Protocol`).
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_undefined = _enum_for_E_mail_Protocol.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 *
 * The protocol is not known, or it cannot be represented by the current
 * enumeration.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`E-mail-Protocol`).
 *
 * @constant
 * @type {number}
 */
export
const undefined = E_mail_Protocol_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_E_mail_Protocol: $.ASN1Decoder<E_mail_Protocol> = $._decodeEnumerated;
export const _encode_E_mail_Protocol: $.ASN1Encoder<E_mail_Protocol> = $._encodeEnumerated;


/* eslint-enable */
