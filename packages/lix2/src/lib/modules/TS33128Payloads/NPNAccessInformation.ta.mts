/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CellCAGList, _decode_CellCAGList, _encode_CellCAGList } from "../TS33128Payloads/CellCAGList.ta.mjs";
// export { CellCAGList, _decode_CellCAGList, _encode_CellCAGList } from "../TS33128Payloads/CellCAGList.ta.mjs";


/**
 * @summary NPNAccessInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NPNAccessInformation  ::=  CHOICE
 * {
 *     pNINPNAccessInformation [1] CellCAGList
 * }
 * ```
 */
export
type NPNAccessInformation =
    { pNINPNAccessInformation: CellCAGList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NPNAccessInformation: $.ASN1Decoder<NPNAccessInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NPNAccessInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NPNAccessInformation (el: _Element): NPNAccessInformation {
    if (!_cached_decoder_for_NPNAccessInformation) { _cached_decoder_for_NPNAccessInformation = $._decode_inextensible_choice<NPNAccessInformation>({
    "CONTEXT 1": [ "pNINPNAccessInformation", $._decode_implicit<CellCAGList>(() => _decode_CellCAGList) ]
}); }
    return _cached_decoder_for_NPNAccessInformation(el);
}

let _cached_encoder_for_NPNAccessInformation: $.ASN1Encoder<NPNAccessInformation> | null = null;

/**
 * @summary Encodes a(n) NPNAccessInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NPNAccessInformation, encoded as an ASN.1 Element.
 */
export
function _encode_NPNAccessInformation (value: NPNAccessInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NPNAccessInformation) { _cached_encoder_for_NPNAccessInformation = $._encode_choice<NPNAccessInformation>({
    "pNINPNAccessInformation": $._encode_implicit(_TagClass.context, 1, () => _encode_CellCAGList, $.BER),
}, $.BER); }
    return _cached_encoder_for_NPNAccessInformation(value, elGetter);
}


/* eslint-enable */
