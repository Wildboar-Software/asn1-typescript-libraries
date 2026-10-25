/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_transfer_status {
    succeed_transfer = 0,
    not_succeed_transfer = 1,
    undefined = 2,
}

/**
 * @summary SMS_report_sMS_Contents_transfer_status
 * @description
 * 
 * Whether transfer of the SMS succeeded. The module comment defines the success
 * value. The SMS REPORT table in clause 6 does not list this indicator.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-transfer-status ::= ENUMERATED {
 *     succeed-transfer    (0), -- the transfer of the SMS message succeeds
 *     not-succeed-transfer(1),
 *     undefined            (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_transfer_status = _enum_for_SMS_report_sMS_Contents_transfer_status | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_transfer_status_succeed_transfer
 * @description
 * 
 * Transfer of the SMS succeeded (module comment). The SMS REPORT table in
 * clause 6 does not list this indicator.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_succeed_transfer: SMS_report_sMS_Contents_transfer_status = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary succeed_transfer
 * @description
 * 
 * SMS transfer succeeded (module comment).
 * @constant
 * @type {number}
 */
export
const succeed_transfer: SMS_report_sMS_Contents_transfer_status = SMS_report_sMS_Contents_transfer_status_succeed_transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_transfer_status_not_succeed_transfer
 * @description
 * 
 * Transfer of the SMS did not succeed. The module gives no further cause. The
 * SMS REPORT table does not list this indicator.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_not_succeed_transfer: SMS_report_sMS_Contents_transfer_status = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_succeed_transfer
 * @description
 * 
 * SMS transfer did not succeed.
 * @constant
 * @type {number}
 */
export
const not_succeed_transfer: SMS_report_sMS_Contents_transfer_status = SMS_report_sMS_Contents_transfer_status_not_succeed_transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_transfer_status_undefined
 * @description
 * 
 * The transfer result is undefined. The SMS REPORT table does not list this
 * indicator.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_undefined: SMS_report_sMS_Contents_transfer_status = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 * 
 * SMS transfer result is undefined.
 * @constant
 * @type {number}
 */
export
const undefined: SMS_report_sMS_Contents_transfer_status = SMS_report_sMS_Contents_transfer_status_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_transfer_status: $.ASN1Decoder<SMS_report_sMS_Contents_transfer_status> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_transfer_status: $.ASN1Encoder<SMS_report_sMS_Contents_transfer_status> = $._encodeEnumerated;


/* eslint-enable */
