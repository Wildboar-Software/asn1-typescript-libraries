/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_sms_initiator {
    target = 0,
    server = 1,
    undefined_party = 2,
}

/**
 * @summary SMS_report_sMS_Contents_sms_initiator
 * @description
 * 
 * Which party sent the SMS (module comment). Mandatory on the SMS REPORT
 * (clause 6): whether the SMS is mobile-originated, mobile-terminated, or
 * undefined (table 6.2). The module names the sender as the target, the server,
 * or an undefined party.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-sms-initiator ::= ENUMERATED { -- party which sent the  SMS
 *     target            (0),
 *     server            (1),
 *     undefined-party    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_sms_initiator = _enum_for_SMS_report_sMS_Contents_sms_initiator | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_target
 * @description
 * 
 * The target sent the SMS (module comment: the party which sent the SMS).
 * Clause 6 requires the initiator to show mobile-originated, mobile-terminated,
 * or undefined. This value is the target as sender.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_target: _enum_for_SMS_report_sMS_Contents_sms_initiator.target = _enum_for_SMS_report_sMS_Contents_sms_initiator.target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary target
 * @description
 * 
 * The target sent the SMS (clause 6 SMS initiator).
 * @constant
 * @type {number}
 */
export
const target: _enum_for_SMS_report_sMS_Contents_sms_initiator.target = SMS_report_sMS_Contents_sms_initiator_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_server
 * @description
 * 
 * The server sent the SMS (module comment). Clause 6 requires the initiator to
 * show mobile-originated, mobile-terminated, or undefined. This value is the
 * server as sender.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_server: _enum_for_SMS_report_sMS_Contents_sms_initiator.server = _enum_for_SMS_report_sMS_Contents_sms_initiator.server; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server
 * @description
 * 
 * The server sent the SMS (clause 6 SMS initiator).
 * @constant
 * @type {number}
 */
export
const server: _enum_for_SMS_report_sMS_Contents_sms_initiator.server = SMS_report_sMS_Contents_sms_initiator_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_undefined_party
 * @description
 * 
 * The sending party is undefined (module comment). Clause 6 table 6.2 calls the
 * third initiator case Undefined.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_undefined_party: _enum_for_SMS_report_sMS_Contents_sms_initiator.undefined_party = _enum_for_SMS_report_sMS_Contents_sms_initiator.undefined_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @description
 * 
 * The SMS sender is undefined (clause 6 table 6.2).
 * @constant
 * @type {number}
 */
export
const undefined_party: _enum_for_SMS_report_sMS_Contents_sms_initiator.undefined_party = SMS_report_sMS_Contents_sms_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_sms_initiator: $.ASN1Decoder<SMS_report_sMS_Contents_sms_initiator> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_sms_initiator: $.ASN1Encoder<SMS_report_sMS_Contents_sms_initiator> = $._encodeEnumerated;


/* eslint-enable */
