/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary plmn_specificTS_C
 * @description
 *
 * HPLMN-defined PLMN-specific teleservice. Specific service. Bit pattern
 * `'11011100'B` (3GPP TS 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * plmn-specificTS-C    TeleserviceCode ::= '11011100'B
 * ```
 * 
 * @constant
 */
export
const plmn_specificTS_C: TeleserviceCode = new Uint8Array([ 0xDC ]);

/* eslint-enable */
