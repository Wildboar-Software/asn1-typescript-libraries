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

/* START_OF_SYMBOL_DEFINITION _enum_for_Context_representation */
/**
 * @summary Context_representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-representation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_Context_representation {
    aCTION_INFO = 0,
    aCTION_REPLY = 1,
    eVENT_INFO = 2,
    eVENT_REPLY = 3,
    sPECIFIC_ERROR = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Context_representation */

/* START_OF_SYMBOL_DEFINITION Context_representation */
/**
 * @summary Context_representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-representation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type Context_representation = _enum_for_Context_representation;
/* END_OF_SYMBOL_DEFINITION Context_representation */

/* START_OF_SYMBOL_DEFINITION Context_representation */
/**
 * @summary Context_representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-representation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const Context_representation = _enum_for_Context_representation;
/* END_OF_SYMBOL_DEFINITION Context_representation */

/* START_OF_SYMBOL_DEFINITION Context_representation_aCTION_INFO */
/**
 * @summary Context_representation_aCTION_INFO
 * @constant
 * @type {number}
 */
export const Context_representation_aCTION_INFO: Context_representation =
    Context_representation.aCTION_INFO; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Context_representation_aCTION_INFO */

/* START_OF_SYMBOL_DEFINITION aCTION_INFO */
/**
 * @summary aCTION_INFO
 * @constant
 * @type {number}
 */
export const aCTION_INFO: Context_representation =
    Context_representation.aCTION_INFO; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION aCTION_INFO */

/* START_OF_SYMBOL_DEFINITION Context_representation_aCTION_REPLY */
/**
 * @summary Context_representation_aCTION_REPLY
 * @constant
 * @type {number}
 */
export const Context_representation_aCTION_REPLY: Context_representation =
    Context_representation.aCTION_REPLY; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Context_representation_aCTION_REPLY */

/* START_OF_SYMBOL_DEFINITION aCTION_REPLY */
/**
 * @summary aCTION_REPLY
 * @constant
 * @type {number}
 */
export const aCTION_REPLY: Context_representation =
    Context_representation.aCTION_REPLY; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION aCTION_REPLY */

/* START_OF_SYMBOL_DEFINITION Context_representation_eVENT_INFO */
/**
 * @summary Context_representation_eVENT_INFO
 * @constant
 * @type {number}
 */
export const Context_representation_eVENT_INFO: Context_representation =
    Context_representation.eVENT_INFO; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Context_representation_eVENT_INFO */

/* START_OF_SYMBOL_DEFINITION eVENT_INFO */
/**
 * @summary eVENT_INFO
 * @constant
 * @type {number}
 */
export const eVENT_INFO: Context_representation =
    Context_representation.eVENT_INFO; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION eVENT_INFO */

/* START_OF_SYMBOL_DEFINITION Context_representation_eVENT_REPLY */
/**
 * @summary Context_representation_eVENT_REPLY
 * @constant
 * @type {number}
 */
export const Context_representation_eVENT_REPLY: Context_representation =
    Context_representation.eVENT_REPLY; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Context_representation_eVENT_REPLY */

/* START_OF_SYMBOL_DEFINITION eVENT_REPLY */
/**
 * @summary eVENT_REPLY
 * @constant
 * @type {number}
 */
export const eVENT_REPLY: Context_representation =
    Context_representation.eVENT_REPLY; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION eVENT_REPLY */

/* START_OF_SYMBOL_DEFINITION Context_representation_sPECIFIC_ERROR */
/**
 * @summary Context_representation_sPECIFIC_ERROR
 * @constant
 * @type {number}
 */
export const Context_representation_sPECIFIC_ERROR: Context_representation =
    Context_representation.sPECIFIC_ERROR; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Context_representation_sPECIFIC_ERROR */

/* START_OF_SYMBOL_DEFINITION sPECIFIC_ERROR */
/**
 * @summary sPECIFIC_ERROR
 * @constant
 * @type {number}
 */
export const sPECIFIC_ERROR: Context_representation =
    Context_representation.sPECIFIC_ERROR; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sPECIFIC_ERROR */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Context_representation */
let _cached_decoder_for_Context_representation: $.ASN1Decoder<Context_representation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Context_representation */

/* START_OF_SYMBOL_DEFINITION _decode_Context_representation */
/**
 * @summary Decodes an ASN.1 element into a(n) Context_representation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_representation} The decoded data structure.
 */
export function _decode_Context_representation(el: _Element) {
    if (!_cached_decoder_for_Context_representation) {
        _cached_decoder_for_Context_representation = $._decodeEnumerated;
    }
    return _cached_decoder_for_Context_representation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Context_representation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Context_representation */
let _cached_encoder_for_Context_representation: $.ASN1Encoder<Context_representation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Context_representation */

/* START_OF_SYMBOL_DEFINITION _encode_Context_representation */
/**
 * @summary Encodes a(n) Context_representation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_representation, encoded as an ASN.1 Element.
 */
export function _encode_Context_representation(
    value: Context_representation,
    elGetter: $.ASN1Encoder<Context_representation>
) {
    if (!_cached_encoder_for_Context_representation) {
        _cached_encoder_for_Context_representation = $._encodeEnumerated;
    }
    return _cached_encoder_for_Context_representation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Context_representation */

/* eslint-enable */
