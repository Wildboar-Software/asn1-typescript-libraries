/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Relation {
    /**
     * The MG chooses a value strictly greater than the single supplied value
     * (Annex A).
     */
    greaterThan = 0,
    /**
     * The MG chooses a value strictly smaller than the single supplied value
     * (Annex A).
     */
    smallerThan = 1,
    /**
     * The MG chooses a value different from the single supplied value (Annex
     * A).
     */
    unequalTo = 2,
}

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
const Relation_greaterThan: _enum_for_Relation.greaterThan = _enum_for_Relation.greaterThan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greaterThan
 * @constant
 * @type {number}
 */
export
const greaterThan: _enum_for_Relation.greaterThan = Relation_greaterThan; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Relation_smallerThan: _enum_for_Relation.smallerThan = _enum_for_Relation.smallerThan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smallerThan
 * @constant
 * @type {number}
 */
export
const smallerThan: _enum_for_Relation.smallerThan = Relation_smallerThan; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Relation_unequalTo: _enum_for_Relation.unequalTo = _enum_for_Relation.unequalTo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unequalTo
 * @constant
 * @type {number}
 */
export
const unequalTo: _enum_for_Relation.unequalTo = Relation_unequalTo; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Relation: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_Relation: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
