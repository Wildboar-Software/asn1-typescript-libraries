/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataCDA_4800bps
 * @description
 *
 * Data CDA 4800 bps. Specific service. Bit pattern `'00010101'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCDA-4800bps    BearerServiceCode ::= '00010101'B
 * ```
 * 
 * @constant
 */
export
const dataCDA_4800bps: BearerServiceCode = new Uint8Array([ 0x15 ]);

/* eslint-enable */
