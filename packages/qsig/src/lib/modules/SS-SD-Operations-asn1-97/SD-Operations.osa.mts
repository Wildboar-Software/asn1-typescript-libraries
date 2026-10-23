/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { display } from "../SS-SD-Operations-asn1-97/display.oa.mjs";
import { keypad } from "../SS-SD-Operations-asn1-97/keypad.oa.mjs";

/**
 * @summary SD_Operations
 * @description
 *
 * Object set of the Simple Dialog operations (ECMA-311 §6.3.1): `display` and
 * `keypad`. SS-SD shall be used only to carry display information and keypad
 * information (§6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SD-Operations OPERATION ::= { display | keypad }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SD_Operations: (OPERATION)[] = [ display, keypad, ];

/* eslint-enable */
