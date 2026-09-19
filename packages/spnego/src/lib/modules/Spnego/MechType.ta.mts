/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MechType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MechType ::=  OBJECT IDENTIFIER
 * ```
 */
export
type MechType = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_MechType: $.ASN1Decoder<MechType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MechType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MechType (el: _Element): MechType {
    if (!_cached_decoder_for_MechType) { _cached_decoder_for_MechType = $._decodeObjectIdentifier; }
    return _cached_decoder_for_MechType(el);
}

let _cached_encoder_for_MechType: $.ASN1Encoder<MechType> | null = null;

/**
 * @summary Encodes a(n) MechType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MechType, encoded as an ASN.1 Element.
 */
export
function _encode_MechType (value: MechType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MechType) { _cached_encoder_for_MechType = $._encodeObjectIdentifier; }
    return _cached_encoder_for_MechType(value, elGetter);
}


/* eslint-enable */
