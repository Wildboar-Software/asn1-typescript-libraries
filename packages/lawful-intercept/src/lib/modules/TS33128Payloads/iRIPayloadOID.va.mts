/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";
// export { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";


/**
 * @summary iRIPayloadOID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iRIPayloadOID               RELATIVE-OID ::= {tS33128PayloadsOID iRI(3)}
 * ```
 * 
 * @constant
 */
export
const iRIPayloadOID: RELATIVE_OID = [ ...tS33128PayloadsOID, /* iRI */ 3 ];

/* eslint-enable */
