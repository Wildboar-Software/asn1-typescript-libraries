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
import { ExpressionPointRealReal, _decode_ExpressionPointRealReal, _encode_ExpressionPointRealReal } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionPointRealReal.ta.mjs";
// export { ExpressionPointRealReal, _decode_ExpressionPointRealReal, _encode_ExpressionPointRealReal } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionPointRealReal.ta.mjs";


/**
 * @summary DistributionRealReal
 * @description
 *
 * CDF of a real-valued variable (comparison scores): proportion of
 * values ≤ `xValue` is `yValue`. Points shall appear in increasing
 * `xValue` order (Clause 6.4.4.3.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionRealReal  ::=  SEQUENCE OF ExpressionPointRealReal
 * ```
 */
export
type DistributionRealReal = ExpressionPointRealReal[]; // SequenceOfType

let _cached_decoder_for_DistributionRealReal: $.ASN1Decoder<DistributionRealReal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionRealReal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionRealReal (el: _Element): DistributionRealReal {
    if (!_cached_decoder_for_DistributionRealReal) { _cached_decoder_for_DistributionRealReal = $._decodeSequenceOf<ExpressionPointRealReal>(() => _decode_ExpressionPointRealReal); }
    return _cached_decoder_for_DistributionRealReal(el);
}

let _cached_encoder_for_DistributionRealReal: $.ASN1Encoder<DistributionRealReal> | null = null;

/**
 * @summary Encodes a(n) DistributionRealReal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionRealReal, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionRealReal (value: DistributionRealReal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionRealReal) { _cached_encoder_for_DistributionRealReal = $._encodeSequenceOf<ExpressionPointRealReal>(() => _encode_ExpressionPointRealReal, $.BER); }
    return _cached_encoder_for_DistributionRealReal(value, elGetter);
}


/* eslint-enable */
