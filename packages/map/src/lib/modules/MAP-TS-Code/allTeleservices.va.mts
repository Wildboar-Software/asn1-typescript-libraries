/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary allTeleservices
 * @description
 *
 * All teleservices. Group code. Bit pattern `'00000000'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allTeleservices    TeleserviceCode ::= '00000000'B
 * ```
 * 
 * @constant
 */
export
const allTeleservices: TeleserviceCode = new Uint8Array([ 0x00 ]);

/* eslint-enable */
