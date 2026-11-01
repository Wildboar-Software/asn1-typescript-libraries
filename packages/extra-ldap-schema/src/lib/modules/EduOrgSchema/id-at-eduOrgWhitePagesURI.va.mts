/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_eduOrg } from "../EduOrgSchema/id-eduOrg.va.mjs";


/**
 * @summary id_at_eduOrgWhitePagesURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-eduOrgWhitePagesURI           OBJECT IDENTIFIER ::= { id-eduOrg 1 6 }
 * ```
 * 
 * @constant
 */
export
const id_at_eduOrgWhitePagesURI: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
    6,
], id_eduOrg);

/* eslint-enable */

