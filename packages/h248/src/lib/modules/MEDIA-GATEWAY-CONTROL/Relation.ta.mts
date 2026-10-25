/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_Relation = {
    /**
     * The MG chooses a value strictly greater than the single supplied value
     * (Annex A).
     */
    greaterThan: 0,
    /**
     * The MG chooses a value strictly smaller than the single supplied value
     * (Annex A).
     */
    smallerThan: 1,
    /**
     * The MG chooses a value different from the single supplied value (Annex
     * A).
     */
    unequalTo: 2,
} as const;

export type _enum_for_Relation = (typeof _enum_for_Relation)[keyof typeof _enum_for_Relation];

/**
 * @summary Relation
 * @description
 * 
 * Comparison the MG applies when choosing a property value (Annex A).
 *
 * Legal only when the value sequence has one element. `greaterThan` asks for a
 * value greater than the given one, `smallerThan` for a value smaller than it,
 * and `unequalTo` for any other value.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Relation  ::=  ENUMERATED
 *     {
 *         greaterThan(0),
 *         smallerThan(1),
 *         unequalTo(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Relation = _enum_for_Relation | ENUMERATED;

/**
 * @summary Relation_greaterThan
 * @description
 *
 * The MG chooses a value strictly greater than the single supplied value (Annex
 * A).
 *
 * @constant
 * @type {number}
 */
export
const Relation_greaterThan: 0 = _enum_for_Relation.greaterThan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greaterThan
 * @constant
 * @type {number}
 */
export
const greaterThan: 0 = Relation_greaterThan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Relation_smallerThan
 * @description
 *
 * The MG chooses a value strictly smaller than the single supplied value (Annex
 * A).
 *
 * @constant
 * @type {number}
 */
export
const Relation_smallerThan: 1 = _enum_for_Relation.smallerThan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smallerThan
 * @constant
 * @type {number}
 */
export
const smallerThan: 1 = Relation_smallerThan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Relation_unequalTo
 * @description
 *
 * The MG chooses a value different from the single supplied value (Annex A).
 *
 * @constant
 * @type {number}
 */
export
const Relation_unequalTo: 2 = _enum_for_Relation.unequalTo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unequalTo
 * @constant
 * @type {number}
 */
export
const unequalTo: 2 = Relation_unequalTo; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Relation: $.ASN1Decoder<Relation> = $._decodeEnumerated as $.ASN1Decoder<Relation>;
export const _encode_Relation: $.ASN1Encoder<Relation> = $._encodeEnumerated as $.ASN1Encoder<Relation>;


/* eslint-enable */
