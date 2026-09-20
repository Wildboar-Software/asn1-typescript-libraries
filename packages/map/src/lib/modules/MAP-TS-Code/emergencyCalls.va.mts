/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary emergencyCalls
 * @description
 *
 * Emergency calls. Specific service. Bit pattern `'00010010'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emergencyCalls    TeleserviceCode ::= '00010010'B
 * ```
 * 
 * @constant
 */
export
const emergencyCalls: TeleserviceCode = new Uint8Array([ 0x12 ]);

/* eslint-enable */
