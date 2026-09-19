/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivateFacilityGID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateFacilityGID  ::=  INTEGER(0..9999)
 * ```
 */
export
type PrivateFacilityGID = INTEGER;

let _cached_decoder_for_PrivateFacilityGID: $.ASN1Decoder<PrivateFacilityGID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateFacilityGID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateFacilityGID (el: _Element): PrivateFacilityGID {
    if (!_cached_decoder_for_PrivateFacilityGID) { _cached_decoder_for_PrivateFacilityGID = $._decodeInteger; }
    return _cached_decoder_for_PrivateFacilityGID(el);
}

let _cached_encoder_for_PrivateFacilityGID: $.ASN1Encoder<PrivateFacilityGID> | null = null;

/**
 * @summary Encodes a(n) PrivateFacilityGID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateFacilityGID, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateFacilityGID (value: PrivateFacilityGID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateFacilityGID) { _cached_encoder_for_PrivateFacilityGID = $._encodeInteger; }
    return _cached_encoder_for_PrivateFacilityGID(value, elGetter);
}


/* eslint-enable */
