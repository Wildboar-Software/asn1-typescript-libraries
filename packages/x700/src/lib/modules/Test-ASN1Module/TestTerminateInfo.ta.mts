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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    IndicatedTests,
    _decode_IndicatedTests,
    _encode_IndicatedTests,
} from '../Test-ASN1Module/IndicatedTests.ta.mjs';
/**
 * @summary TestTerminateInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestTerminateInfo  ::=  IndicatedTests
 * ```
 */
export type TestTerminateInfo = IndicatedTests; // DefinedType

let _cached_decoder_for_TestTerminateInfo: $.ASN1Decoder<TestTerminateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestTerminateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestTerminateInfo} The decoded data structure.
 */
export function _decode_TestTerminateInfo(el: _Element) {
    if (!_cached_decoder_for_TestTerminateInfo) {
        _cached_decoder_for_TestTerminateInfo = _decode_IndicatedTests;
    }
    return _cached_decoder_for_TestTerminateInfo(el);
}

let _cached_encoder_for_TestTerminateInfo: $.ASN1Encoder<TestTerminateInfo> | null = null;

/**
 * @summary Encodes a(n) TestTerminateInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestTerminateInfo, encoded as an ASN.1 Element.
 */
export function _encode_TestTerminateInfo(
    value: TestTerminateInfo,
    elGetter: $.ASN1Encoder<TestTerminateInfo>
) {
    if (!_cached_encoder_for_TestTerminateInfo) {
        _cached_encoder_for_TestTerminateInfo = _encode_IndicatedTests;
    }
    return _cached_encoder_for_TestTerminateInfo(value, elGetter);
}


/* eslint-enable */
