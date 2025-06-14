/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION Restriction_source_type */
/**
 * @summary Restriction_source_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Restriction-source-type ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Restriction_source_type = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION Restriction_source_type_originated_by */
/**
 * @summary Restriction_source_type_originated_by
 * @constant
 */
export const Restriction_source_type_originated_by: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Restriction_source_type_originated_by */

/* START_OF_SYMBOL_DEFINITION originated_by */
/**
 * @summary originated_by
 * @constant
 */
export const originated_by: number = Restriction_source_type_originated_by; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION originated_by */

/* START_OF_SYMBOL_DEFINITION Restriction_source_type_redirected_by */
/**
 * @summary Restriction_source_type_redirected_by
 * @constant
 */
export const Restriction_source_type_redirected_by: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Restriction_source_type_redirected_by */

/* START_OF_SYMBOL_DEFINITION redirected_by */
/**
 * @summary redirected_by
 * @constant
 */
export const redirected_by: number = Restriction_source_type_redirected_by; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION redirected_by */

/* START_OF_SYMBOL_DEFINITION Restriction_source_type_dl_expanded_by */
/**
 * @summary Restriction_source_type_dl_expanded_by
 * @constant
 */
export const Restriction_source_type_dl_expanded_by: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Restriction_source_type_dl_expanded_by */

/* START_OF_SYMBOL_DEFINITION dl_expanded_by */
/**
 * @summary dl_expanded_by
 * @constant
 */
export const dl_expanded_by: number = Restriction_source_type_dl_expanded_by; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dl_expanded_by */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Restriction_source_type */
let _cached_decoder_for_Restriction_source_type: $.ASN1Decoder<Restriction_source_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION _decode_Restriction_source_type */
/**
 * @summary Decodes an ASN.1 element into a(n) Restriction_source_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Restriction_source_type} The decoded data structure.
 */
export function _decode_Restriction_source_type(el: _Element) {
    if (!_cached_decoder_for_Restriction_source_type) {
        _cached_decoder_for_Restriction_source_type = $._decodeBitString;
    }
    return _cached_decoder_for_Restriction_source_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Restriction_source_type */
let _cached_encoder_for_Restriction_source_type: $.ASN1Encoder<Restriction_source_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION _encode_Restriction_source_type */
/**
 * @summary Encodes a(n) Restriction_source_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Restriction_source_type, encoded as an ASN.1 Element.
 */
export function _encode_Restriction_source_type(
    value: Restriction_source_type,
    elGetter: $.ASN1Encoder<Restriction_source_type>
) {
    if (!_cached_encoder_for_Restriction_source_type) {
        _cached_encoder_for_Restriction_source_type = $._encodeBitString;
    }
    return _cached_encoder_for_Restriction_source_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Restriction_source_type */

/* eslint-enable */
