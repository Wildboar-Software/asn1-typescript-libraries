/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary ExternalChargingASN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalChargingASN  ::=  ExternalASNType
 * ```
 */
export
type ExternalChargingASN = ExternalASNType; // DefinedType

let _cached_decoder_for_ExternalChargingASN: $.ASN1Decoder<ExternalChargingASN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalChargingASN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalChargingASN (el: _Element): ExternalChargingASN {
    if (!_cached_decoder_for_ExternalChargingASN) { _cached_decoder_for_ExternalChargingASN = _decode_ExternalASNType; }
    return _cached_decoder_for_ExternalChargingASN(el);
}

let _cached_encoder_for_ExternalChargingASN: $.ASN1Encoder<ExternalChargingASN> | null = null;

/**
 * @summary Encodes a(n) ExternalChargingASN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalChargingASN, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalChargingASN (value: ExternalChargingASN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalChargingASN) { _cached_encoder_for_ExternalChargingASN = _encode_ExternalASNType; }
    return _cached_encoder_for_ExternalChargingASN(value, elGetter);
}


/* eslint-enable */
