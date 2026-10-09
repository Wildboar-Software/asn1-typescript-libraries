/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary padAccessCA_4800bps
 * @description
 *
 * PAD access CA 4800 bps. Specific service. Bit pattern `'00100101'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * padAccessCA-4800bps    BearerServiceCode ::= '00100101'B
 * ```
 * 
 * @constant
 */
export
const padAccessCA_4800bps: BearerServiceCode = new Uint8Array([ 0x25 ]);

/* eslint-enable */
