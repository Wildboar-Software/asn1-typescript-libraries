/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary general_dataCDA
 * @description
 *
 * General data CDA. Specific service. Bit pattern `'00010111'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * general-dataCDA    BearerServiceCode ::= '00010111'B
 * ```
 * 
 * @constant
 */
export
const general_dataCDA: BearerServiceCode = new Uint8Array([ 0x17 ]);

/* eslint-enable */
