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
 * Shall be populated with the value of the iRIPayloadOID specified in the
 * version of the ASN.1 used by the MDF2 to generate the IRI record.
 *
 * 3GPP TS 33.128, clause 5.5.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
