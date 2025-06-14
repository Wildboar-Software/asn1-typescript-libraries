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

/* START_OF_SYMBOL_DEFINITION RegisteredAs */
/**
 * @summary RegisteredAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisteredAs  ::=  OBJECT IDENTIFIER
 * ```
 */
export type RegisteredAs = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisteredAs */
let _cached_decoder_for_RegisteredAs: $.ASN1Decoder<RegisteredAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _decode_RegisteredAs */
/**
 * @summary Decodes an ASN.1 element into a(n) RegisteredAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisteredAs} The decoded data structure.
 */
export function _decode_RegisteredAs(el: _Element) {
    if (!_cached_decoder_for_RegisteredAs) {
        _cached_decoder_for_RegisteredAs = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_RegisteredAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisteredAs */
let _cached_encoder_for_RegisteredAs: $.ASN1Encoder<RegisteredAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisteredAs */

/* START_OF_SYMBOL_DEFINITION _encode_RegisteredAs */
/**
 * @summary Encodes a(n) RegisteredAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisteredAs, encoded as an ASN.1 Element.
 */
export function _encode_RegisteredAs(
    value: RegisteredAs,
    elGetter: $.ASN1Encoder<RegisteredAs>
) {
    if (!_cached_encoder_for_RegisteredAs) {
        _cached_encoder_for_RegisteredAs = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_RegisteredAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegisteredAs */

/* eslint-enable */
