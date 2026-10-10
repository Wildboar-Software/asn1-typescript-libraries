/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataCDS_4800bps
 * @description
 *
 * Data CDS 4800 bps. Specific service. Bit pattern `'00011101'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCDS-4800bps    BearerServiceCode ::= '00011101'B
 * ```
 * 
 * @constant
 */
export
const dataCDS_4800bps: BearerServiceCode = new Uint8Array([ 0x1D ]);

/* eslint-enable */
