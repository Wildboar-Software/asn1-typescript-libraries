/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION TestStep */
/**
 * @summary TestStep
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestStep  ::=  INTEGER
 * ```
 */
export type TestStep = INTEGER;
/* END_OF_SYMBOL_DEFINITION TestStep */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestStep */
let _cached_decoder_for_TestStep: $.ASN1Decoder<TestStep> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestStep */

/* START_OF_SYMBOL_DEFINITION _decode_TestStep */
/**
 * @summary Decodes an ASN.1 element into a(n) TestStep
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestStep} The decoded data structure.
 */
export function _decode_TestStep(el: _Element) {
    if (!_cached_decoder_for_TestStep) {
        _cached_decoder_for_TestStep = $._decodeInteger;
    }
    return _cached_decoder_for_TestStep(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestStep */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestStep */
let _cached_encoder_for_TestStep: $.ASN1Encoder<TestStep> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestStep */

/* START_OF_SYMBOL_DEFINITION _encode_TestStep */
/**
 * @summary Encodes a(n) TestStep into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestStep, encoded as an ASN.1 Element.
 */
export function _encode_TestStep(
    value: TestStep,
    elGetter: $.ASN1Encoder<TestStep>
) {
    if (!_cached_encoder_for_TestStep) {
        _cached_encoder_for_TestStep = $._encodeInteger;
    }
    return _cached_encoder_for_TestStep(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestStep */

/* eslint-enable */
