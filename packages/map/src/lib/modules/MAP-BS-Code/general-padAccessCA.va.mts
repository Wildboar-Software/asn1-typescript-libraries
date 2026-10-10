/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary general_padAccessCA
 * @description
 *
 * General PAD access CA. Specific service. Bit pattern `'00100111'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * general-padAccessCA    BearerServiceCode ::= '00100111'B
 * ```
 * 
 * @constant
 */
export
const general_padAccessCA: BearerServiceCode = new Uint8Array([ 0x27 ]);

/* eslint-enable */
