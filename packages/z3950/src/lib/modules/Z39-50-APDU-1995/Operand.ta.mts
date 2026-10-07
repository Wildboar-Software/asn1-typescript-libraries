/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "./AttributesPlusTerm.ta.mjs";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "./ResultSetId.ta.mjs";
import { ResultSetPlusAttributes, _decode_ResultSetPlusAttributes, _encode_ResultSetPlusAttributes } from "./ResultSetPlusAttributes.ta.mjs";


/**
 * @summary Operand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operand ::= CHOICE {
 *     attrTerm    AttributesPlusTerm,
 *     resultSet   ResultSetId,
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
    "attrTerm": _encode_AttributesPlusTerm,
    "resultSet": _encode_ResultSetId,
    "resultAttr": _encode_ResultSetPlusAttributes,
}, $.BER); }
    return _cached_encoder_for_Operand(value, elGetter);
}

/* eslint-enable */
