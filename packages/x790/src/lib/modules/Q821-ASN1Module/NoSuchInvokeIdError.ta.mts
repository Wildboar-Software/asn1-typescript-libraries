/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InvokeIDType,
    _decode_InvokeIDType,
    _encode_InvokeIDType,
} from "../CMIP-1/InvokeIDType.ta.mjs";



/**
 * @summary NoSuchInvokeIdError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoSuchInvokeIdError  ::= 
 *   InvokeIDType
 * ```
 */
export
type NoSuchInvokeIdError = InvokeIDType; // DefinedType

let _cached_decoder_for_NoSuchInvokeIdError: $.ASN1Decoder<NoSuchInvokeIdError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchInvokeIdError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NoSuchInvokeIdError (el: _Element): NoSuchInvokeIdError {
    if (!_cached_decoder_for_NoSuchInvokeIdError) { _cached_decoder_for_NoSuchInvokeIdError = _decode_InvokeIDType; }
    return _cached_decoder_for_NoSuchInvokeIdError(el);
}

let _cached_encoder_for_NoSuchInvokeIdError: $.ASN1Encoder<NoSuchInvokeIdError> | null = null;

/**
 * @summary Encodes a(n) NoSuchInvokeIdError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchInvokeIdError, encoded as an ASN.1 Element.
 */
export
function _encode_NoSuchInvokeIdError (value: NoSuchInvokeIdError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NoSuchInvokeIdError) { _cached_encoder_for_NoSuchInvokeIdError = _encode_InvokeIDType; }
    return _cached_encoder_for_NoSuchInvokeIdError(value, elGetter);
}


/* eslint-enable */
