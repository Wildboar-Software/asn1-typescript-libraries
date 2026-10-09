/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary allPLMN_specificBS
 * @description
 *
 * All PLMN-specific bearer services. Group code. Bit pattern `'11010000'B`.
 * Bits of PLMN-specific bearer services are defined by the HPLMN operator
 * (3GPP TS 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allPLMN-specificBS    BearerServiceCode ::= '11010000'B
 * ```
 * 
 * @constant
 */
export
const allPLMN_specificBS: BearerServiceCode = new Uint8Array([ 0xD0 ]);

/* eslint-enable */
