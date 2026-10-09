/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataCDS_1200bps
 * @description
 *
 * Data CDS 1200 bps. Specific service. Bit pattern `'00011010'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCDS-1200bps    BearerServiceCode ::= '00011010'B
 * ```
 * 
 * @constant
 */
export
const dataCDS_1200bps: BearerServiceCode = new Uint8Array([ 0x1A ]);

/* eslint-enable */
