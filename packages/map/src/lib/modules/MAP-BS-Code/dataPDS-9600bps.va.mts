/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataPDS_9600bps
 * @description
 *
 * Data PDS 9600 bps. Specific service. Bit pattern `'00101110'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataPDS-9600bps    BearerServiceCode ::= '00101110'B
 * ```
 * 
 * @constant
 */
export
const dataPDS_9600bps: BearerServiceCode = new Uint8Array([ 0x2E ]);

/* eslint-enable */
