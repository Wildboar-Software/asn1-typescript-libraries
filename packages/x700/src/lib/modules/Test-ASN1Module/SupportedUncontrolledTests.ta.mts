/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION SupportedUncontrolledTests */
/**
 * @summary SupportedUncontrolledTests
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedUncontrolledTests  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export type SupportedUncontrolledTests = OBJECT_IDENTIFIER[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SupportedUncontrolledTests */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedUncontrolledTests */
let _cached_decoder_for_SupportedUncontrolledTests: $.ASN1Decoder<SupportedUncontrolledTests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedUncontrolledTests */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedUncontrolledTests */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedUncontrolledTests
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedUncontrolledTests} The decoded data structure.
 */
export function _decode_SupportedUncontrolledTests(el: _Element) {
    if (!_cached_decoder_for_SupportedUncontrolledTests) {
        _cached_decoder_for_SupportedUncontrolledTests = $._decodeSetOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_SupportedUncontrolledTests(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedUncontrolledTests */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedUncontrolledTests */
let _cached_encoder_for_SupportedUncontrolledTests: $.ASN1Encoder<SupportedUncontrolledTests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedUncontrolledTests */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedUncontrolledTests */
/**
 * @summary Encodes a(n) SupportedUncontrolledTests into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedUncontrolledTests, encoded as an ASN.1 Element.
 */
export function _encode_SupportedUncontrolledTests(
    value: SupportedUncontrolledTests,
    elGetter: $.ASN1Encoder<SupportedUncontrolledTests>
) {
    if (!_cached_encoder_for_SupportedUncontrolledTests) {
        _cached_encoder_for_SupportedUncontrolledTests = $._encodeSetOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedUncontrolledTests(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedUncontrolledTests */

/* eslint-enable */
