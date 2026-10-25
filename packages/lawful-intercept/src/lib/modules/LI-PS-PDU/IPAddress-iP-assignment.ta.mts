/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_IPAddress_iP_assignment
 * @description
 *
 * How the reported address was assigned. The three names are the normative
 * coding.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_IPAddress_iP_assignment {
    /**
     * A static address. This coding shall be used for a static address.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    static_ = 1,
    /**
     * A dynamically allocated address. This coding shall be used for that case.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    dynamic = 2,
    /**
     * An address that is neither static nor dynamically allocated. This coding
     * shall be used for that case.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     */
    notKnown = 3,
}

/**
 * @summary IPAddress_iP_assignment
 * @description
 * 
 * How the reported address was assigned. The three names are the normative
 * coding.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
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
 *     -- The notKnown coding shall be used to report other than static or dynamically
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
 * A static address. This coding shall be used for a static address.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_static_ = _enum_for_IPAddress_iP_assignment.static_ satisfies IPAddress_iP_assignment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @description
 *
 * A static address. This coding shall be used for a static address.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const static_ = IPAddress_iP_assignment_static_ satisfies IPAddress_iP_assignment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_assignment_dynamic
 * @description
 *
 * A dynamically allocated address. This coding shall be used for that case.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_dynamic = _enum_for_IPAddress_iP_assignment.dynamic satisfies IPAddress_iP_assignment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic
 * @description
 *
 * A dynamically allocated address. This coding shall be used for that case.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dynamic = IPAddress_iP_assignment_dynamic satisfies IPAddress_iP_assignment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_assignment_notKnown
 * @description
 *
 * An address that is neither static nor dynamically allocated. This coding
 * shall be used for that case.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_notKnown = _enum_for_IPAddress_iP_assignment.notKnown satisfies IPAddress_iP_assignment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notKnown
 * @description
 *
 * An address that is neither static nor dynamically allocated. This coding
 * shall be used for that case.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * @constant
 * @type {number}
 */
export
const notKnown = IPAddress_iP_assignment_notKnown satisfies IPAddress_iP_assignment; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPAddress_iP_assignment: $.ASN1Decoder<IPAddress_iP_assignment> = $._decodeEnumerated;
export const _encode_IPAddress_iP_assignment: $.ASN1Encoder<IPAddress_iP_assignment> = $._encodeEnumerated;


/* eslint-enable */
