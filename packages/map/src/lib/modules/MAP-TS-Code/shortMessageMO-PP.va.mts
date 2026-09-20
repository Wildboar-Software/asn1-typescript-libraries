/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary shortMessageMO_PP
 * @description
 *
 * Short message MO-PP. Specific service. Bit pattern `'00100010'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMessageMO-PP    TeleserviceCode ::= '00100010'B
 * ```
 * 
 * @constant
 */
export
const shortMessageMO_PP: TeleserviceCode = new Uint8Array([ 0x22 ]);

/* eslint-enable */
