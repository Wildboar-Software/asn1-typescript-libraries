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
 * Which party sent the SMS: the target (mobile originated), the server (mobile
 * terminated), or unknown. Mandatory on an SMS REPORT.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1, table 6.7, and table 15.2.3.1; annex B.3.
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
 * The target sent the SMS (mobile originated). Mandatory indication on an SMS
 * REPORT: the initiator is the target, the server, or undefined. 3GPP TS
 * 33.108, table 6.7 and table 15.2.3.1.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_target: _enum_for_SMS_report_sMS_Contents_sms_initiator.target = _enum_for_SMS_report_sMS_Contents_sms_initiator.target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary target
 * @description
 * 
 * The target sent the SMS (3GPP TS 33.108, table 6.7).
 * 
 * @constant
 * @type {number}
 */
export
const target: _enum_for_SMS_report_sMS_Contents_sms_initiator.target = SMS_report_sMS_Contents_sms_initiator_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_server
 * @description
 * 
 * The server sent the SMS (mobile terminated). Mandatory indication on an SMS
 * REPORT. 3GPP TS 33.108, table 6.7 and table 15.2.3.1.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_server: _enum_for_SMS_report_sMS_Contents_sms_initiator.server = _enum_for_SMS_report_sMS_Contents_sms_initiator.server; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server
 * @description
 * 
 * The server sent the SMS (3GPP TS 33.108, table 6.7).
 * 
 * @constant
 * @type {number}
 */
export
const server: _enum_for_SMS_report_sMS_Contents_sms_initiator.server = SMS_report_sMS_Contents_sms_initiator_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_undefined_party
 * @description
 * 
 * The party that sent the SMS is undefined: neither identified as the target
 * nor as the server. Table 6.7 requires the initiator to say MO, MT, or
 * undefined. 3GPP TS 33.108, table 6.7.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_undefined_party: _enum_for_SMS_report_sMS_Contents_sms_initiator.undefined_party = _enum_for_SMS_report_sMS_Contents_sms_initiator.undefined_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @description
 * 
 * The SMS sender is undefined (3GPP TS 33.108, table 6.7).
 * 
 * @constant
 * @type {number}
 */
export
const undefined_party: _enum_for_SMS_report_sMS_Contents_sms_initiator.undefined_party = SMS_report_sMS_Contents_sms_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_sms_initiator: $.ASN1Decoder<SMS_report_sMS_Contents_sms_initiator> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_sms_initiator: $.ASN1Encoder<SMS_report_sMS_Contents_sms_initiator> = $._encodeEnumerated;


/* eslint-enable */
