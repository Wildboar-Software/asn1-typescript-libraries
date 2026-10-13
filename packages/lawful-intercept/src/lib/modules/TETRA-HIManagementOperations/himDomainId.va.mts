/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tETRADomainId } from "../TETRA-HIManagementOperations/tETRADomainId.va.mjs";
// export { tETRADomainId } from "../TETRA-HIManagementOperations/tETRADomainId.va.mjs";


/**
 * @summary himDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * himDomainId OBJECT IDENTIFIER ::= {tETRADomainId him(3) version0(0)}
 * ```
 * 
 * @constant
 */
export
const himDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* him */ 3,
    /* version0 */ 0,
], tETRADomainId);

/* eslint-enable */
