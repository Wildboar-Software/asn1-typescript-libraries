/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_SMS_report_sMS_Contents_initiator
 * @description
 *
 * Party which sent the SMS: the target, the server, or a party the module
 * names `undefined-party`. No further meaning is stated for `undefined-party`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_SMS_report_sMS_Contents_initiator {
    /**
     * The target sent the SMS.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    target = 0,
    /**
     * The server sent the SMS.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    server = 1,
    /**
     * A sending party named `undefined-party`. The module states no further
     * meaning.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    undefined_party = 2,
}

/**
 * @summary SMS_report_sMS_Contents_initiator
 * @description
 *
 * Party which sent the SMS: the target, the server, or a party the module
 * names `undefined-party`. No further meaning is stated for `undefined-party`.
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
 * The target sent the SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_target: _enum_for_SMS_report_sMS_Contents_initiator.target = _enum_for_SMS_report_sMS_Contents_initiator.target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary target
 * @description
 *
 * The target sent the SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const target: _enum_for_SMS_report_sMS_Contents_initiator.target = SMS_report_sMS_Contents_initiator_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_initiator_server
 * @description
 *
 * The server sent the SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_server: _enum_for_SMS_report_sMS_Contents_initiator.server = _enum_for_SMS_report_sMS_Contents_initiator.server; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server
 * @description
 *
 * The server sent the SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const server: _enum_for_SMS_report_sMS_Contents_initiator.server = SMS_report_sMS_Contents_initiator_server; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_report_sMS_Contents_initiator_undefined_party
 * @description
 *
 * A sending party named `undefined-party`. The module states no further
 * meaning.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SMS_report_sMS_Contents_initiator_undefined_party: _enum_for_SMS_report_sMS_Contents_initiator.undefined_party = _enum_for_SMS_report_sMS_Contents_initiator.undefined_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @description
 *
 * A sending party named `undefined-party`. The module states no further
 * meaning.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const undefined_party: _enum_for_SMS_report_sMS_Contents_initiator.undefined_party = SMS_report_sMS_Contents_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SMS_report_sMS_Contents_initiator: $.ASN1Decoder<SMS_report_sMS_Contents_initiator> = $._decodeEnumerated;
export const _encode_SMS_report_sMS_Contents_initiator: $.ASN1Encoder<SMS_report_sMS_Contents_initiator> = $._encodeEnumerated;


/* eslint-enable */
