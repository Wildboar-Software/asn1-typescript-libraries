/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary plmn_specificBS_C
 * @description
 *
 * HPLMN-defined PLMN-specific bearer service. Specific service. Bit pattern
 * `'11011100'B` (3GPP TS 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * plmn-specificBS-C    BearerServiceCode ::= '11011100'B
 * ```
 * 
 * @constant
 */
export
const plmn_specificBS_C: BearerServiceCode = new Uint8Array([ 0xDC ]);

/* eslint-enable */
