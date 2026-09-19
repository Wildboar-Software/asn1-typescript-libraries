/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoteUserID, _decode_RemoteUserID, _encode_RemoteUserID } from "../EpsHI2Operations/RemoteUserID.ta.mjs";
// export { RemoteUserID, _decode_RemoteUserID, _encode_RemoteUserID } from "../EpsHI2Operations/RemoteUserID.ta.mjs";


/**
 * @summary RemoteUeContextDisconnected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUeContextDisconnected  ::=  RemoteUserID
 * ```
 */
export
type RemoteUeContextDisconnected = RemoteUserID; // DefinedType

let _cached_decoder_for_RemoteUeContextDisconnected: $.ASN1Decoder<RemoteUeContextDisconnected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUeContextDisconnected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUeContextDisconnected (el: _Element): RemoteUeContextDisconnected {
    if (!_cached_decoder_for_RemoteUeContextDisconnected) { _cached_decoder_for_RemoteUeContextDisconnected = _decode_RemoteUserID; }
    return _cached_decoder_for_RemoteUeContextDisconnected(el);
}

let _cached_encoder_for_RemoteUeContextDisconnected: $.ASN1Encoder<RemoteUeContextDisconnected> | null = null;

/**
 * @summary Encodes a(n) RemoteUeContextDisconnected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUeContextDisconnected, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUeContextDisconnected (value: RemoteUeContextDisconnected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUeContextDisconnected) { _cached_encoder_for_RemoteUeContextDisconnected = _encode_RemoteUserID; }
    return _cached_encoder_for_RemoteUeContextDisconnected(value, elGetter);
}


/* eslint-enable */
