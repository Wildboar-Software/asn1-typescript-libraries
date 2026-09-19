/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ValueRange, _decode_ValueRange, _encode_ValueRange } from "../RecordSyntax-explain/ValueRange.ta.mjs";
// export { ValueRange, _decode_ValueRange, _encode_ValueRange } from "../RecordSyntax-explain/ValueRange.ta.mjs";
import { ValueDescription, _decode_ValueDescription, _encode_ValueDescription } from "../RecordSyntax-explain/ValueDescription.ta.mjs";
// export { ValueDescription, _decode_ValueDescription, _encode_ValueDescription } from "../RecordSyntax-explain/ValueDescription.ta.mjs";


/**
 * @summary ValueSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValueSet  ::=  CHOICE {
 *              range           [0] IMPLICIT ValueRange,
 *              enumerated      [1] IMPLICIT SEQUENCE OF ValueDescription }
 * ```
 */
export
type ValueSet =
    { range: ValueRange } /* CHOICE_ALT_ROOT */
    | { enumerated: ValueDescription[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ValueSet: $.ASN1Decoder<ValueSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValueSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ValueSet (el: _Element): ValueSet {
    if (!_cached_decoder_for_ValueSet) { _cached_decoder_for_ValueSet = $._decode_inextensible_choice<ValueSet>({
    "CONTEXT 0": [ "range", $._decode_implicit<ValueRange>(() => _decode_ValueRange) ],
    "CONTEXT 1": [ "enumerated", $._decode_implicit<ValueDescription[]>(() => $._decodeSequenceOf<ValueDescription>(() => _decode_ValueDescription)) ]
}); }
    return _cached_decoder_for_ValueSet(el);
}

let _cached_encoder_for_ValueSet: $.ASN1Encoder<ValueSet> | null = null;

/**
 * @summary Encodes a(n) ValueSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValueSet, encoded as an ASN.1 Element.
 */
export
function _encode_ValueSet (value: ValueSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ValueSet) { _cached_encoder_for_ValueSet = $._encode_choice<ValueSet>({
    "range": $._encode_implicit(_TagClass.context, 0, () => _encode_ValueRange, $.BER),
    "enumerated": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ValueDescription>(() => _encode_ValueDescription, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ValueSet(value, elGetter);
}


/* eslint-enable */
