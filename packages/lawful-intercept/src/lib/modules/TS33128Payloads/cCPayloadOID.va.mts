/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";
// export { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";


/**
 * @summary cCPayloadOID
 * @description
 * 
 * Shall be populated with the value of the cCPayloadOID specified in the
 * version of the ASN.1 used by the MDF3 to generate the CC record.
 *
 * 3GPP TS 33.128, clause 5.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cCPayloadOID                RELATIVE-OID ::= {tS33128PayloadsOID cC(4)}
 * ```
 * 
 * @constant
 */
export
const cCPayloadOID: RELATIVE_OID = [ ...tS33128PayloadsOID, /* cC */ 4 ];

/* eslint-enable */
