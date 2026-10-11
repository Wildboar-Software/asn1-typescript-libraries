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
import { ExpressionPointIntegerInteger, _decode_ExpressionPointIntegerInteger, _encode_ExpressionPointIntegerInteger } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionPointIntegerInteger.ta.mjs";


/**
 * @summary DistributionIntegerInteger
 * @description
 *
 * Sequence of `(subjectId, numberOfSamples)` points
 * (Clause 6.4.4.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionIntegerInteger  ::=  SEQUENCE OF ExpressionPointIntegerInteger
 * ```
 */
export
type DistributionIntegerInteger = ExpressionPointIntegerInteger[]; // SequenceOfType

let _cached_decoder_for_DistributionIntegerInteger: $.ASN1Decoder<DistributionIntegerInteger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionIntegerInteger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionIntegerInteger (el: _Element): DistributionIntegerInteger {
    if (!_cached_decoder_for_DistributionIntegerInteger) { _cached_decoder_for_DistributionIntegerInteger = $._decodeSequenceOf<ExpressionPointIntegerInteger>(() => _decode_ExpressionPointIntegerInteger); }
    return _cached_decoder_for_DistributionIntegerInteger(el);
}

let _cached_encoder_for_DistributionIntegerInteger: $.ASN1Encoder<DistributionIntegerInteger> | null = null;

/**
 * @summary Encodes a(n) DistributionIntegerInteger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionIntegerInteger, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionIntegerInteger (value: DistributionIntegerInteger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionIntegerInteger) { _cached_encoder_for_DistributionIntegerInteger = $._encodeSequenceOf<ExpressionPointIntegerInteger>(() => _encode_ExpressionPointIntegerInteger, $.BER); }
    return _cached_encoder_for_DistributionIntegerInteger(value, elGetter);
}


/* eslint-enable */
