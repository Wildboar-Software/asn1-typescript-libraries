/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_IPAddress_iP_assignment
 * @description
 *
 * How the reported address was assigned. The three codings below are
 * normative. The module states no further procedure.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_IPAddress_iP_assignment {
    /**
     * Shall be used to report a static address.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    static_ = 1,
    /**
     * Shall be used to report a dynamically allocated address.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dynamic = 2,
    /**
     * Shall be used to report an address other than a static address or a
     * dynamically allocated address.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    notKnown = 3,
}

/**
 * @summary IPAddress_iP_assignment
 * @description
 *
 * How the reported address was assigned. The three codings below are
 * normative. The module states no further procedure.
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
 * IPAddress-iP-assignment ::= ENUMERATED {
 *     static(1),
 *     -- The static coding shall be used to report a static address.
 *     dynamic(2),
 *     -- The dynamic coding shall be used to report a dynamically allocated address.
 *     notKnown(3),
 *     -- The notKnown coding shall be used to report other then static or dynamically
 *     -- allocated IP addresses.
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPAddress_iP_assignment = _enum_for_IPAddress_iP_assignment | ENUMERATED;

/**
 * @summary IPAddress_iP_assignment_static_
 * @description
 *
 * Shall be used to report a static address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_static_: IPAddress_iP_assignment = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @description
 *
 * Shall be used to report a static address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const static_: IPAddress_iP_assignment = IPAddress_iP_assignment_static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_assignment_dynamic
 * @description
 *
 * Shall be used to report a dynamically allocated address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_dynamic: IPAddress_iP_assignment = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic
 * @description
 *
 * Shall be used to report a dynamically allocated address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dynamic: IPAddress_iP_assignment = IPAddress_iP_assignment_dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_assignment_notKnown
 * @description
 *
 * Shall be used to report an address other than a static address or a
 * dynamically allocated address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_notKnown: IPAddress_iP_assignment = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notKnown
 * @description
 *
 * Shall be used to report an address other than a static address or a
 * dynamically allocated address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const notKnown: IPAddress_iP_assignment = IPAddress_iP_assignment_notKnown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPAddress_iP_assignment: $.ASN1Decoder<IPAddress_iP_assignment> = $._decodeEnumerated;
export const _encode_IPAddress_iP_assignment: $.ASN1Encoder<IPAddress_iP_assignment> = $._encodeEnumerated;


/* eslint-enable */
