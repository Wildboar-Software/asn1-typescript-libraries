/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TcVcid, _decode_TcVcid, _encode_TcVcid } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/TcVcid.ta.mjs";
// export { TcVcid, _decode_TcVcid, _encode_TcVcid } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/TcVcid.ta.mjs";


/**
 * @summary RequestedTcVcid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedTcVcid          ::=    TcVcid
 * ```
 */
export
type RequestedTcVcid = TcVcid; // DefinedType

let _cached_decoder_for_RequestedTcVcid: $.ASN1Decoder<RequestedTcVcid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedTcVcid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedTcVcid (el: _Element): RequestedTcVcid {
    if (!_cached_decoder_for_RequestedTcVcid) { _cached_decoder_for_RequestedTcVcid = _decode_TcVcid; }
    return _cached_decoder_for_RequestedTcVcid(el);
}

let _cached_encoder_for_RequestedTcVcid: $.ASN1Encoder<RequestedTcVcid> | null = null;

/**
 * @summary Encodes a(n) RequestedTcVcid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedTcVcid, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedTcVcid (value: RequestedTcVcid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedTcVcid) { _cached_encoder_for_RequestedTcVcid = _encode_TcVcid; }
    return _cached_encoder_for_RequestedTcVcid(value, elGetter);
}


/* eslint-enable */
