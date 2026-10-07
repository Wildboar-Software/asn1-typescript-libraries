/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary padAccessCA_300bps
 * @description
 *
 * PAD access CA 300 bps. Specific service. Bit pattern `'00100001'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * padAccessCA-300bps    BearerServiceCode ::= '00100001'B
 * ```
 * 
 * @constant
 */
export
const padAccessCA_300bps: BearerServiceCode = new Uint8Array([ 0x21 ]);

/* eslint-enable */
