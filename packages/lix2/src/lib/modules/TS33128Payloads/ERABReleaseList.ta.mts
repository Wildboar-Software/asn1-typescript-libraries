/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ERABError, _decode_ERABError, _encode_ERABError } from "../TS33128Payloads/ERABError.ta.mjs";
// export { ERABError, _decode_ERABError, _encode_ERABError } from "../TS33128Payloads/ERABError.ta.mjs";


/**
 * @summary ERABReleaseList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ERABReleaseList  ::=  SEQUENCE SIZE (1..MAX) OF ERABError
 * ```
 */
export
type ERABReleaseList = ERABError[]; // SequenceOfType

let _cached_decoder_for_ERABReleaseList: $.ASN1Decoder<ERABReleaseList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ERABReleaseList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ERABReleaseList (el: _Element): ERABReleaseList {
    if (!_cached_decoder_for_ERABReleaseList) { _cached_decoder_for_ERABReleaseList = $._decodeSequenceOf<ERABError>(() => _decode_ERABError); }
    return _cached_decoder_for_ERABReleaseList(el);
}

let _cached_encoder_for_ERABReleaseList: $.ASN1Encoder<ERABReleaseList> | null = null;

/**
 * @summary Encodes a(n) ERABReleaseList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERABReleaseList, encoded as an ASN.1 Element.
 */
export
function _encode_ERABReleaseList (value: ERABReleaseList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ERABReleaseList) { _cached_encoder_for_ERABReleaseList = $._encodeSequenceOf<ERABError>(() => _encode_ERABError, $.BER); }
    return _cached_encoder_for_ERABReleaseList(value, elGetter);
}


/* eslint-enable */
