/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_other_message {
    yes = 0,
    no = 1,
    undefined = 2,
}

/**
 * @summary SMS_report_sMS_Contents_other_message
 * @description
 * 
 * On a terminating SMS, whether the server will send further SMS. Annex B.3.
 * Stage 2 table 6.7 does not list this parameter.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-other-message ::= ENUMERATED -- in case of terminating call, indicates if
 * -- the server will send other SMS
 * {
 *     yes            (0),
 *     no            (1),
 *     undefined    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_other_message = _enum_for_SMS_report_sMS_Contents_other_message | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_other_message_yes
 * @description
 * 
 * On a terminating SMS, the server will send further SMS. Annex B.3. Stage 2
 * table 6.7 does not list this parameter. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_yes: _enum_for_SMS_report_sMS_Contents_other_message.yes = _enum_for_SMS_report_sMS_Contents_other_message.yes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @description
 * 
 * The server will send further SMS (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const yes: _enum_for_SMS_report_sMS_Contents_other_message.yes = SMS_report_sMS_Contents_other_message_yes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_no
 * @description
 * 
 * On a terminating SMS, the server will not send further SMS. Annex B.3. Stage
 * 2 table 6.7 does not list this parameter. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_no: _enum_for_SMS_report_sMS_Contents_other_message.no = _enum_for_SMS_report_sMS_Contents_other_message.no; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @description
 * 
 * The server will not send further SMS (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const no: _enum_for_SMS_report_sMS_Contents_other_message.no = SMS_report_sMS_Contents_other_message_no; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_undefined
 * @description
 * 
 * On a terminating SMS, it is undefined whether the server will send further
 * SMS. Annex B.3 does not say when this value is used. 3GPP TS 33.108, annex
 * B.3.
 * 
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_undefined: _enum_for_SMS_report_sMS_Contents_other_message.undefined = _enum_for_SMS_report_sMS_Contents_other_message.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 * 
 * Whether further SMS will be sent is undefined (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const undefined: _enum_for_SMS_report_sMS_Contents_other_message.undefined = SMS_report_sMS_Contents_other_message_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_other_message: $.ASN1Decoder<SMS_report_sMS_Contents_other_message> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_other_message: $.ASN1Encoder<SMS_report_sMS_Contents_other_message> = $._encodeEnumerated;


/* eslint-enable */
