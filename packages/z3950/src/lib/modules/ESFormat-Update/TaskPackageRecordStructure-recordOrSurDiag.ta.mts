/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
// export { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";


/**
 * @summary TaskPackageRecordStructure_recordOrSurDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackageRecordStructure-recordOrSurDiag ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TaskPackageRecordStructure_recordOrSurDiag =
    { record: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { diagnostic: DiagRec } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TaskPackageRecordStructure_recordOrSurDiag: $.ASN1Decoder<TaskPackageRecordStructure_recordOrSurDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TaskPackageRecordStructure_recordOrSurDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TaskPackageRecordStructure_recordOrSurDiag (el: _Element): TaskPackageRecordStructure_recordOrSurDiag {
    if (!_cached_decoder_for_TaskPackageRecordStructure_recordOrSurDiag) { _cached_decoder_for_TaskPackageRecordStructure_recordOrSurDiag = $._decode_inextensible_choice<TaskPackageRecordStructure_recordOrSurDiag>({
    "CONTEXT 1": [ "record", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 2": [ "diagnostic", $._decode_explicit<DiagRec>(() => _decode_DiagRec) ]
}); }
    return _cached_decoder_for_TaskPackageRecordStructure_recordOrSurDiag(el);
}

let _cached_encoder_for_TaskPackageRecordStructure_recordOrSurDiag: $.ASN1Encoder<TaskPackageRecordStructure_recordOrSurDiag> | null = null;

/**
 * @summary Encodes a(n) TaskPackageRecordStructure_recordOrSurDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TaskPackageRecordStructure_recordOrSurDiag, encoded as an ASN.1 Element.
 */
export
function _encode_TaskPackageRecordStructure_recordOrSurDiag (value: TaskPackageRecordStructure_recordOrSurDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TaskPackageRecordStructure_recordOrSurDiag) { _cached_encoder_for_TaskPackageRecordStructure_recordOrSurDiag = $._encode_choice<TaskPackageRecordStructure_recordOrSurDiag>({
    "record": $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER),
    "diagnostic": $._encode_explicit(_TagClass.context, 2, () => _encode_DiagRec, $.BER),
}, $.BER); }
    return _cached_encoder_for_TaskPackageRecordStructure_recordOrSurDiag(value, elGetter);
}


/* eslint-enable */
