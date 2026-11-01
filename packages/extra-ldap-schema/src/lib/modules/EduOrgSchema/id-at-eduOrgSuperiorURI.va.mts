/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_eduOrg } from "../EduOrgSchema/id-eduOrg.va.mjs";
// export { id_eduOrg } from "../EduOrgSchema/id-eduOrg.va.mjs";


/**
 * @summary id_at_eduOrgSuperiorURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-eduOrgSuperiorURI             OBJECT IDENTIFIER ::= { id-eduOrg 1 5 }
 * ```
 * 
 * @constant
 */
export
const id_at_eduOrgSuperiorURI: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
    5,
], id_eduOrg);

/* eslint-enable */
