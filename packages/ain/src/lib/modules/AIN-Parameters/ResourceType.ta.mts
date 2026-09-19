/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceType  ::=  [45] IMPLICIT INTEGER(0..127)
 * ```
 */
export
type ResourceType = INTEGER;

let _cached_decoder_for_ResourceType: $.ASN1Decoder<ResourceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceType (el: _Element): ResourceType {
    if (!_cached_decoder_for_ResourceType) { _cached_decoder_for_ResourceType = $._decode_implicit<ResourceType>(() => $._decodeInteger); }
    return _cached_decoder_for_ResourceType(el);
}

let _cached_encoder_for_ResourceType: $.ASN1Encoder<ResourceType> | null = null;

/**
 * @summary Encodes a(n) ResourceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceType, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceType (value: ResourceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceType) { _cached_encoder_for_ResourceType = $._encode_implicit(_TagClass.context, 45, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_ResourceType(value, elGetter);
}


/* eslint-enable */
