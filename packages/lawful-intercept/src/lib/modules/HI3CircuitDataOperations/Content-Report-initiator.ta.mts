/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_Content_Report_initiator
 * @description
 *
 * Party on `Content-Report`. Optional there. Clause D.6 names
 * `originating-party`, `terminating-party`, `forwarded-to-party`, and
 * `undefined-party`, and does not define further behaviour for any of them.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Content-Report-initiator ::= ENUMERATED {
 *     originating-party(0),
 *     terminating-party(1),
 *     forwarded-to-party(2),
 *     undefined-party(3),
 *     ...
 * }
 * ```
 *
 * @enum {number}
 */

export
enum _enum_for_Content_Report_initiator {
    /**
     * Value 0, `originating-party`. Clause D.6 gives this name and does not
     * define further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    originating_party = 0,
    /**
     * Value 1, `terminating-party`. Clause D.6 gives this name and does not
     * define further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    terminating_party = 1,
    /**
     * Value 2, `forwarded-to-party`. Clause D.6 gives this name and does not
     * define further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    forwarded_to_party = 2,
    /**
     * Value 3, `undefined-party`. Clause D.6 gives this name and does not
     * define further behaviour.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    undefined_party = 3,
}

/**
 * @summary Content_Report_initiator
 * @description
 *
 * Party on `Content-Report`. Optional there. Clause D.6 names
 * `originating-party`, `terminating-party`, `forwarded-to-party`, and
 * `undefined-party`, and does not define further behaviour for any of them.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Content-Report-initiator ::= ENUMERATED {
 *     originating-party(0),
 *     terminating-party(1),
 *     forwarded-to-party(2),
 *     undefined-party(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Content_Report_initiator = _enum_for_Content_Report_initiator | ENUMERATED;

/**
 * @summary Content_Report_initiator_originating_party
 * @description
 *
 * Value 0, `originating-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_originating_party: Content_Report_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_party
 * @description
 *
 * Value 0, `originating-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const originating_party: Content_Report_initiator = Content_Report_initiator_originating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Content_Report_initiator_terminating_party
 * @description
 *
 * Value 1, `terminating-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_terminating_party: Content_Report_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_party
 * @description
 *
 * Value 1, `terminating-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const terminating_party: Content_Report_initiator = Content_Report_initiator_terminating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Content_Report_initiator_forwarded_to_party
 * @description
 *
 * Value 2, `forwarded-to-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_forwarded_to_party: Content_Report_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded_to_party
 * @description
 *
 * Value 2, `forwarded-to-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const forwarded_to_party: Content_Report_initiator = Content_Report_initiator_forwarded_to_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Content_Report_initiator_undefined_party
 * @description
 *
 * Value 3, `undefined-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_undefined_party: Content_Report_initiator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @description
 *
 * Value 3, `undefined-party`. Clause D.6 gives this name and does not
 * define further behaviour.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const undefined_party: Content_Report_initiator = Content_Report_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Content_Report_initiator: $.ASN1Decoder<Content_Report_initiator> = $._decodeEnumerated;
export const _encode_Content_Report_initiator: $.ASN1Encoder<Content_Report_initiator> = $._encodeEnumerated;


/* eslint-enable */
