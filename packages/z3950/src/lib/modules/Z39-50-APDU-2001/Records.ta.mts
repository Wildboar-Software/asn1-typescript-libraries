/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NamePlusRecord, _decode_NamePlusRecord, _encode_NamePlusRecord } from "../Z39-50-APDU-2001/NamePlusRecord.ta.mjs";
import { DefaultDiagFormat, _decode_DefaultDiagFormat, _encode_DefaultDiagFormat } from "../Z39-50-APDU-2001/DefaultDiagFormat.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";


/**
 * @summary Records
 * @description
 *
 * Records parameter of a Search or Present response.
 * `responseRecords` is the sequence of retrieval records and
 * surrogate diagnostics, in result-set order. The database name must
 * accompany the first record and any record from a different database
 * than its predecessor. `nonSurrogateDiagnostic` is one diagnostic
 * saying the operation cannot be processed; version 2 uses this form.
 * `multipleNonSurDiagnostics` is one or more such diagnostics;
 * version 3. Whenever search status or present status is failure, at
 * least one non-surrogate diagnostic is required. §3.2.2.1.7,
 * §3.2.3.1.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Records  ::=  CHOICE {
 *     responseRecords             [28] IMPLICIT SEQUENCE OF NamePlusRecord,
 *     nonSurrogateDiagnostic      [130] IMPLICIT DefaultDiagFormat,
 *     multipleNonSurDiagnostics   [205] IMPLICIT SEQUENCE OF DiagRec
 * }
 * ```
 */
export
type Records =
    { responseRecords: NamePlusRecord[] } /* CHOICE_ALT_ROOT */
    | { nonSurrogateDiagnostic: DefaultDiagFormat } /* CHOICE_ALT_ROOT */
    | { multipleNonSurDiagnostics: DiagRec[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Records: $.ASN1Decoder<Records> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Records
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Records (el: _Element): Records {
    if (!_cached_decoder_for_Records) { _cached_decoder_for_Records = $._decode_inextensible_choice<Records>({
    "CONTEXT 28": [ "responseRecords", $._decode_implicit<NamePlusRecord[]>(() => $._decodeSequenceOf<NamePlusRecord>(() => _decode_NamePlusRecord)) ],
    "CONTEXT 130": [ "nonSurrogateDiagnostic", $._decode_implicit<DefaultDiagFormat>(() => _decode_DefaultDiagFormat) ],
    "CONTEXT 205": [ "multipleNonSurDiagnostics", $._decode_implicit<DiagRec[]>(() => $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec)) ]
}); }
    return _cached_decoder_for_Records(el);
}

let _cached_encoder_for_Records: $.ASN1Encoder<Records> | null = null;

/**
 * @summary Encodes a(n) Records into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Records, encoded as an ASN.1 Element.
 */
export
function _encode_Records (value: Records, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Records) { _cached_encoder_for_Records = $._encode_choice<Records>({
    "responseRecords": $._encode_implicit(_TagClass.context, 28, () => $._encodeSequenceOf<NamePlusRecord>(() => _encode_NamePlusRecord, $.BER), $.BER),
    "nonSurrogateDiagnostic": $._encode_implicit(_TagClass.context, 130, () => _encode_DefaultDiagFormat, $.BER),
    "multipleNonSurDiagnostics": $._encode_implicit(_TagClass.context, 205, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_Records(value, elGetter);
}


/* eslint-enable */
