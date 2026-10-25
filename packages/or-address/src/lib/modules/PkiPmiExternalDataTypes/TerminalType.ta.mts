/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TerminalType
 * @description
 *
 * Terminal type INTEGER (ITU-T X.402 (1999), §18.3.24): `telex`(3), `teletex`(4),
 * `g3-facsimile`(5), `g4-facsimile`(6), `ia5-terminal`(7), `videotex`(8). Values 0–2 are
 * unused. Used only in terminal OR-addresses (X.402 Table 10). Constrained to
 * 0..`ub-integer-options`.
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

/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export const TerminalType_telex = 3 satisfies TerminalType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export const telex = TerminalType_telex satisfies TerminalType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export const TerminalType_teletex = 4 satisfies TerminalType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export const teletex = TerminalType_teletex satisfies TerminalType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g3_facsimile = 5 satisfies TerminalType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export const g3_facsimile = TerminalType_g3_facsimile satisfies TerminalType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g4_facsimile = 6 satisfies TerminalType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export const g4_facsimile = TerminalType_g4_facsimile satisfies TerminalType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export const TerminalType_ia5_terminal = 7 satisfies TerminalType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export const ia5_terminal = TerminalType_ia5_terminal satisfies TerminalType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export const TerminalType_videotex = 8 satisfies TerminalType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export const videotex = TerminalType_videotex satisfies TerminalType; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TerminalType: $.ASN1Decoder<TerminalType> = $._decodeInteger;


export const _encode_TerminalType: $.ASN1Encoder<TerminalType> = $._encodeInteger;


/* eslint-enable */
