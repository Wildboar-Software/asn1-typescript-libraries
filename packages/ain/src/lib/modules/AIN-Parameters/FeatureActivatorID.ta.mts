/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FeatureActivatorID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureActivatorID  ::=  [136] IMPLICIT OCTET STRING(SIZE(1..2))
 * ```
 */
export
type FeatureActivatorID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_FeatureActivatorID: $.ASN1Decoder<FeatureActivatorID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FeatureActivatorID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FeatureActivatorID (el: _Element): FeatureActivatorID {
    if (!_cached_decoder_for_FeatureActivatorID) { _cached_decoder_for_FeatureActivatorID = $._decode_implicit<FeatureActivatorID>(() => $._decodeOctetString); }
    return _cached_decoder_for_FeatureActivatorID(el);
}

let _cached_encoder_for_FeatureActivatorID: $.ASN1Encoder<FeatureActivatorID> | null = null;

/**
 * @summary Encodes a(n) FeatureActivatorID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FeatureActivatorID, encoded as an ASN.1 Element.
 */
export
function _encode_FeatureActivatorID (value: FeatureActivatorID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FeatureActivatorID) { _cached_encoder_for_FeatureActivatorID = $._encode_implicit(_TagClass.context, 136, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_FeatureActivatorID(value, elGetter);
}


/* eslint-enable */
