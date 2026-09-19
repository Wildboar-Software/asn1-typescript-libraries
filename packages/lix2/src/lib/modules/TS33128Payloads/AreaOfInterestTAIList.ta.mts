/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";


/**
 * @summary AreaOfInterestTAIList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaOfInterestTAIList  ::=  SEQUENCE (SIZE(1..MAX)) OF TAI
 * ```
 */
export
type AreaOfInterestTAIList = TAI[]; // SequenceOfType

let _cached_decoder_for_AreaOfInterestTAIList: $.ASN1Decoder<AreaOfInterestTAIList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaOfInterestTAIList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaOfInterestTAIList (el: _Element): AreaOfInterestTAIList {
    if (!_cached_decoder_for_AreaOfInterestTAIList) { _cached_decoder_for_AreaOfInterestTAIList = $._decodeSequenceOf<TAI>(() => _decode_TAI); }
    return _cached_decoder_for_AreaOfInterestTAIList(el);
}

let _cached_encoder_for_AreaOfInterestTAIList: $.ASN1Encoder<AreaOfInterestTAIList> | null = null;

/**
 * @summary Encodes a(n) AreaOfInterestTAIList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaOfInterestTAIList, encoded as an ASN.1 Element.
 */
export
function _encode_AreaOfInterestTAIList (value: AreaOfInterestTAIList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaOfInterestTAIList) { _cached_encoder_for_AreaOfInterestTAIList = $._encodeSequenceOf<TAI>(() => _encode_TAI, $.BER); }
    return _cached_encoder_for_AreaOfInterestTAIList(value, elGetter);
}


/* eslint-enable */
