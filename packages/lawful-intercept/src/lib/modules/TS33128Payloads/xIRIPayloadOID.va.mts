/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";
// export { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";


/**
 * @summary xIRIPayloadOID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * xIRIPayloadOID              RELATIVE-OID ::= {tS33128PayloadsOID xIRI(1)}
 * ```
 * 
 * @constant
 */
export
const xIRIPayloadOID: RELATIVE_OID = [ ...tS33128PayloadsOID, /* xIRI */ 1 ];

/* eslint-enable */
