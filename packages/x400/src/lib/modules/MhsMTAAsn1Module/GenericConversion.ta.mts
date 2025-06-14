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

/* START_OF_SYMBOL_DEFINITION GenericConversion */
/**
 * @summary GenericConversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericConversion  ::=  OBJECT IDENTIFIER
 * ```
 */
export type GenericConversion = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION GenericConversion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericConversion */
let _cached_decoder_for_GenericConversion: $.ASN1Decoder<GenericConversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericConversion */

/* START_OF_SYMBOL_DEFINITION _decode_GenericConversion */
/**
 * @summary Decodes an ASN.1 element into a(n) GenericConversion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenericConversion} The decoded data structure.
 */
export function _decode_GenericConversion(el: _Element) {
    if (!_cached_decoder_for_GenericConversion) {
        _cached_decoder_for_GenericConversion = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_GenericConversion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GenericConversion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericConversion */
let _cached_encoder_for_GenericConversion: $.ASN1Encoder<GenericConversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericConversion */

/* START_OF_SYMBOL_DEFINITION _encode_GenericConversion */
/**
 * @summary Encodes a(n) GenericConversion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericConversion, encoded as an ASN.1 Element.
 */
export function _encode_GenericConversion(
    value: GenericConversion,
    elGetter: $.ASN1Encoder<GenericConversion>
) {
    if (!_cached_encoder_for_GenericConversion) {
        _cached_encoder_for_GenericConversion = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_GenericConversion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GenericConversion */

/* eslint-enable */
