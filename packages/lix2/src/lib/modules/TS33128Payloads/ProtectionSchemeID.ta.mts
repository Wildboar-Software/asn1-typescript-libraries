/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtectionSchemeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtectionSchemeID  ::=  INTEGER (0..15)
 * ```
 */
export
type ProtectionSchemeID = INTEGER;

let _cached_decoder_for_ProtectionSchemeID: $.ASN1Decoder<ProtectionSchemeID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionSchemeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtectionSchemeID (el: _Element): ProtectionSchemeID {
    if (!_cached_decoder_for_ProtectionSchemeID) { _cached_decoder_for_ProtectionSchemeID = $._decodeInteger; }
    return _cached_decoder_for_ProtectionSchemeID(el);
}

let _cached_encoder_for_ProtectionSchemeID: $.ASN1Encoder<ProtectionSchemeID> | null = null;

/**
 * @summary Encodes a(n) ProtectionSchemeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionSchemeID, encoded as an ASN.1 Element.
 */
export
function _encode_ProtectionSchemeID (value: ProtectionSchemeID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProtectionSchemeID) { _cached_encoder_for_ProtectionSchemeID = $._encodeInteger; }
    return _cached_encoder_for_ProtectionSchemeID(value, elGetter);
}


/* eslint-enable */
