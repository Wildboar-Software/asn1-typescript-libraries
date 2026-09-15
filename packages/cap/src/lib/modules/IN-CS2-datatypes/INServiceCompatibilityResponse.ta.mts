/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Entry, _decode_Entry, _encode_Entry } from "../IN-CS2-datatypes/Entry.ta.mjs";
// export { Entry, _decode_Entry, _encode_Entry } from "../IN-CS2-datatypes/Entry.ta.mjs";


/**
 * @summary INServiceCompatibilityResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * INServiceCompatibilityResponse  ::=  Entry
 * ```
 */
export
type INServiceCompatibilityResponse = Entry; // DefinedType

let _cached_decoder_for_INServiceCompatibilityResponse: $.ASN1Decoder<INServiceCompatibilityResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) INServiceCompatibilityResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_INServiceCompatibilityResponse (el: _Element): INServiceCompatibilityResponse {
    if (!_cached_decoder_for_INServiceCompatibilityResponse) { _cached_decoder_for_INServiceCompatibilityResponse = _decode_Entry; }
    return _cached_decoder_for_INServiceCompatibilityResponse(el);
}

let _cached_encoder_for_INServiceCompatibilityResponse: $.ASN1Encoder<INServiceCompatibilityResponse> | null = null;

/**
 * @summary Encodes a(n) INServiceCompatibilityResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The INServiceCompatibilityResponse, encoded as an ASN.1 Element.
 */
export
function _encode_INServiceCompatibilityResponse (value: INServiceCompatibilityResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_INServiceCompatibilityResponse) { _cached_encoder_for_INServiceCompatibilityResponse = _encode_Entry; }
    return _cached_encoder_for_INServiceCompatibilityResponse(value, elGetter);
}


/* eslint-enable */
