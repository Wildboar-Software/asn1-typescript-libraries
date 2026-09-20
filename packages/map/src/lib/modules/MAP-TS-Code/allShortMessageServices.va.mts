/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary allShortMessageServices
 * @description
 *
 * All short message services. Group code. Bit pattern `'00100000'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allShortMessageServices    TeleserviceCode ::= '00100000'B
 * ```
 * 
 * @constant
 */
export
const allShortMessageServices: TeleserviceCode = new Uint8Array([ 0x20 ]);

/* eslint-enable */
