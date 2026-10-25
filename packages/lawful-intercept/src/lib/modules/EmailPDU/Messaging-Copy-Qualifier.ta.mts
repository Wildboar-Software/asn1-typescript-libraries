/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Whether a party identity was directly addressed, carbon copied, or blind
 * carbon copied.
 *
 * Clause 8.6 names those three cases and does not say which enumeration item is
 * direct addressing. `cc` and `bcc` are the carbon-copy and blind-carbon-copy
 * cases. `unknown` and `none` are not given separate definitions. The
 * enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Copy_Qualifier {
    /**
     * Clause 8.6 does not define this item. The qualifier as a whole
     * distinguishes direct addressing, carbon copy, and blind carbon copy.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    unknown = 0,
    /**
     * Clause 8.6 does not name the item used for direct addressing. It only
     * lists direct addressing beside carbon copy and blind carbon copy.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    none = 1,
    /**
     * The party was carbon copied.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    cc = 2,
    /**
     * The party was blind carbon copied.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     */
    bcc = 3,
}

/**
 * @summary Messaging_Copy_Qualifier
 * @description
 *
 * Whether a party identity was directly addressed, carbon copied, or blind
 * carbon copied.
 *
 * Clause 8.6 names those three cases and does not say which enumeration item is
 * direct addressing. `cc` and `bcc` are the carbon-copy and blind-carbon-copy
 * cases. `unknown` and `none` are not given separate definitions. The
 * enumeration is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Copy-Qualifier  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     none(1),
 *     cc(2),
 *     bcc(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Copy_Qualifier = _enum_for_Messaging_Copy_Qualifier | ENUMERATED;

/**
 * @summary Messaging_Copy_Qualifier_unknown
 * @description
 *
 * Clause 8.6 does not define this item. The qualifier as a whole distinguishes
 * direct addressing, carbon copy, and blind carbon copy.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_unknown = _enum_for_Messaging_Copy_Qualifier.unknown satisfies Messaging_Copy_Qualifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Clause 8.6 does not define this item. The qualifier as a whole distinguishes
 * direct addressing, carbon copy, and blind carbon copy.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const unknown = Messaging_Copy_Qualifier_unknown satisfies Messaging_Copy_Qualifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_none
 * @description
 *
 * Clause 8.6 does not name the item used for direct addressing. It only lists
 * direct addressing beside carbon copy and blind carbon copy.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_none = _enum_for_Messaging_Copy_Qualifier.none satisfies Messaging_Copy_Qualifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @description
 *
 * Clause 8.6 does not name the item used for direct addressing. It only lists
 * direct addressing beside carbon copy and blind carbon copy.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const none = Messaging_Copy_Qualifier_none satisfies Messaging_Copy_Qualifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_cc
 * @description
 *
 * The party was carbon copied.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_cc = _enum_for_Messaging_Copy_Qualifier.cc satisfies Messaging_Copy_Qualifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc
 * @description
 *
 * The party was carbon copied.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const cc = Messaging_Copy_Qualifier_cc satisfies Messaging_Copy_Qualifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_bcc
 * @description
 *
 * The party was blind carbon copied.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_bcc = _enum_for_Messaging_Copy_Qualifier.bcc satisfies Messaging_Copy_Qualifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bcc
 * @description
 *
 * The party was blind carbon copied.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 *
 * @constant
 * @type {number}
 */
export
const bcc = Messaging_Copy_Qualifier_bcc satisfies Messaging_Copy_Qualifier; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Copy_Qualifier: $.ASN1Decoder<Messaging_Copy_Qualifier> = $._decodeEnumerated;
export const _encode_Messaging_Copy_Qualifier: $.ASN1Encoder<Messaging_Copy_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
