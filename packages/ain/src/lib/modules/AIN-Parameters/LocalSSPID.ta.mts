/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocalSSPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalSSPID  ::=  IA5String(SIZE(1..8))
 * ```
 */
export
type LocalSSPID = IA5String; // IA5String

let _cached_decoder_for_LocalSSPID: $.ASN1Decoder<LocalSSPID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalSSPID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocalSSPID (el: _Element): LocalSSPID {
    if (!_cached_decoder_for_LocalSSPID) { _cached_decoder_for_LocalSSPID = $._decodeIA5String; }
    return _cached_decoder_for_LocalSSPID(el);
}

let _cached_encoder_for_LocalSSPID: $.ASN1Encoder<LocalSSPID> | null = null;

/**
 * @summary Encodes a(n) LocalSSPID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalSSPID, encoded as an ASN.1 Element.
 */
export
function _encode_LocalSSPID (value: LocalSSPID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocalSSPID) { _cached_encoder_for_LocalSSPID = $._encodeIA5String; }
    return _cached_encoder_for_LocalSSPID(value, elGetter);
}


/* eslint-enable */
