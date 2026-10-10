/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary general_dataCDS
 * @description
 *
 * General data CDS. Specific service. Bit pattern `'00011111'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * general-dataCDS    BearerServiceCode ::= '00011111'B
 * ```
 * 
 * @constant
 */
export
const general_dataCDS: BearerServiceCode = new Uint8Array([ 0x1F ]);

/* eslint-enable */
