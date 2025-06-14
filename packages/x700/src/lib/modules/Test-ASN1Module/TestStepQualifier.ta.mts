/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION TestStepQualifier */
/**
 * @summary TestStepQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestStepQualifier  ::=  GraphicString
 * ```
 */
export type TestStepQualifier = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION TestStepQualifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestStepQualifier */
let _cached_decoder_for_TestStepQualifier: $.ASN1Decoder<TestStepQualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestStepQualifier */

/* START_OF_SYMBOL_DEFINITION _decode_TestStepQualifier */
/**
 * @summary Decodes an ASN.1 element into a(n) TestStepQualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestStepQualifier} The decoded data structure.
 */
export function _decode_TestStepQualifier(el: _Element) {
    if (!_cached_decoder_for_TestStepQualifier) {
        _cached_decoder_for_TestStepQualifier = $._decodeGraphicString;
    }
    return _cached_decoder_for_TestStepQualifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestStepQualifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestStepQualifier */
let _cached_encoder_for_TestStepQualifier: $.ASN1Encoder<TestStepQualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestStepQualifier */

/* START_OF_SYMBOL_DEFINITION _encode_TestStepQualifier */
/**
 * @summary Encodes a(n) TestStepQualifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestStepQualifier, encoded as an ASN.1 Element.
 */
export function _encode_TestStepQualifier(
    value: TestStepQualifier,
    elGetter: $.ASN1Encoder<TestStepQualifier>
) {
    if (!_cached_encoder_for_TestStepQualifier) {
        _cached_encoder_for_TestStepQualifier = $._encodeGraphicString;
    }
    return _cached_encoder_for_TestStepQualifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestStepQualifier */

/* eslint-enable */
