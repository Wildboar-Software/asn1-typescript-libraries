/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary ISDNDeviceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDNDeviceID  ::=  AINDigits
 * ```
 */
export
type ISDNDeviceID = AINDigits; // DefinedType

let _cached_decoder_for_ISDNDeviceID: $.ASN1Decoder<ISDNDeviceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDNDeviceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDNDeviceID (el: _Element): ISDNDeviceID {
    if (!_cached_decoder_for_ISDNDeviceID) { _cached_decoder_for_ISDNDeviceID = _decode_AINDigits; }
    return _cached_decoder_for_ISDNDeviceID(el);
}

let _cached_encoder_for_ISDNDeviceID: $.ASN1Encoder<ISDNDeviceID> | null = null;

/**
 * @summary Encodes a(n) ISDNDeviceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDNDeviceID, encoded as an ASN.1 Element.
 */
export
function _encode_ISDNDeviceID (value: ISDNDeviceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDNDeviceID) { _cached_encoder_for_ISDNDeviceID = _encode_AINDigits; }
    return _cached_encoder_for_ISDNDeviceID(value, elGetter);
}


/* eslint-enable */
