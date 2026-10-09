/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_integer_options } from "../PKIX1Explicit88/ub-integer-options.va.mjs";



/**
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  INTEGER {
 *    telex (3),
 *    teletex (4),
 *    g3-facsimile (5),
 *    g4-facsimile (6),
 *    ia5-terminal (7),
 *    videotex (8) } (0..ub-integer-options)
 * ```
 */
export
type TerminalType = INTEGER;

/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export
const TerminalType_telex: TerminalType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export
const telex: TerminalType = TerminalType_telex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export
const TerminalType_teletex: TerminalType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export
const teletex: TerminalType = TerminalType_teletex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export
const TerminalType_g3_facsimile: TerminalType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export
const g3_facsimile: TerminalType = TerminalType_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export
const TerminalType_g4_facsimile: TerminalType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export
const g4_facsimile: TerminalType = TerminalType_g4_facsimile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export
const TerminalType_ia5_terminal: TerminalType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export
const ia5_terminal: TerminalType = TerminalType_ia5_terminal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export
const TerminalType_videotex: TerminalType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export
const videotex: TerminalType = TerminalType_videotex; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TerminalType = (el: _Element): TerminalType => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > Number(ub_integer_options)) {
        throw new ASN1OverflowError("TerminalType violates INTEGER range");
    }
    return value;
};
export const _encode_TerminalType = $._encodeInteger;


/* eslint-enable */
