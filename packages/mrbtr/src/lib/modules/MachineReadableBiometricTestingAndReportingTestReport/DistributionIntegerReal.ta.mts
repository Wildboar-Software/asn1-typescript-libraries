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
import { ExpressionPointIntegerReal, _decode_ExpressionPointIntegerReal, _encode_ExpressionPointIntegerReal } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionPointIntegerReal.ta.mjs";
// export { ExpressionPointIntegerReal, _decode_ExpressionPointIntegerReal, _encode_ExpressionPointIntegerReal } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionPointIntegerReal.ta.mjs";


/**
 * @summary DistributionIntegerReal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionIntegerReal  ::=  SEQUENCE OF ExpressionPointIntegerReal
 * ```
 */
export
type DistributionIntegerReal = ExpressionPointIntegerReal[]; // SequenceOfType

let _cached_decoder_for_DistributionIntegerReal: $.ASN1Decoder<DistributionIntegerReal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionIntegerReal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionIntegerReal (el: _Element): DistributionIntegerReal {
    if (!_cached_decoder_for_DistributionIntegerReal) { _cached_decoder_for_DistributionIntegerReal = $._decodeSequenceOf<ExpressionPointIntegerReal>(() => _decode_ExpressionPointIntegerReal); }
    return _cached_decoder_for_DistributionIntegerReal(el);
}

let _cached_encoder_for_DistributionIntegerReal: $.ASN1Encoder<DistributionIntegerReal> | null = null;

/**
 * @summary Encodes a(n) DistributionIntegerReal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionIntegerReal, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionIntegerReal (value: DistributionIntegerReal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionIntegerReal) { _cached_encoder_for_DistributionIntegerReal = $._encodeSequenceOf<ExpressionPointIntegerReal>(() => _encode_ExpressionPointIntegerReal, $.BER); }
    return _cached_encoder_for_DistributionIntegerReal(value, elGetter);
}


/* eslint-enable */
