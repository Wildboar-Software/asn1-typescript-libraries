/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";


/**
 * @summary TAIList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAIList  ::=  SEQUENCE OF TAI
 * ```
 */
export
type TAIList = TAI[]; // SequenceOfType

let _cached_decoder_for_TAIList: $.ASN1Decoder<TAIList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TAIList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TAIList (el: _Element): TAIList {
    if (!_cached_decoder_for_TAIList) { _cached_decoder_for_TAIList = $._decodeSequenceOf<TAI>(() => _decode_TAI); }
    return _cached_decoder_for_TAIList(el);
}

let _cached_encoder_for_TAIList: $.ASN1Encoder<TAIList> | null = null;

/**
 * @summary Encodes a(n) TAIList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TAIList, encoded as an ASN.1 Element.
 */
export
function _encode_TAIList (value: TAIList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TAIList) { _cached_encoder_for_TAIList = $._encodeSequenceOf<TAI>(() => _encode_TAI, $.BER); }
    return _cached_encoder_for_TAIList(value, elGetter);
}


/* eslint-enable */
