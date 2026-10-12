/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary OriginatorReference
 * @description
 * 
 * The originator's number, supplied entirely by the originating organizational
 * unit (ACP 121, ACP 127 format line 12). It is not the MM-message
 * identification, which the MM-UA generates. Absence means there is no
 * user-defined reference. STANAG 4406 (Ed. 2), Annex A, A1.7, B.55, and B.111.
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
