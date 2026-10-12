/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_E_mail_Protocol {
    smtp = 1,
    pop3 = 2,
    imap4 = 3,
    webmail = 4,
    undefined = 255,
}

/**
 * @summary E_mail_Protocol
 * @description
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
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_smtp: E_mail_Protocol = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smtp
 * @constant
 * @type {number}
 */
export
const smtp: E_mail_Protocol = E_mail_Protocol_smtp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_pop3
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_pop3: E_mail_Protocol = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pop3
 * @constant
 * @type {number}
 */
export
const pop3: E_mail_Protocol = E_mail_Protocol_pop3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_imap4
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_imap4: E_mail_Protocol = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imap4
 * @constant
 * @type {number}
 */
export
const imap4: E_mail_Protocol = E_mail_Protocol_imap4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_webmail
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_webmail: E_mail_Protocol = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary webmail
 * @constant
 * @type {number}
 */
export
const webmail: E_mail_Protocol = E_mail_Protocol_webmail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Protocol_undefined
 * @constant
 * @type {number}
 */
export
const E_mail_Protocol_undefined: E_mail_Protocol = 255; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: E_mail_Protocol = E_mail_Protocol_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_E_mail_Protocol: $.ASN1Decoder<E_mail_Protocol> = $._decodeEnumerated;
export const _encode_E_mail_Protocol: $.ASN1Encoder<E_mail_Protocol> = $._encodeEnumerated;


/* eslint-enable */
