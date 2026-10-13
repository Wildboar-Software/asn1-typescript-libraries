/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";
// export { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";


/**
 * @summary xCCPayloadOID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * xCCPayloadOID               RELATIVE-OID ::= {tS33128PayloadsOID xCC(2)}
 * ```
 * 
 * @constant
 */
export
const xCCPayloadOID: RELATIVE_OID = [ ...tS33128PayloadsOID, /* xCC */ 2 ];

/* eslint-enable */
