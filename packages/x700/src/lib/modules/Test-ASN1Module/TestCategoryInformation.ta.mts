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
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TestCategoryInformation */
/**
 * @summary TestCategoryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestCategoryInformation  ::=  AdditionalInformation
 * ```
 */
export type TestCategoryInformation = AdditionalInformation; // DefinedType
/* END_OF_SYMBOL_DEFINITION TestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestCategoryInformation */
let _cached_decoder_for_TestCategoryInformation: $.ASN1Decoder<TestCategoryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _decode_TestCategoryInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) TestCategoryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestCategoryInformation} The decoded data structure.
 */
export function _decode_TestCategoryInformation(el: _Element) {
    if (!_cached_decoder_for_TestCategoryInformation) {
        _cached_decoder_for_TestCategoryInformation = _decode_AdditionalInformation;
    }
    return _cached_decoder_for_TestCategoryInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestCategoryInformation */
let _cached_encoder_for_TestCategoryInformation: $.ASN1Encoder<TestCategoryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _encode_TestCategoryInformation */
/**
 * @summary Encodes a(n) TestCategoryInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestCategoryInformation, encoded as an ASN.1 Element.
 */
export function _encode_TestCategoryInformation(
    value: TestCategoryInformation,
    elGetter: $.ASN1Encoder<TestCategoryInformation>
) {
    if (!_cached_encoder_for_TestCategoryInformation) {
        _cached_encoder_for_TestCategoryInformation = _encode_AdditionalInformation;
    }
    return _cached_encoder_for_TestCategoryInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestCategoryInformation */

/* eslint-enable */
