/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMS_report_sMS_Contents_initiator {
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    target = 0,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    server = 1,
    /**
     * The specification gives the name and no further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    undefined_party = 2,
}

/**
 * @summary SMS_report_sMS_Contents_initiator
 * @description
 * 
 * Party which sent the SMS. An extension marker follows the named parties. The
 * specification gives each name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-initiator ::= ENUMERATED {
 *     -- party which sent the SMS
 *     target(0),
 *     server(1),
 *     undefined-party(2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_report_sMS_Contents_initiator = _enum_for_SMS_report_sMS_Contents_initiator | ENUMERATED;

/**
 * @summary SMS_report_sMS_Contents_initiator_target
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_target: SMS_report_sMS_Contents_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary target
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const target: SMS_report_sMS_Contents_initiator = SMS_report_sMS_Contents_initiator_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_initiator_server
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_server: SMS_report_sMS_Contents_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const server: SMS_report_sMS_Contents_initiator = SMS_report_sMS_Contents_initiator_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_initiator_undefined_party
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_undefined_party: SMS_report_sMS_Contents_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @description
 *
 * The specification gives the name and no further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const undefined_party: SMS_report_sMS_Contents_initiator = SMS_report_sMS_Contents_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_initiator: $.ASN1Decoder<SMS_report_sMS_Contents_initiator> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_initiator: $.ASN1Encoder<SMS_report_sMS_Contents_initiator> = $._encodeEnumerated;


/* eslint-enable */
