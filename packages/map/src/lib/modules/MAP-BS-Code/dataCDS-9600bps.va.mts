/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataCDS_9600bps
 * @description
 *
 * Data CDS 9600 bps. Specific service. Bit pattern `'00011110'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCDS-9600bps    BearerServiceCode ::= '00011110'B
 * ```
 * 
 * @constant
 */
export
const dataCDS_9600bps: BearerServiceCode = new Uint8Array([ 0x1E ]);

/* eslint-enable */
