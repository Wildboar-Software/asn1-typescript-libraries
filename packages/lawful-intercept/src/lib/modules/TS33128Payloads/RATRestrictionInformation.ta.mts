/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATRestrictionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATRestrictionInformation  ::=  BIT STRING (SIZE(8, ...))
 * ```
 */
export
type RATRestrictionInformation = BIT_STRING;

let _cached_decoder_for_RATRestrictionInformation: $.ASN1Decoder<RATRestrictionInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RATRestrictionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RATRestrictionInformation (el: _Element): RATRestrictionInformation {
    if (!_cached_decoder_for_RATRestrictionInformation) { _cached_decoder_for_RATRestrictionInformation = $._decodeBitString; }
    return _cached_decoder_for_RATRestrictionInformation(el);
}

let _cached_encoder_for_RATRestrictionInformation: $.ASN1Encoder<RATRestrictionInformation> | null = null;

/**
 * @summary Encodes a(n) RATRestrictionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RATRestrictionInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RATRestrictionInformation (value: RATRestrictionInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RATRestrictionInformation) { _cached_encoder_for_RATRestrictionInformation = $._encodeBitString; }
    return _cached_encoder_for_RATRestrictionInformation(value, elGetter);
}


/* eslint-enable */
