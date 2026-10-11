/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary OriginatorReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatorReference  ::=  MilitaryString
 * ```
 */
export
type OriginatorReference = MilitaryString; // DefinedType

let _cached_decoder_for_OriginatorReference: $.ASN1Decoder<OriginatorReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginatorReference (el: _Element): OriginatorReference {
    if (!_cached_decoder_for_OriginatorReference) { _cached_decoder_for_OriginatorReference = _decode_MilitaryString; }
    return _cached_decoder_for_OriginatorReference(el);
}

let _cached_encoder_for_OriginatorReference: $.ASN1Encoder<OriginatorReference> | null = null;

/**
 * @summary Encodes a(n) OriginatorReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorReference, encoded as an ASN.1 Element.
 */
export
function _encode_OriginatorReference (value: OriginatorReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginatorReference) { _cached_encoder_for_OriginatorReference = _encode_MilitaryString; }
    return _cached_encoder_for_OriginatorReference(value, elGetter);
}


/* eslint-enable */
