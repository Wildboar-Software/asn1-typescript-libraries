/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACSE_apdu, _decode_ACSE_apdu, _encode_ACSE_apdu } from "../ACSE-1/ACSE-apdu.ta.mjs";
// export { ACSE_apdu, _decode_ACSE_apdu, _encode_ACSE_apdu } from "../ACSE-1/ACSE-apdu.ta.mjs";


/**
 * @summary AcseAPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcseAPDU  ::=  ACSE-apdu
 * ```
 */
export
type AcseAPDU = ACSE_apdu; // DefinedType

let _cached_decoder_for_AcseAPDU: $.ASN1Decoder<AcseAPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcseAPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcseAPDU (el: _Element): AcseAPDU {
    if (!_cached_decoder_for_AcseAPDU) { _cached_decoder_for_AcseAPDU = _decode_ACSE_apdu; }
    return _cached_decoder_for_AcseAPDU(el);
}

let _cached_encoder_for_AcseAPDU: $.ASN1Encoder<AcseAPDU> | null = null;

/**
 * @summary Encodes a(n) AcseAPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcseAPDU, encoded as an ASN.1 Element.
 */
export
function _encode_AcseAPDU (value: AcseAPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcseAPDU) { _cached_encoder_for_AcseAPDU = _encode_ACSE_apdu; }
    return _cached_encoder_for_AcseAPDU(value, elGetter);
}


/* eslint-enable */
