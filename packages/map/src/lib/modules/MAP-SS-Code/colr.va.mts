/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary colr
 * @description
 *
 * Connected line identification restriction. Specific service. Bit pattern
 * `'00010100'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * colr    SS-Code ::= '00010100'B
 * ```
 * 
 * @constant
 */
export
const colr: SS_Code = new Uint8Array([ 0x14 ]);

/* eslint-enable */
