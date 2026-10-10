/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticFormat_Item, _decode_DiagnosticFormat_Item, _encode_DiagnosticFormat_Item } from "../DiagnosticFormatDiag1/DiagnosticFormat-Item.ta.mjs";


/**
 * @summary DiagnosticFormat
 * @description
 * 
 * diag-1 `{z39-50-diagnostic diag-1(2)}` is a list of diagnostic records
 * (ANSI/NISO Z39.50-2003 DIAG.1). Each record may include a message and either
 * a default diagnostic or the structured diag-1 form.
 * 
 * When version 2 is in force, a diagnostic record is DefaultDiagFormat:
 * diagnostic-set OID, condition integer, and addinfo. When version 3 is in
 * force, that form may still be used, or the record may be an EXTERNAL whose
 * OID identifies a diagnostic format rather than a diagnostic set.
 * 
 * When `defaultDiagRec` uses the General Diagnostic Set
 * `{Z39-50-diagnostic 1}` (bib-1, renamed), `condition` is a DIAG.1
 * code. Those codes, and what addinfo must carry, are documented on
 * `DefaultDiagFormat.condition`. `explicitDiagnostic` is the
 * structured form; see `DiagFormat`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFormat  ::=   SEQUENCE OF SEQUENCE {
 *     diagnostic  [1] CHOICE {
 *         defaultDiagRec      [1] IMPLICIT DefaultDiagFormat,
 *         explicitDiagnostic  [2] DiagFormat
 *     } OPTIONAL,
 *     message     [2] IMPLICIT InternationalString OPTIONAL
 * }
 * ```
 */
export
type DiagnosticFormat = DiagnosticFormat_Item[]; // SequenceOfType

let _cached_decoder_for_DiagnosticFormat: $.ASN1Decoder<DiagnosticFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFormat (el: _Element): DiagnosticFormat {
    if (!_cached_decoder_for_DiagnosticFormat) { _cached_decoder_for_DiagnosticFormat = $._decodeSequenceOf<DiagnosticFormat_Item>(() => _decode_DiagnosticFormat_Item); }
    return _cached_decoder_for_DiagnosticFormat(el);
}

let _cached_encoder_for_DiagnosticFormat: $.ASN1Encoder<DiagnosticFormat> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFormat, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFormat (value: DiagnosticFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFormat) { _cached_encoder_for_DiagnosticFormat = $._encodeSequenceOf<DiagnosticFormat_Item>(() => _encode_DiagnosticFormat_Item, $.BER); }
    return _cached_encoder_for_DiagnosticFormat(value, elGetter);
}


/* eslint-enable */
