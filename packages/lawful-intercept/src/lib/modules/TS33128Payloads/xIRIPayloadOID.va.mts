/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";
import { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";
// export { tS33128PayloadsOID } from "../TS33128Payloads/tS33128PayloadsOID.va.mjs";


/**
 * @summary xIRIPayloadOID
 * @description
 * 
 * Shall be populated with the value of the xIRIPayloadOID specified in the
 * version of the ASN.1 used by the IRI-POI to generate the xIRI record.
 *
 * 3GPP TS 33.128, clause 5.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
