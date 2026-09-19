/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Entry2, _decode_Entry2, _encode_Entry2 } from "../AIN-Parameters/Entry2.ta.mjs";
// export { Entry2, _decode_Entry2, _encode_Entry2 } from "../AIN-Parameters/Entry2.ta.mjs";


/**
 * @summary EntireList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntireList  ::=  SEQUENCE SIZE(1..32) OF Entry2
 * ```
 */
export
type EntireList = Entry2[]; // SequenceOfType

let _cached_decoder_for_EntireList: $.ASN1Decoder<EntireList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntireList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntireList (el: _Element): EntireList {
    if (!_cached_decoder_for_EntireList) { _cached_decoder_for_EntireList = $._decodeSequenceOf<Entry2>(() => _decode_Entry2); }
    return _cached_decoder_for_EntireList(el);
}

let _cached_encoder_for_EntireList: $.ASN1Encoder<EntireList> | null = null;

/**
 * @summary Encodes a(n) EntireList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntireList, encoded as an ASN.1 Element.
 */
export
function _encode_EntireList (value: EntireList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntireList) { _cached_encoder_for_EntireList = $._encodeSequenceOf<Entry2>(() => _encode_Entry2, $.BER); }
    return _cached_encoder_for_EntireList(value, elGetter);
}


/* eslint-enable */
