/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ERABContext, _decode_ERABContext, _encode_ERABContext } from "../TS33128Payloads/ERABContext.ta.mjs";
// export { ERABContext, _decode_ERABContext, _encode_ERABContext } from "../TS33128Payloads/ERABContext.ta.mjs";


/**
 * @summary ERABContextList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ERABContextList  ::=  SEQUENCE SIZE (1..MAX) OF ERABContext
 * ```
 */
export
type ERABContextList = ERABContext[]; // SequenceOfType

let _cached_decoder_for_ERABContextList: $.ASN1Decoder<ERABContextList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ERABContextList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ERABContextList (el: _Element): ERABContextList {
    if (!_cached_decoder_for_ERABContextList) { _cached_decoder_for_ERABContextList = $._decodeSequenceOf<ERABContext>(() => _decode_ERABContext); }
    return _cached_decoder_for_ERABContextList(el);
}

let _cached_encoder_for_ERABContextList: $.ASN1Encoder<ERABContextList> | null = null;

/**
 * @summary Encodes a(n) ERABContextList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERABContextList, encoded as an ASN.1 Element.
 */
export
function _encode_ERABContextList (value: ERABContextList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ERABContextList) { _cached_encoder_for_ERABContextList = $._encodeSequenceOf<ERABContext>(() => _encode_ERABContext, $.BER); }
    return _cached_encoder_for_ERABContextList(value, elGetter);
}


/* eslint-enable */
