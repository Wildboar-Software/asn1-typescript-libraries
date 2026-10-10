/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataCDS_2400bps
 * @description
 *
 * Data CDS 2400 bps. Specific service. Bit pattern `'00011100'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCDS-2400bps    BearerServiceCode ::= '00011100'B
 * ```
 * 
 * @constant
 */
export
const dataCDS_2400bps: BearerServiceCode = new Uint8Array([ 0x1C ]);

/* eslint-enable */
