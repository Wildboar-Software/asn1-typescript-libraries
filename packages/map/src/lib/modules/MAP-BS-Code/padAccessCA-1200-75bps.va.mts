/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary padAccessCA_1200_75bps
 * @description
 *
 * PAD access CA 1200-75 bps. Specific service. Bit pattern `'00100011'B` (3GPP
 * TS 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * padAccessCA-1200-75bps    BearerServiceCode ::= '00100011'B
 * ```
 * 
 * @constant
 */
export
const padAccessCA_1200_75bps: BearerServiceCode = new Uint8Array([ 0x23 ]);

/* eslint-enable */
