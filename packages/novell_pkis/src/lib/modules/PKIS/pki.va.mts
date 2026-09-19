/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { applications } from "../PKIS/applications.va.mjs";
// export { applications } from "../PKIS/applications.va.mjs";


/**
 * @summary pki
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pki OBJECT IDENTIFIER ::= {applications pki(9) }
 * ```
 * 
 * @constant
 */
export
const pki: OBJECT_IDENTIFIER = _OID.fromParts([
    /* pki */ 9,
], applications);

/* eslint-enable */
