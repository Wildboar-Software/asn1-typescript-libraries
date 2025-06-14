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

/* START_OF_SYMBOL_DEFINITION ExplicitConversion */
/**
 * @summary ExplicitConversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExplicitConversion  ::=  INTEGER {
 *   ia5-text-to-teletex(0),
 *   -- values 1 to 7 are no longer defined
 *   ia5-text-to-g3-facsimile(8), ia5-text-to-g4-class-1(9),
 *   ia5-text-to-videotex(10), teletex-to-ia5-text(11),
 *   teletex-to-g3-facsimile(12), teletex-to-g4-class-1(13),
 *   teletex-to-videotex(14),
 *   -- value 15 is no longer defined
 *   videotex-to-ia5-text(16), videotex-to-teletex(17)}(0..ub-integer-options)
 * ```
 */
export type ExplicitConversion = INTEGER;
/* END_OF_SYMBOL_DEFINITION ExplicitConversion */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_teletex */
/**
 * @summary ExplicitConversion_ia5_text_to_teletex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_teletex: ExplicitConversion = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_teletex */

/* START_OF_SYMBOL_DEFINITION ia5_text_to_teletex */
/**
 * @summary ExplicitConversion_ia5_text_to_teletex
 * @constant
 * @type {number}
 */
export const ia5_text_to_teletex: ExplicitConversion = ExplicitConversion_ia5_text_to_teletex; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5_text_to_teletex */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_g3_facsimile */
/**
 * @summary ExplicitConversion_ia5_text_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_g3_facsimile: ExplicitConversion = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_g3_facsimile */

/* START_OF_SYMBOL_DEFINITION ia5_text_to_g3_facsimile */
/**
 * @summary ExplicitConversion_ia5_text_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const ia5_text_to_g3_facsimile: ExplicitConversion = ExplicitConversion_ia5_text_to_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5_text_to_g3_facsimile */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_g4_class_1 */
/**
 * @summary ExplicitConversion_ia5_text_to_g4_class_1
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_g4_class_1: ExplicitConversion = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_g4_class_1 */

/* START_OF_SYMBOL_DEFINITION ia5_text_to_g4_class_1 */
/**
 * @summary ExplicitConversion_ia5_text_to_g4_class_1
 * @constant
 * @type {number}
 */
export const ia5_text_to_g4_class_1: ExplicitConversion = ExplicitConversion_ia5_text_to_g4_class_1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5_text_to_g4_class_1 */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_videotex */
/**
 * @summary ExplicitConversion_ia5_text_to_videotex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_videotex: ExplicitConversion = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_ia5_text_to_videotex */

/* START_OF_SYMBOL_DEFINITION ia5_text_to_videotex */
/**
 * @summary ExplicitConversion_ia5_text_to_videotex
 * @constant
 * @type {number}
 */
export const ia5_text_to_videotex: ExplicitConversion = ExplicitConversion_ia5_text_to_videotex; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5_text_to_videotex */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_ia5_text */
/**
 * @summary ExplicitConversion_teletex_to_ia5_text
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_ia5_text: ExplicitConversion = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_ia5_text */

/* START_OF_SYMBOL_DEFINITION teletex_to_ia5_text */
/**
 * @summary ExplicitConversion_teletex_to_ia5_text
 * @constant
 * @type {number}
 */
export const teletex_to_ia5_text: ExplicitConversion = ExplicitConversion_teletex_to_ia5_text; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION teletex_to_ia5_text */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_g3_facsimile */
/**
 * @summary ExplicitConversion_teletex_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_g3_facsimile: ExplicitConversion = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_g3_facsimile */

/* START_OF_SYMBOL_DEFINITION teletex_to_g3_facsimile */
/**
 * @summary ExplicitConversion_teletex_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const teletex_to_g3_facsimile: ExplicitConversion = ExplicitConversion_teletex_to_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION teletex_to_g3_facsimile */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_g4_class_1 */
/**
 * @summary ExplicitConversion_teletex_to_g4_class_1
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_g4_class_1: ExplicitConversion = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_g4_class_1 */

/* START_OF_SYMBOL_DEFINITION teletex_to_g4_class_1 */
/**
 * @summary ExplicitConversion_teletex_to_g4_class_1
 * @constant
 * @type {number}
 */
export const teletex_to_g4_class_1: ExplicitConversion = ExplicitConversion_teletex_to_g4_class_1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION teletex_to_g4_class_1 */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_videotex */
/**
 * @summary ExplicitConversion_teletex_to_videotex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_videotex: ExplicitConversion = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_teletex_to_videotex */

/* START_OF_SYMBOL_DEFINITION teletex_to_videotex */
/**
 * @summary ExplicitConversion_teletex_to_videotex
 * @constant
 * @type {number}
 */
export const teletex_to_videotex: ExplicitConversion = ExplicitConversion_teletex_to_videotex; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION teletex_to_videotex */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_videotex_to_ia5_text */
/**
 * @summary ExplicitConversion_videotex_to_ia5_text
 * @constant
 * @type {number}
 */
export const ExplicitConversion_videotex_to_ia5_text: ExplicitConversion = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_videotex_to_ia5_text */

/* START_OF_SYMBOL_DEFINITION videotex_to_ia5_text */
/**
 * @summary ExplicitConversion_videotex_to_ia5_text
 * @constant
 * @type {number}
 */
export const videotex_to_ia5_text: ExplicitConversion = ExplicitConversion_videotex_to_ia5_text; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION videotex_to_ia5_text */

/* START_OF_SYMBOL_DEFINITION ExplicitConversion_videotex_to_teletex */
/**
 * @summary ExplicitConversion_videotex_to_teletex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_videotex_to_teletex: ExplicitConversion = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitConversion_videotex_to_teletex */

/* START_OF_SYMBOL_DEFINITION videotex_to_teletex */
/**
 * @summary ExplicitConversion_videotex_to_teletex
 * @constant
 * @type {number}
 */
export const videotex_to_teletex: ExplicitConversion = ExplicitConversion_videotex_to_teletex; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION videotex_to_teletex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExplicitConversion */
let _cached_decoder_for_ExplicitConversion: $.ASN1Decoder<ExplicitConversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExplicitConversion */

/* START_OF_SYMBOL_DEFINITION _decode_ExplicitConversion */
/**
 * @summary Decodes an ASN.1 element into a(n) ExplicitConversion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExplicitConversion} The decoded data structure.
 */
export function _decode_ExplicitConversion(el: _Element) {
    if (!_cached_decoder_for_ExplicitConversion) {
        _cached_decoder_for_ExplicitConversion = $._decodeInteger;
    }
    return _cached_decoder_for_ExplicitConversion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExplicitConversion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExplicitConversion */
let _cached_encoder_for_ExplicitConversion: $.ASN1Encoder<ExplicitConversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExplicitConversion */

/* START_OF_SYMBOL_DEFINITION _encode_ExplicitConversion */
/**
 * @summary Encodes a(n) ExplicitConversion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExplicitConversion, encoded as an ASN.1 Element.
 */
export function _encode_ExplicitConversion(
    value: ExplicitConversion,
    elGetter: $.ASN1Encoder<ExplicitConversion>
) {
    if (!_cached_encoder_for_ExplicitConversion) {
        _cached_encoder_for_ExplicitConversion = $._encodeInteger;
    }
    return _cached_encoder_for_ExplicitConversion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExplicitConversion */

/* eslint-enable */
