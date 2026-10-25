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
 * On a terminating SMS, whether the server will send further SMS (module
 * comment). Values are yes, no, and undefined. The SMS REPORT table in clause 6
 * does not list this indicator.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * On a terminating SMS, the server will send further SMS (module comment). The
 * SMS REPORT table does not list this indicator.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_yes: _enum_for_SMS_report_sMS_Contents_other_message.yes = _enum_for_SMS_report_sMS_Contents_other_message.yes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @description
 * 
 * The server will send further SMS (module comment).
 * @constant
 * @type {number}
 */
export
const yes: _enum_for_SMS_report_sMS_Contents_other_message.yes = SMS_report_sMS_Contents_other_message_yes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_no
 * @description
 * 
 * On a terminating SMS, the server will not send further SMS (module comment).
 * The SMS REPORT table does not list this indicator.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_no: _enum_for_SMS_report_sMS_Contents_other_message.no = _enum_for_SMS_report_sMS_Contents_other_message.no; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @description
 * 
 * The server will not send further SMS (module comment).
 * @constant
 * @type {number}
 */
export
const no: _enum_for_SMS_report_sMS_Contents_other_message.no = SMS_report_sMS_Contents_other_message_no; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_undefined
 * @description
 * 
 * The module does not say whether further SMS will be sent. The SMS REPORT
 * table does not list this indicator.
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_undefined: _enum_for_SMS_report_sMS_Contents_other_message.undefined = _enum_for_SMS_report_sMS_Contents_other_message.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 * 
 * Unspecified whether further SMS will be sent.
 * @constant
 * @type {number}
 */
export
const undefined: _enum_for_SMS_report_sMS_Contents_other_message.undefined = SMS_report_sMS_Contents_other_message_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_other_message: $.ASN1Decoder<SMS_report_sMS_Contents_other_message> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_other_message: $.ASN1Encoder<SMS_report_sMS_Contents_other_message> = $._encodeEnumerated;


/* eslint-enable */
