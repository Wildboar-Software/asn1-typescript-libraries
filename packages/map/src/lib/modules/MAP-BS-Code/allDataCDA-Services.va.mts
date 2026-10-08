/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary allDataCDA_Services
 * @description
 *
 * All data CDA services. Group code. Bit pattern `'00010000'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allDataCDA-Services    BearerServiceCode ::= '00010000'B
 * ```
 * 
 * @constant
 */
export
const allDataCDA_Services: BearerServiceCode = new Uint8Array([ 0x10 ]);

/* eslint-enable */
