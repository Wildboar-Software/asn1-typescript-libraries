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
 * Whether transfer of the SMS succeeded. Annex B.3 defines the successful
 * value. Stage 2 does not say when each value is chosen. National options in
 * clause 6.5.1.1 choose whether the SMS REPORT is triggered when the SGSN
 * receives the SMS or when the SMS-Centre reports success.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1 and annex B.3.
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
 * Transfer of the SMS succeeded. Annex B.3. Stage 2 does not say when this
 * value is selected. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_succeed_transfer = _enum_for_SMS_report_sMS_Contents_transfer_status.succeed_transfer satisfies SMS_report_sMS_Contents_transfer_status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary succeed_transfer
 * @description
 * 
 * SMS transfer succeeded (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const succeed_transfer = SMS_report_sMS_Contents_transfer_status_succeed_transfer satisfies SMS_report_sMS_Contents_transfer_status; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_transfer_status_not_succeed_transfer
 * @description
 * 
 * Transfer of the SMS did not succeed. Annex B.3 names the value and does not
 * add a cause. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_not_succeed_transfer = _enum_for_SMS_report_sMS_Contents_transfer_status.not_succeed_transfer satisfies SMS_report_sMS_Contents_transfer_status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_succeed_transfer
 * @description
 * 
 * SMS transfer did not succeed (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const not_succeed_transfer = SMS_report_sMS_Contents_transfer_status_not_succeed_transfer satisfies SMS_report_sMS_Contents_transfer_status; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_transfer_status_undefined
 * @description
 * 
 * Whether the SMS transfer succeeded is undefined. Annex B.3 names the value
 * and does not say when it is used. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_transfer_status_undefined = _enum_for_SMS_report_sMS_Contents_transfer_status.undefined satisfies SMS_report_sMS_Contents_transfer_status; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 * 
 * SMS transfer outcome is undefined (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const undefined = SMS_report_sMS_Contents_transfer_status_undefined satisfies SMS_report_sMS_Contents_transfer_status; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_transfer_status: $.ASN1Decoder<SMS_report_sMS_Contents_transfer_status> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_transfer_status: $.ASN1Encoder<SMS_report_sMS_Contents_transfer_status> = $._encodeEnumerated;


/* eslint-enable */
