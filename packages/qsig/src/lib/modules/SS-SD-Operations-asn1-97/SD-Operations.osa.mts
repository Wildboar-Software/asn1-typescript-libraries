/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { display } from "../SS-SD-Operations-asn1-97/display.oa.mjs";
import { keypad } from "../SS-SD-Operations-asn1-97/keypad.oa.mjs";

/**
 * @summary SD_Operations
 * @description
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
