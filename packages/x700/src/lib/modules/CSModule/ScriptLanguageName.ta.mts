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

/* START_OF_SYMBOL_DEFINITION ScriptLanguageName */
/**
 * @summary ScriptLanguageName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptLanguageName  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ScriptLanguageName = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ScriptLanguageName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptLanguageName */
let _cached_decoder_for_ScriptLanguageName: $.ASN1Decoder<ScriptLanguageName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptLanguageName */

/* START_OF_SYMBOL_DEFINITION _decode_ScriptLanguageName */
/**
 * @summary Decodes an ASN.1 element into a(n) ScriptLanguageName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScriptLanguageName} The decoded data structure.
 */
export function _decode_ScriptLanguageName(el: _Element) {
    if (!_cached_decoder_for_ScriptLanguageName) {
        _cached_decoder_for_ScriptLanguageName = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ScriptLanguageName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScriptLanguageName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptLanguageName */
let _cached_encoder_for_ScriptLanguageName: $.ASN1Encoder<ScriptLanguageName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptLanguageName */

/* START_OF_SYMBOL_DEFINITION _encode_ScriptLanguageName */
/**
 * @summary Encodes a(n) ScriptLanguageName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptLanguageName, encoded as an ASN.1 Element.
 */
export function _encode_ScriptLanguageName(
    value: ScriptLanguageName,
    elGetter: $.ASN1Encoder<ScriptLanguageName>
) {
    if (!_cached_encoder_for_ScriptLanguageName) {
        _cached_encoder_for_ScriptLanguageName = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ScriptLanguageName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScriptLanguageName */

/* eslint-enable */
