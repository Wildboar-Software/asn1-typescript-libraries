/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlternativeNSSAIEntry, _decode_AlternativeNSSAIEntry, _encode_AlternativeNSSAIEntry } from "../TS33128Payloads/AlternativeNSSAIEntry.ta.mjs";
// export { AlternativeNSSAIEntry, _decode_AlternativeNSSAIEntry, _encode_AlternativeNSSAIEntry } from "../TS33128Payloads/AlternativeNSSAIEntry.ta.mjs";


/**
 * @summary AlternativeNSSAIList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternativeNSSAIList  ::=  SEQUENCE (SIZE(1..8)) OF AlternativeNSSAIEntry
 * ```
 */
export
type AlternativeNSSAIList = AlternativeNSSAIEntry[]; // SequenceOfType

let _cached_decoder_for_AlternativeNSSAIList: $.ASN1Decoder<AlternativeNSSAIList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternativeNSSAIList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternativeNSSAIList (el: _Element): AlternativeNSSAIList {
    if (!_cached_decoder_for_AlternativeNSSAIList) { _cached_decoder_for_AlternativeNSSAIList = $._decodeSequenceOf<AlternativeNSSAIEntry>(() => _decode_AlternativeNSSAIEntry); }
    const value = _cached_decoder_for_AlternativeNSSAIList(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("AlternativeNSSAIList violates the SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_AlternativeNSSAIList: $.ASN1Encoder<AlternativeNSSAIList> | null = null;

/**
 * @summary Encodes a(n) AlternativeNSSAIList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternativeNSSAIList, encoded as an ASN.1 Element.
 */
export
function _encode_AlternativeNSSAIList (value: AlternativeNSSAIList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternativeNSSAIList) { _cached_encoder_for_AlternativeNSSAIList = $._encodeSequenceOf<AlternativeNSSAIEntry>(() => _encode_AlternativeNSSAIEntry, $.BER); }
    return _cached_encoder_for_AlternativeNSSAIList(value, elGetter);
}


/* eslint-enable */
