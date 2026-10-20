/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DirectoryBindArgument, _decode_DirectoryBindArgument, _encode_DirectoryBindArgument } from "../DirectoryAbstractService/DirectoryBindArgument.ta.mjs";
// export { DirectoryBindArgument, _decode_DirectoryBindArgument, _encode_DirectoryBindArgument } from "../DirectoryAbstractService/DirectoryBindArgument.ta.mjs";


/**
 * @summary DirectoryBindResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectoryBindResult  ::=  DirectoryBindArgument
 * ```
 */
export
type DirectoryBindResult = DirectoryBindArgument; // DefinedType

let _cached_decoder_for_DirectoryBindResult: $.ASN1Decoder<DirectoryBindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryBindResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectoryBindResult (el: _Element): DirectoryBindResult {
    if (!_cached_decoder_for_DirectoryBindResult) { _cached_decoder_for_DirectoryBindResult = _decode_DirectoryBindArgument; }
    return _cached_decoder_for_DirectoryBindResult(el);
}

let _cached_encoder_for_DirectoryBindResult: $.ASN1Encoder<DirectoryBindResult> | null = null;

/**
 * @summary Encodes a(n) DirectoryBindResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryBindResult, encoded as an ASN.1 Element.
 */
export
function _encode_DirectoryBindResult (value: DirectoryBindResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectoryBindResult) { _cached_encoder_for_DirectoryBindResult = _encode_DirectoryBindArgument; }
    return _cached_encoder_for_DirectoryBindResult(value, elGetter);
}


/* eslint-enable */
