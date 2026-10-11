/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../EpsHI2Operations/RemoteUEContext.ta.mjs";
// export { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../EpsHI2Operations/RemoteUEContext.ta.mjs";


/**
 * @summary RemoteUeContextConnected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUeContextConnected  ::=  SEQUENCE OF RemoteUEContext
 * ```
 */
export
type RemoteUeContextConnected = RemoteUEContext[]; // SequenceOfType

let _cached_decoder_for_RemoteUeContextConnected: $.ASN1Decoder<RemoteUeContextConnected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUeContextConnected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUeContextConnected (el: _Element): RemoteUeContextConnected {
    if (!_cached_decoder_for_RemoteUeContextConnected) { _cached_decoder_for_RemoteUeContextConnected = $._decodeSequenceOf<RemoteUEContext>(() => _decode_RemoteUEContext); }
    return _cached_decoder_for_RemoteUeContextConnected(el);
}

let _cached_encoder_for_RemoteUeContextConnected: $.ASN1Encoder<RemoteUeContextConnected> | null = null;

/**
 * @summary Encodes a(n) RemoteUeContextConnected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUeContextConnected, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUeContextConnected (value: RemoteUeContextConnected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUeContextConnected) { _cached_encoder_for_RemoteUeContextConnected = $._encodeSequenceOf<RemoteUEContext>(() => _encode_RemoteUEContext, $.BER); }
    return _cached_encoder_for_RemoteUeContextConnected(value, elGetter);
}


/* eslint-enable */
