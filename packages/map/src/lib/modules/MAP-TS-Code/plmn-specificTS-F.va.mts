/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary plmn_specificTS_F
 * @description
 *
 * HPLMN-defined PLMN-specific teleservice. Specific service. Bit pattern
 * `'11011111'B` (3GPP TS 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * plmn-specificTS-F    TeleserviceCode ::= '11011111'B
 * ```
 * 
 * @constant
 */
export
const plmn_specificTS_F: TeleserviceCode = new Uint8Array([ 0xDF ]);

/* eslint-enable */
