/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataPDS_4800bps
 * @description
 *
 * Data PDS 4800 bps. Specific service. Bit pattern `'00101101'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataPDS-4800bps    BearerServiceCode ::= '00101101'B
 * ```
 * 
 * @constant
 */
export
const dataPDS_4800bps: BearerServiceCode = new Uint8Array([ 0x2D ]);

/* eslint-enable */
