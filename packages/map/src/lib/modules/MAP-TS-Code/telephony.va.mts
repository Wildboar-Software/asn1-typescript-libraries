/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary telephony
 * @description
 *
 * Telephony. Specific service. Bit pattern `'00010001'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * telephony    TeleserviceCode ::= '00010001'B
 * ```
 * 
 * @constant
 */
export
const telephony: TeleserviceCode = new Uint8Array([ 0x11 ]);

/* eslint-enable */
