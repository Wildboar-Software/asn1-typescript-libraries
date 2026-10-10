/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../Z39-50-APDU-2001/AttributesPlusTerm.ta.mjs";
import { ResultSetId, _decode_ResultSetId, _encode_ResultSetId } from "../Z39-50-APDU-2001/ResultSetId.ta.mjs";
import { ResultSetPlusAttributes, _decode_ResultSetPlusAttributes, _encode_ResultSetPlusAttributes } from "../Z39-50-APDU-2001/ResultSetPlusAttributes.ta.mjs";


/**
 * @summary Operand
 * @description
 * 
 * Simple operand, a leaf of a type-1 or type-101 query. Each operand represents
 * a set of database records (ANSI/NISO Z39.50-2003 §3.7.1).
 * 
 * `attrTerm` is an attribute list plus a term, evaluated against the databases
 * named in the Search request.
 * 
 * `resultSet` is the set of records identified by that transient result set.
 * Those records stay in the result even when they belong to a database that
 * this Search does not name (§3.7.1).
 * 
 * `resultAttr` restricts a result set by an attribute list (§3.7.3). The server
 * must support the extended result set model for restriction; otherwise the
 * query is in error. This standard does not prescribe how the server stores the
 * surrogate of the search that created the set (Appendix ERS).
 * 
 * When version 2 is in force, a type-1 query uses `attrTerm` or `resultSet`.
 * `resultAttr` is allowed in version 2 only on a type-101 query. In version 3
 * it may occur in a type-1 query. A version-2 type-1 query that includes it may
 * be treated as a protocol error (§3.7, §4.4.2.2.3).
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
