/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";


/**
 * @summary DiagnosticContainer
 * @description
 * 
 * Operation-level diagnostics under one well-known OID,
 * generalDiagnosticContainer `{Z39-50-diagnostic 4}`, so a client can see that
 * diagnostics are inside even when it does not recognize the OIDs they use
 * (DIAG.2, ASN1.3). The container is independent of service and of status. It
 * is for otherInfo, or for userInformationField used to simulate otherInfo
 * (USR.2), including diagnostics in an InitResponse (DIAG.3). It does not
 * replace the diagnostics already defined for each service.
 * 
 * Example: a Search may succeed while the server does not execute APDUs
 * encapsulated in that Search (§4.3). The server still returns a diagnostic
 * such as an unsupported encapsulated sequence. Search's own diagnostic does
 * not fit that case when search status is success.
 * 
 * Each element is a DiagRec. Version 2 must use DefaultDiagFormat. Version 3
 * may use an EXTERNAL instead. The module header in ASN1.3 writes the OID arc
 * as Z39-50-diagnosticFormat; DIAG.2 assigns `{Z39-50-diagnostic 4}`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticContainer  ::=  SEQUENCE OF DiagRec
 * ```
 */
export
type DiagnosticContainer = DiagRec[]; // SequenceOfType

let _cached_decoder_for_DiagnosticContainer: $.ASN1Decoder<DiagnosticContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticContainer (el: _Element): DiagnosticContainer {
    if (!_cached_decoder_for_DiagnosticContainer) { _cached_decoder_for_DiagnosticContainer = $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec); }
    return _cached_decoder_for_DiagnosticContainer(el);
}

let _cached_encoder_for_DiagnosticContainer: $.ASN1Encoder<DiagnosticContainer> | null = null;

/**
 * @summary Encodes a(n) DiagnosticContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticContainer, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticContainer (value: DiagnosticContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticContainer) { _cached_encoder_for_DiagnosticContainer = $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER); }
    return _cached_encoder_for_DiagnosticContainer(value, elGetter);
}


/* eslint-enable */
