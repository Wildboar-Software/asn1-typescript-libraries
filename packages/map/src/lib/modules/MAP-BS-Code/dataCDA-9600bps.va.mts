/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataCDA_9600bps
 * @description
 *
 * Data CDA 9600 bps. Specific service. Bit pattern `'00010110'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCDA-9600bps    BearerServiceCode ::= '00010110'B
 * ```
 * 
 * @constant
 */
export
const dataCDA_9600bps: BearerServiceCode = new Uint8Array([ 0x16 ]);

/* eslint-enable */
