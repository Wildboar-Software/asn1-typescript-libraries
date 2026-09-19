/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary shortMessageMT_PP
 * @description
 *
 * Short message MT-PP. Specific service. Bit pattern `'00100001'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMessageMT-PP    TeleserviceCode ::= '00100001'B
 * ```
 * 
 * @constant
 */
export
const shortMessageMT_PP: TeleserviceCode = new Uint8Array([ 0x21 ]);

/* eslint-enable */
