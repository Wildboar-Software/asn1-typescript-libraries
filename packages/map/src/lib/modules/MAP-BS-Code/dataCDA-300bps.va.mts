/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataCDA_300bps
 * @description
 *
 * Data CDA 300 bps. Specific service. Bit pattern `'00010001'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCDA-300bps    BearerServiceCode ::= '00010001'B
 * ```
 * 
 * @constant
 */
export
const dataCDA_300bps: BearerServiceCode = new Uint8Array([ 0x11 ]);

/* eslint-enable */
