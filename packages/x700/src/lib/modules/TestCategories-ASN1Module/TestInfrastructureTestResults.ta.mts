/* eslint-disable */
import {
    NULL,
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

/* START_OF_SYMBOL_DEFINITION TestInfrastructureTestResults */
/**
 * @summary TestInfrastructureTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestInfrastructureTestResults  ::=  NULL
 * ```
 */
export type TestInfrastructureTestResults = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION TestInfrastructureTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestInfrastructureTestResults */
let _cached_decoder_for_TestInfrastructureTestResults: $.ASN1Decoder<TestInfrastructureTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestInfrastructureTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_TestInfrastructureTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) TestInfrastructureTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestInfrastructureTestResults} The decoded data structure.
 */
export function _decode_TestInfrastructureTestResults(el: _Element) {
    if (!_cached_decoder_for_TestInfrastructureTestResults) {
        _cached_decoder_for_TestInfrastructureTestResults = $._decodeNull;
    }
    return _cached_decoder_for_TestInfrastructureTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestInfrastructureTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestInfrastructureTestResults */
let _cached_encoder_for_TestInfrastructureTestResults: $.ASN1Encoder<TestInfrastructureTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestInfrastructureTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_TestInfrastructureTestResults */
/**
 * @summary Encodes a(n) TestInfrastructureTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestInfrastructureTestResults, encoded as an ASN.1 Element.
 */
export function _encode_TestInfrastructureTestResults(
    value: TestInfrastructureTestResults,
    elGetter: $.ASN1Encoder<TestInfrastructureTestResults>
) {
    if (!_cached_encoder_for_TestInfrastructureTestResults) {
        _cached_encoder_for_TestInfrastructureTestResults = $._encodeNull;
    }
    return _cached_encoder_for_TestInfrastructureTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestInfrastructureTestResults */

/* eslint-enable */
