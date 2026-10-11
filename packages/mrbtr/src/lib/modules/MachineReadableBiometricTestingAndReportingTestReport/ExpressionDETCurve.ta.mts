/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExpressionPointDETCurve, _decode_ExpressionPointDETCurve, _encode_ExpressionPointDETCurve } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionPointDETCurve.ta.mjs";


/**
 * @summary ExpressionDETCurve
 * @description
 *
 * Sequence of DET points in increasing Type I error order
 * (Clause 6.4.4.3.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExpressionDETCurve  ::=  SEQUENCE OF ExpressionPointDETCurve
 * ```
 */
export
type ExpressionDETCurve = ExpressionPointDETCurve[]; // SequenceOfType

let _cached_decoder_for_ExpressionDETCurve: $.ASN1Decoder<ExpressionDETCurve> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpressionDETCurve
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExpressionDETCurve (el: _Element): ExpressionDETCurve {
    if (!_cached_decoder_for_ExpressionDETCurve) { _cached_decoder_for_ExpressionDETCurve = $._decodeSequenceOf<ExpressionPointDETCurve>(() => _decode_ExpressionPointDETCurve); }
    return _cached_decoder_for_ExpressionDETCurve(el);
}

let _cached_encoder_for_ExpressionDETCurve: $.ASN1Encoder<ExpressionDETCurve> | null = null;

/**
 * @summary Encodes a(n) ExpressionDETCurve into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpressionDETCurve, encoded as an ASN.1 Element.
 */
export
function _encode_ExpressionDETCurve (value: ExpressionDETCurve, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExpressionDETCurve) { _cached_encoder_for_ExpressionDETCurve = $._encodeSequenceOf<ExpressionPointDETCurve>(() => _encode_ExpressionPointDETCurve, $.BER); }
    return _cached_encoder_for_ExpressionDETCurve(value, elGetter);
}


/* eslint-enable */
