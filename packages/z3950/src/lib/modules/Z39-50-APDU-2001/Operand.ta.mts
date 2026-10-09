/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../Z39-50-APDU-2001/AttributesPlusTerm.ta.mjs";
// export { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../Z39-50-APDU-2001/AttributesPlusTerm.ta.mjs";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
// export { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
import { ResultSetPlusAttributes, _decode_ResultSetPlusAttributes, _encode_ResultSetPlusAttributes } from "../Z39-50-APDU-2001/ResultSetPlusAttributes.ta.mjs";
// export { ResultSetPlusAttributes, _decode_ResultSetPlusAttributes, _encode_ResultSetPlusAttributes } from "../Z39-50-APDU-2001/ResultSetPlusAttributes.ta.mjs";


/**
 * @summary Operand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operand  ::=  CHOICE {
 *     attrTerm    AttributesPlusTerm,
 *     resultSet   ResultSetId,
 *     --If version 2 is in force:
 *     --If query type is 1, one of the above two must be chosen
 *     --resultAttr (below) may be used only if query type is 101
 *     resultAttr  ResultSetPlusAttributes
 * }
 * ```
 */
export
type Operand =
    { attrTerm: AttributesPlusTerm } /* CHOICE_ALT_ROOT */
    | { resultSet: ResultSetId } /* CHOICE_ALT_ROOT */
    | { resultAttr: ResultSetPlusAttributes } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Operand: $.ASN1Decoder<Operand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Operand
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Operand (el: _Element): Operand {
    if (!_cached_decoder_for_Operand) { _cached_decoder_for_Operand = $._decode_inextensible_choice<Operand>({
    "CONTEXT 102": [ "attrTerm", _decode_AttributesPlusTerm ],
    "CONTEXT 31": [ "resultSet", _decode_ResultSetId ],
    "CONTEXT 214": [ "resultAttr", _decode_ResultSetPlusAttributes ]
}); }
    return _cached_decoder_for_Operand(el);
}

let _cached_encoder_for_Operand: $.ASN1Encoder<Operand> | null = null;

/**
 * @summary Encodes a(n) Operand into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operand, encoded as an ASN.1 Element.
 */
export
function _encode_Operand (value: Operand, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Operand) { _cached_encoder_for_Operand = $._encode_choice<Operand>({
    "attrTerm": $._encode_implicit(_TagClass.context, 102, () => _encode_AttributesPlusTerm, $.BER),
    "resultSet": $._encode_implicit(_TagClass.context, 31, () => _encode_ResultSetId, $.BER),
    "resultAttr": $._encode_implicit(_TagClass.context, 214, () => _encode_ResultSetPlusAttributes, $.BER),
}, $.BER); }
    return _cached_encoder_for_Operand(value, elGetter);
}


/* eslint-enable */
