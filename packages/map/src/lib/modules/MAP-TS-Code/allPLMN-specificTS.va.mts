/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary allPLMN_specificTS
 * @description
 *
 * All PLMN-specific teleservices. Group code. Bit pattern `'11010000'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allPLMN-specificTS    TeleserviceCode ::= '11010000'B
 * ```
 * 
 * @constant
 */
export
const allPLMN_specificTS: TeleserviceCode = new Uint8Array([ 0xD0 ]);

/* eslint-enable */
