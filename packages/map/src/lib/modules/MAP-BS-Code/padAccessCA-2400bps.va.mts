/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary padAccessCA_2400bps
 * @description
 *
 * PAD access CA 2400 bps. Specific service. Bit pattern `'00100100'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * padAccessCA-2400bps    BearerServiceCode ::= '00100100'B
 * ```
 * 
 * @constant
 */
export
const padAccessCA_2400bps: BearerServiceCode = new Uint8Array([ 0x24 ]);

/* eslint-enable */
