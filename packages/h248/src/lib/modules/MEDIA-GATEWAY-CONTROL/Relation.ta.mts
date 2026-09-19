/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Relation {
    greaterThan = 0,
    smallerThan = 1,
    unequalTo = 2,
}

/**
 * @summary Relation
 * @description
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
 * @constant
 * @type {number}
 */
export
const Relation_greaterThan: Relation = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greaterThan
 * @constant
 * @type {number}
 */
export
const greaterThan: Relation = Relation_greaterThan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Relation_smallerThan
 * @constant
 * @type {number}
 */
export
const Relation_smallerThan: Relation = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary smallerThan
 * @constant
 * @type {number}
 */
export
const smallerThan: Relation = Relation_smallerThan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Relation_unequalTo
 * @constant
 * @type {number}
 */
export
const Relation_unequalTo: Relation = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unequalTo
 * @constant
 * @type {number}
 */
export
const unequalTo: Relation = Relation_unequalTo; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Relation: $.ASN1Decoder<Relation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Relation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Relation (el: _Element): Relation {
    if (!_cached_decoder_for_Relation) { _cached_decoder_for_Relation = $._decodeEnumerated; }
    return _cached_decoder_for_Relation(el);
}

let _cached_encoder_for_Relation: $.ASN1Encoder<Relation> | null = null;

/**
 * @summary Encodes a(n) Relation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Relation, encoded as an ASN.1 Element.
 */
export
function _encode_Relation (value: Relation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Relation) { _cached_encoder_for_Relation = $._encodeEnumerated; }
    return _cached_encoder_for_Relation(value, elGetter);
}


/* eslint-enable */
