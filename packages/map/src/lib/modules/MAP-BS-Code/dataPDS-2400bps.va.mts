/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary dataPDS_2400bps
 * @description
 *
 * Data PDS 2400 bps. Specific service. Bit pattern `'00101100'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataPDS-2400bps    BearerServiceCode ::= '00101100'B
 * ```
 * 
 * @constant
 */
export
const dataPDS_2400bps: BearerServiceCode = new Uint8Array([ 0x2C ]);

/* eslint-enable */
