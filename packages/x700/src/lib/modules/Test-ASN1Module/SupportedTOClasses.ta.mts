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

/* START_OF_SYMBOL_DEFINITION SupportedTOClasses */
/**
 * @summary SupportedTOClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedTOClasses  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export type SupportedTOClasses = OBJECT_IDENTIFIER[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SupportedTOClasses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedTOClasses */
let _cached_decoder_for_SupportedTOClasses: $.ASN1Decoder<SupportedTOClasses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedTOClasses */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedTOClasses */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedTOClasses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedTOClasses} The decoded data structure.
 */
export function _decode_SupportedTOClasses(el: _Element) {
    if (!_cached_decoder_for_SupportedTOClasses) {
        _cached_decoder_for_SupportedTOClasses = $._decodeSetOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_SupportedTOClasses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedTOClasses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedTOClasses */
let _cached_encoder_for_SupportedTOClasses: $.ASN1Encoder<SupportedTOClasses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedTOClasses */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedTOClasses */
/**
 * @summary Encodes a(n) SupportedTOClasses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedTOClasses, encoded as an ASN.1 Element.
 */
export function _encode_SupportedTOClasses(
    value: SupportedTOClasses,
    elGetter: $.ASN1Encoder<SupportedTOClasses>
) {
    if (!_cached_encoder_for_SupportedTOClasses) {
        _cached_encoder_for_SupportedTOClasses = $._encodeSetOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedTOClasses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedTOClasses */

/* eslint-enable */
