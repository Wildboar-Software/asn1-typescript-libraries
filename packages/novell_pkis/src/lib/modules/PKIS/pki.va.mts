/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { applications } from "../PKIS/applications.va.mjs";


/**
 * @summary pki
 * @description
 *
 * Novell PKI arc, `{ applications 9 }`
 * (`2.16.840.1.113719.1.9`). Attribute types, attribute syntaxes, and
 * object classes are the three arcs defined under it. Appendix F.
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
