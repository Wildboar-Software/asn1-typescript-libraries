/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_target: SMS_report_sMS_Contents_sms_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary target
 * @constant
 * @type {number}
 */
export
const target: SMS_report_sMS_Contents_sms_initiator = SMS_report_sMS_Contents_sms_initiator_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_server
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_server: SMS_report_sMS_Contents_sms_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server
 * @constant
 * @type {number}
 */
export
const server: SMS_report_sMS_Contents_sms_initiator = SMS_report_sMS_Contents_sms_initiator_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_sms_initiator_undefined_party
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_sms_initiator_undefined_party: SMS_report_sMS_Contents_sms_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @constant
 * @type {number}
 */
export
const undefined_party: SMS_report_sMS_Contents_sms_initiator = SMS_report_sMS_Contents_sms_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_sms_initiator: $.ASN1Decoder<SMS_report_sMS_Contents_sms_initiator> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_sms_initiator: $.ASN1Encoder<SMS_report_sMS_Contents_sms_initiator> = $._encodeEnumerated;


/* eslint-enable */
