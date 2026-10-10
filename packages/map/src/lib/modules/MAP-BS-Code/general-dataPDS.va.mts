/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary general_dataPDS
 * @description
 *
 * General data PDS. Specific service. Bit pattern `'00101111'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * general-dataPDS    BearerServiceCode ::= '00101111'B
 * ```
 * 
 * @constant
 */
export
const general_dataPDS: BearerServiceCode = new Uint8Array([ 0x2F ]);

/* eslint-enable */
