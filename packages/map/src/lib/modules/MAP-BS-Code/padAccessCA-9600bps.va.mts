/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary padAccessCA_9600bps
 * @description
 *
 * PAD access CA 9600 bps. Specific service. Bit pattern `'00100110'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * padAccessCA-9600bps    BearerServiceCode ::= '00100110'B
 * ```
 * 
 * @constant
 */
export
const padAccessCA_9600bps: BearerServiceCode = new Uint8Array([ 0x26 ]);

/* eslint-enable */
