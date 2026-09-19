/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AE_qualifier, _decode_AE_qualifier, _encode_AE_qualifier } from "../C1222-PROTOCOL/AE-qualifier.ta.mjs";
// export { AE_qualifier, _decode_AE_qualifier, _encode_AE_qualifier } from "../C1222-PROTOCOL/AE-qualifier.ta.mjs";


/**
 * @summary Calling_AE_qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-AE-qualifier  ::=  AE-qualifier
 * ```
 */
export
type Calling_AE_qualifier = AE_qualifier; // DefinedType

let _cached_decoder_for_Calling_AE_qualifier: $.ASN1Decoder<Calling_AE_qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_AE_qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_AE_qualifier (el: _Element): Calling_AE_qualifier {
    if (!_cached_decoder_for_Calling_AE_qualifier) { _cached_decoder_for_Calling_AE_qualifier = _decode_AE_qualifier; }
    return _cached_decoder_for_Calling_AE_qualifier(el);
}

let _cached_encoder_for_Calling_AE_qualifier: $.ASN1Encoder<Calling_AE_qualifier> | null = null;

/**
 * @summary Encodes a(n) Calling_AE_qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_AE_qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_AE_qualifier (value: Calling_AE_qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_AE_qualifier) { _cached_encoder_for_Calling_AE_qualifier = _encode_AE_qualifier; }
    return _cached_encoder_for_Calling_AE_qualifier(value, elGetter);
}


/* eslint-enable */
