/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_SMS_report_sMS_Contents_other_message
 * @description
 *
 * On a terminating call, whether the server will send another SMS: yes, no, or
 * undefined. The module states no further meaning for undefined.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_SMS_report_sMS_Contents_other_message {
    /**
     * On a terminating call, the server will send another SMS.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    yes = 0,
    /**
     * On a terminating call, the server will not send another SMS.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    no = 1,
    /**
     * On a terminating call, whether the server will send another SMS is named
     * `undefined`. The module states no further meaning.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    undefined = 2,
}

/**
 * @summary SMS_report_sMS_Contents_other_message
 * @description
 *
 * On a terminating call, whether the server will send another SMS: yes, no, or
 * undefined. The module states no further meaning for undefined.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-other-message ::= ENUMERATED {
 *     -- In case of terminating call, indicates if the server will send other SMS.
 *     yes(0),
 *     no(1),
 *     undefined(2),
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
 * On a terminating call, the server will send another SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_yes = _enum_for_SMS_report_sMS_Contents_other_message.yes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary yes
 * @description
 *
 * On a terminating call, the server will send another SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const yes = SMS_report_sMS_Contents_other_message_yes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_no
 * @description
 *
 * On a terminating call, the server will not send another SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_no = _enum_for_SMS_report_sMS_Contents_other_message.no; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no
 * @description
 *
 * On a terminating call, the server will not send another SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const no = SMS_report_sMS_Contents_other_message_no; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_other_message_undefined
 * @description
 *
 * On a terminating call, whether the server will send another SMS is named
 * `undefined`. The module states no further meaning.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_other_message_undefined = _enum_for_SMS_report_sMS_Contents_other_message.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 *
 * On a terminating call, whether the server will send another SMS is named
 * `undefined`. The module states no further meaning.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const undefined = SMS_report_sMS_Contents_other_message_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_other_message: $.ASN1Decoder<SMS_report_sMS_Contents_other_message> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_other_message: $.ASN1Encoder<SMS_report_sMS_Contents_other_message> = $._encodeEnumerated;


/* eslint-enable */
