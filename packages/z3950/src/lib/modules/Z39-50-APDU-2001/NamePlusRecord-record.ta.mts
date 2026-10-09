/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
import { FragmentSyntax, _decode_FragmentSyntax, _encode_FragmentSyntax } from "../Z39-50-APDU-2001/FragmentSyntax.ta.mjs";


/**
 * @summary NamePlusRecord_record
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamePlusRecord-record ::= CHOICE {
 *     retrievalRecord [1] EXTERNAL,
 *     surrogateDiagnostic [2] DiagRec,
 *     --Must select one of the above two, retrievalRecord or surrogateDiagnostic,
 *     --unless 'level 2 segmentation' is in effect.
 *     startingFragment [3] FragmentSyntax,
 *     intermediateFragment [4] FragmentSyntax,
 *     finalFragment [5] FragmentSyntax
 * }
 * ```
 */
export
type NamePlusRecord_record =
    { retrievalRecord: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { surrogateDiagnostic: DiagRec } /* CHOICE_ALT_ROOT */
    | { startingFragment: FragmentSyntax } /* CHOICE_ALT_ROOT */
    | { intermediateFragment: FragmentSyntax } /* CHOICE_ALT_ROOT */
    | { finalFragment: FragmentSyntax } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NamePlusRecord_record: $.ASN1Decoder<NamePlusRecord_record> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamePlusRecord_record
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamePlusRecord_record (el: _Element): NamePlusRecord_record {
    if (!_cached_decoder_for_NamePlusRecord_record) { _cached_decoder_for_NamePlusRecord_record = $._decode_inextensible_choice<NamePlusRecord_record>({
    "CONTEXT 1": [ "retrievalRecord", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 2": [ "surrogateDiagnostic", $._decode_explicit<DiagRec>(() => _decode_DiagRec) ],
    "CONTEXT 3": [ "startingFragment", $._decode_explicit<FragmentSyntax>(() => _decode_FragmentSyntax) ],
    "CONTEXT 4": [ "intermediateFragment", $._decode_explicit<FragmentSyntax>(() => _decode_FragmentSyntax) ],
    "CONTEXT 5": [ "finalFragment", $._decode_explicit<FragmentSyntax>(() => _decode_FragmentSyntax) ]
}); }
    return _cached_decoder_for_NamePlusRecord_record(el);
}

let _cached_encoder_for_NamePlusRecord_record: $.ASN1Encoder<NamePlusRecord_record> | null = null;

/**
 * @summary Encodes a(n) NamePlusRecord_record into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamePlusRecord_record, encoded as an ASN.1 Element.
 */
export
function _encode_NamePlusRecord_record (value: NamePlusRecord_record, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamePlusRecord_record) { _cached_encoder_for_NamePlusRecord_record = $._encode_choice<NamePlusRecord_record>({
    "retrievalRecord": $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER),
    "surrogateDiagnostic": $._encode_explicit(_TagClass.context, 2, () => _encode_DiagRec, $.BER),
    "startingFragment": $._encode_explicit(_TagClass.context, 3, () => _encode_FragmentSyntax, $.BER),
    "intermediateFragment": $._encode_explicit(_TagClass.context, 4, () => _encode_FragmentSyntax, $.BER),
    "finalFragment": $._encode_explicit(_TagClass.context, 5, () => _encode_FragmentSyntax, $.BER),
}, $.BER); }
    return _cached_encoder_for_NamePlusRecord_record(value, elGetter);
}


/* eslint-enable */
