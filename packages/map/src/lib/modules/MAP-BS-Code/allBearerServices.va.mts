/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary allBearerServices
 * @description
 *
 * All bearer services. Group code. Bit pattern `'00000000'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allBearerServices    BearerServiceCode ::= '00000000'B
 * ```
 * 
 * @constant
 */
export
const allBearerServices: BearerServiceCode = new Uint8Array([ 0x00 ]);

/* eslint-enable */
