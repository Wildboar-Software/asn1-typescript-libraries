/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_securityFacilityId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-securityFacilityId OBJECT IDENTIFIER ::= {id-at securityFacilityId(1)}
 * ```
 * 
 * @constant
 */
export
const id_at_securityFacilityId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* securityFacilityId */ 1,
], id_at);

/* eslint-enable */
