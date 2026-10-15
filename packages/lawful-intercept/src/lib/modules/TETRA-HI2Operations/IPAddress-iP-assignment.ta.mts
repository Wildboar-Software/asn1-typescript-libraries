/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPAddress_iP_assignment {
    /**
     * The address is static. This coding shall be used to report a static
     * address.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    static_ = 1,
    /**
     * The address was allocated dynamically. This coding shall be used to
     * report a dynamically allocated address.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dynamic = 2,
    /**
     * The address is neither a static address nor a dynamically allocated
     * address. This coding shall be used for that case.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    notKnown = 3,
}

/**
 * @summary IPAddress_iP_assignment
 * @description
 * 
 * How an IP address was assigned to the subscriber. An extension marker follows
 * the named assignments.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
 * The address is static. This coding shall be used to report a static address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The address is static. This coding shall be used to report a static address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The address was allocated dynamically. This coding shall be used to report a
 * dynamically allocated address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The address was allocated dynamically. This coding shall be used to report a
 * dynamically allocated address.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The address is neither a static address nor a dynamically allocated address.
 * This coding shall be used for that case.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
 * The address is neither a static address nor a dynamically allocated address.
 * This coding shall be used for that case.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
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
