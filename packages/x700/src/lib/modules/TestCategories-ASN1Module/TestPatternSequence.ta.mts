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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TestPattern,
    _decode_TestPattern,
    _encode_TestPattern,
} from '../TestCategories-ASN1Module/TestPattern.ta.mjs';
/**
 * @summary TestPatternSequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestPatternSequence  ::=
 *   SEQUENCE OF TestPattern
 * ```
 */
export type TestPatternSequence = TestPattern[]; // SequenceOfType

let _cached_decoder_for_TestPatternSequence: $.ASN1Decoder<TestPatternSequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestPatternSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestPatternSequence} The decoded data structure.
 */
export function _decode_TestPatternSequence(el: _Element) {
    if (!_cached_decoder_for_TestPatternSequence) {
        _cached_decoder_for_TestPatternSequence = $._decodeSequenceOf<TestPattern>(
            () => _decode_TestPattern
        );
    }
    return _cached_decoder_for_TestPatternSequence(el);
}

let _cached_encoder_for_TestPatternSequence: $.ASN1Encoder<TestPatternSequence> | null = null;

/**
 * @summary Encodes a(n) TestPatternSequence into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestPatternSequence, encoded as an ASN.1 Element.
 */
export function _encode_TestPatternSequence(
    value: TestPatternSequence,
    elGetter: $.ASN1Encoder<TestPatternSequence>
) {
    if (!_cached_encoder_for_TestPatternSequence) {
        _cached_encoder_for_TestPatternSequence = $._encodeSequenceOf<TestPattern>(
            () => _encode_TestPattern,
            $.BER
        );
    }
    return _cached_encoder_for_TestPatternSequence(value, elGetter);
}


/* eslint-enable */
