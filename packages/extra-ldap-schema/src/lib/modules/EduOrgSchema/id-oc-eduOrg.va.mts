/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_eduOrg } from "../EduOrgSchema/id-eduOrg.va.mjs";
// export { id_eduOrg } from "../EduOrgSchema/id-eduOrg.va.mjs";


/**
 * @summary id_oc_eduOrg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-eduOrg                        OBJECT IDENTIFIER ::= { id-eduOrg 2 }
 * ```
 * 
 * @constant
 */
export
const id_oc_eduOrg: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_eduOrg);

/* eslint-enable */
