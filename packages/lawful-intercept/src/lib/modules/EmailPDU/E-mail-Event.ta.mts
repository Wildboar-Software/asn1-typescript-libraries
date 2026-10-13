/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_E_mail_Event {
    e_mail_send = 1,
    e_mail_receive = 2,
    e_mail_download = 3,
    e_mail_logon_attempt = 4,
    e_mail_logon = 5,
    e_mail_logon_failure = 6,
    e_mail_logoff = 7,
    e_mail_partial_download = 8,
    e_mail_upload = 9,
}

/**
 * @summary E_mail_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Event  ::=  ENUMERATED
 * {
 *     e-mail-send(1),
 *     e-mail-receive(2),
 *     e-mail-download(3),
 *     ...,
 *     e-mail-logon-attempt(4),
 *     e-mail-logon(5),
 *     e-mail-logon-failure(6),
 *     e-mail-logoff(7),
 *     e-mail-partial-download(8),
 *     e-mail-upload(9)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type E_mail_Event = _enum_for_E_mail_Event | ENUMERATED;

/**
 * @summary E_mail_Event_e_mail_send
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_send: E_mail_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_send
 * @constant
 * @type {number}
 */
export
const e_mail_send: E_mail_Event = E_mail_Event_e_mail_send; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_receive
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_receive: E_mail_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_receive
 * @constant
 * @type {number}
 */
export
const e_mail_receive: E_mail_Event = E_mail_Event_e_mail_receive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_download
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_download: E_mail_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_download
 * @constant
 * @type {number}
 */
export
const e_mail_download: E_mail_Event = E_mail_Event_e_mail_download; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logon_attempt
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logon_attempt: E_mail_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logon_attempt
 * @constant
 * @type {number}
 */
export
const e_mail_logon_attempt: E_mail_Event = E_mail_Event_e_mail_logon_attempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logon
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logon: E_mail_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logon
 * @constant
 * @type {number}
 */
export
const e_mail_logon: E_mail_Event = E_mail_Event_e_mail_logon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logon_failure
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logon_failure: E_mail_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logon_failure
 * @constant
 * @type {number}
 */
export
const e_mail_logon_failure: E_mail_Event = E_mail_Event_e_mail_logon_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_logoff
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_logoff: E_mail_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_logoff
 * @constant
 * @type {number}
 */
export
const e_mail_logoff: E_mail_Event = E_mail_Event_e_mail_logoff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_partial_download
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_partial_download: E_mail_Event = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_partial_download
 * @constant
 * @type {number}
 */
export
const e_mail_partial_download: E_mail_Event = E_mail_Event_e_mail_partial_download; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Event_e_mail_upload
 * @constant
 * @type {number}
 */
export
const E_mail_Event_e_mail_upload: E_mail_Event = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mail_upload
 * @constant
 * @type {number}
 */
export
const e_mail_upload: E_mail_Event = E_mail_Event_e_mail_upload; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_E_mail_Event: $.ASN1Decoder<E_mail_Event> = $._decodeEnumerated;
export const _encode_E_mail_Event: $.ASN1Encoder<E_mail_Event> = $._encodeEnumerated;


/* eslint-enable */
