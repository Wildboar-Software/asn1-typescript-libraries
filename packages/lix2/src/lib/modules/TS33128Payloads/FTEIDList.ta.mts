/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";


/**
 * @summary FTEIDList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FTEIDList  ::=  SEQUENCE OF FTEID
 * ```
 */
export
type FTEIDList = FTEID[]; // SequenceOfType

let _cached_decoder_for_FTEIDList: $.ASN1Decoder<FTEIDList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FTEIDList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FTEIDList (el: _Element): FTEIDList {
    if (!_cached_decoder_for_FTEIDList) { _cached_decoder_for_FTEIDList = $._decodeSequenceOf<FTEID>(() => _decode_FTEID); }
    return _cached_decoder_for_FTEIDList(el);
}

let _cached_encoder_for_FTEIDList: $.ASN1Encoder<FTEIDList> | null = null;

/**
 * @summary Encodes a(n) FTEIDList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FTEIDList, encoded as an ASN.1 Element.
 */
export
function _encode_FTEIDList (value: FTEIDList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FTEIDList) { _cached_encoder_for_FTEIDList = $._encodeSequenceOf<FTEID>(() => _encode_FTEID, $.BER); }
    return _cached_encoder_for_FTEIDList(value, elGetter);
}


/* eslint-enable */
