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

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes */
/**
 * @summary BuiltInEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInEncodedInformationTypes  ::=  BIT STRING {
 *   unknown(0), ia5-text(2), g3-facsimile(3), g4-class-1(4), teletex(5),
 *   videotex(6), voice(7), sfd(8), mixed-mode(9)
 * }(SIZE (0..ub-built-in-encoded-information-types))
 * ```
 */
export type BuiltInEncodedInformationTypes = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_unknown */
/**
 * @summary BuiltInEncodedInformationTypes_unknown
 * @constant
 */
export const BuiltInEncodedInformationTypes_unknown: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 */
export const unknown: number = BuiltInEncodedInformationTypes_unknown; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_ia5_text */
/**
 * @summary BuiltInEncodedInformationTypes_ia5_text
 * @constant
 */
export const BuiltInEncodedInformationTypes_ia5_text: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_ia5_text */

/* START_OF_SYMBOL_DEFINITION ia5_text */
/**
 * @summary ia5_text
 * @constant
 */
export const ia5_text: number = BuiltInEncodedInformationTypes_ia5_text; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ia5_text */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_g3_facsimile */
/**
 * @summary BuiltInEncodedInformationTypes_g3_facsimile
 * @constant
 */
export const BuiltInEncodedInformationTypes_g3_facsimile: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_g3_facsimile */

/* START_OF_SYMBOL_DEFINITION g3_facsimile */
/**
 * @summary g3_facsimile
 * @constant
 */
export const g3_facsimile: number = BuiltInEncodedInformationTypes_g3_facsimile; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION g3_facsimile */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_g4_class_1 */
/**
 * @summary BuiltInEncodedInformationTypes_g4_class_1
 * @constant
 */
export const BuiltInEncodedInformationTypes_g4_class_1: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_g4_class_1 */

/* START_OF_SYMBOL_DEFINITION g4_class_1 */
/**
 * @summary g4_class_1
 * @constant
 */
export const g4_class_1: number = BuiltInEncodedInformationTypes_g4_class_1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION g4_class_1 */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_teletex */
/**
 * @summary BuiltInEncodedInformationTypes_teletex
 * @constant
 */
export const BuiltInEncodedInformationTypes_teletex: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_teletex */

/* START_OF_SYMBOL_DEFINITION teletex */
/**
 * @summary teletex
 * @constant
 */
export const teletex: number = BuiltInEncodedInformationTypes_teletex; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION teletex */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_videotex */
/**
 * @summary BuiltInEncodedInformationTypes_videotex
 * @constant
 */
export const BuiltInEncodedInformationTypes_videotex: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_videotex */

/* START_OF_SYMBOL_DEFINITION videotex */
/**
 * @summary videotex
 * @constant
 */
export const videotex: number = BuiltInEncodedInformationTypes_videotex; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION videotex */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_voice */
/**
 * @summary BuiltInEncodedInformationTypes_voice
 * @constant
 */
export const BuiltInEncodedInformationTypes_voice: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_voice */

/* START_OF_SYMBOL_DEFINITION voice */
/**
 * @summary voice
 * @constant
 */
export const voice: number = BuiltInEncodedInformationTypes_voice; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION voice */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_sfd */
/**
 * @summary BuiltInEncodedInformationTypes_sfd
 * @constant
 */
export const BuiltInEncodedInformationTypes_sfd: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_sfd */

/* START_OF_SYMBOL_DEFINITION sfd */
/**
 * @summary sfd
 * @constant
 */
export const sfd: number = BuiltInEncodedInformationTypes_sfd; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sfd */

/* START_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_mixed_mode */
/**
 * @summary BuiltInEncodedInformationTypes_mixed_mode
 * @constant
 */
export const BuiltInEncodedInformationTypes_mixed_mode: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BuiltInEncodedInformationTypes_mixed_mode */

/* START_OF_SYMBOL_DEFINITION mixed_mode */
/**
 * @summary mixed_mode
 * @constant
 */
export const mixed_mode: number = BuiltInEncodedInformationTypes_mixed_mode; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION mixed_mode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInEncodedInformationTypes */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_BuiltInEncodedInformationTypes */
export const _decode_BuiltInEncodedInformationTypes = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_BuiltInEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInEncodedInformationTypes */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_BuiltInEncodedInformationTypes */
export const _encode_BuiltInEncodedInformationTypes = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_BuiltInEncodedInformationTypes */

/* eslint-enable */
