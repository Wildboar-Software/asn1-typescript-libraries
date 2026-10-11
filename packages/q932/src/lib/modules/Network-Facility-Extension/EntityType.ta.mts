/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EntityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {endPINX(0), anyTypeOfPINX(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EntityType {
    endPINX = 0,
    anyTypeOfPINX = 1,
}

/**
 * @summary EntityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {endPINX(0), anyTypeOfPINX(1)}
 * ```
 * 
 * @enum {number}
 */
export
type EntityType = _enum_for_EntityType;

/**
 * @summary EntityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityType  ::=  ENUMERATED {endPINX(0), anyTypeOfPINX(1)}
 * ```
 * 
 * @enum {number}
 */
export
const EntityType = _enum_for_EntityType;

/**
 * @summary EntityType_endPINX
 * @constant
 * @type {number}
 */
export
const EntityType_endPINX: EntityType = EntityType.endPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endPINX
 * @constant
 * @type {number}
 */
export
const endPINX: EntityType = EntityType.endPINX; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EntityType_anyTypeOfPINX
 * @constant
 * @type {number}
 */
export
const EntityType_anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anyTypeOfPINX
 * @constant
 * @type {number}
 */
export
const anyTypeOfPINX: EntityType = EntityType.anyTypeOfPINX; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EntityType: $.ASN1Decoder<EntityType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityType (el: _Element): EntityType {
    if (!_cached_decoder_for_EntityType) { _cached_decoder_for_EntityType = $._decodeEnumerated; }
    return _cached_decoder_for_EntityType(el);
}

let _cached_encoder_for_EntityType: $.ASN1Encoder<EntityType> | null = null;

/**
 * @summary Encodes a(n) EntityType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityType, encoded as an ASN.1 Element.
 */
export
function _encode_EntityType (value: EntityType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityType) { _cached_encoder_for_EntityType = $._encodeEnumerated; }
    return _cached_encoder_for_EntityType(value, elGetter);
}


/* eslint-enable */
