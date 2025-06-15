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

/* START_OF_SYMBOL_DEFINITION TerminalType */
/**
 * @summary TerminalType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminalType  ::=  INTEGER {
 *   telex(3), teletex(4), g3-facsimile(5), g4-facsimile(6), ia5-terminal(7),
 *   videotex(8)}(0..ub-integer-options)
 * ```
 */
export type TerminalType = INTEGER;
/* END_OF_SYMBOL_DEFINITION TerminalType */

/* START_OF_SYMBOL_DEFINITION TerminalType_telex */
/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export const TerminalType_telex: TerminalType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_telex */

/* START_OF_SYMBOL_DEFINITION telex */
/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export const telex: TerminalType = TerminalType_telex; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION telex */

/* START_OF_SYMBOL_DEFINITION TerminalType_teletex */
/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export const TerminalType_teletex: TerminalType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_teletex */

/* START_OF_SYMBOL_DEFINITION teletex */
/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export const teletex: TerminalType = TerminalType_teletex; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION teletex */

/* START_OF_SYMBOL_DEFINITION TerminalType_g3_facsimile */
/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g3_facsimile: TerminalType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_g3_facsimile */

/* START_OF_SYMBOL_DEFINITION g3_facsimile */
/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export const g3_facsimile: TerminalType = TerminalType_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION g3_facsimile */

/* START_OF_SYMBOL_DEFINITION TerminalType_g4_facsimile */
/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g4_facsimile: TerminalType = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_g4_facsimile */

/* START_OF_SYMBOL_DEFINITION g4_facsimile */
/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export const g4_facsimile: TerminalType = TerminalType_g4_facsimile; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION g4_facsimile */

/* START_OF_SYMBOL_DEFINITION TerminalType_ia5_terminal */
/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export const TerminalType_ia5_terminal: TerminalType = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_ia5_terminal */

/* START_OF_SYMBOL_DEFINITION ia5_terminal */
/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export const ia5_terminal: TerminalType = TerminalType_ia5_terminal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5_terminal */

/* START_OF_SYMBOL_DEFINITION TerminalType_videotex */
/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export const TerminalType_videotex: TerminalType = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_videotex */

/* START_OF_SYMBOL_DEFINITION videotex */
/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export const videotex: TerminalType = TerminalType_videotex; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION videotex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminalType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminalType */

/* START_OF_SYMBOL_DEFINITION _decode_TerminalType */
export const _decode_TerminalType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TerminalType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminalType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminalType */

/* START_OF_SYMBOL_DEFINITION _encode_TerminalType */
export const _encode_TerminalType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TerminalType */

/* eslint-enable */
