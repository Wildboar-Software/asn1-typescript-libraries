/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_eduOrg } from "../EduOrgSchema/id-eduOrg.va.mjs";
// export { id_eduOrg } from "../EduOrgSchema/id-eduOrg.va.mjs";


/**
 * @summary id_at_eduOrgLegalName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-eduOrgLegalName               OBJECT IDENTIFIER ::= { id-eduOrg 1 4 }
 * ```
 * 
 * @constant
 */
export
const id_at_eduOrgLegalName: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
    4,
], id_eduOrg);

/* eslint-enable */
