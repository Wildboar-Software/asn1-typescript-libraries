/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary SigParameterName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParameterName  ::=  Name
 * ```
 */
export
type SigParameterName = Name; // DefinedType

let _cached_decoder_for_SigParameterName: $.ASN1Decoder<SigParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SigParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SigParameterName (el: _Element): SigParameterName {
    if (!_cached_decoder_for_SigParameterName) { _cached_decoder_for_SigParameterName = _decode_Name; }
    return _cached_decoder_for_SigParameterName(el);
}

let _cached_encoder_for_SigParameterName: $.ASN1Encoder<SigParameterName> | null = null;

/**
 * @summary Encodes a(n) SigParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigParameterName, encoded as an ASN.1 Element.
 */
export
function _encode_SigParameterName (value: SigParameterName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SigParameterName) { _cached_encoder_for_SigParameterName = _encode_Name; }
    return _cached_encoder_for_SigParameterName(value, elGetter);
}


/* eslint-enable */
