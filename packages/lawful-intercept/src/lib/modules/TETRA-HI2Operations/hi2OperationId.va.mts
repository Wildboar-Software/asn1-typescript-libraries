/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tETRADomainId } from "../TETRA-HI2Operations/tETRADomainId.va.mjs";
// export { tETRADomainId } from "../TETRA-HI2Operations/tETRADomainId.va.mjs";


/**
 * @summary hi2OperationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2OperationId OBJECT IDENTIFIER ::= {tETRADomainId hi2(2) version3(3)}
 * ```
 * 
 * @constant
 */
export
const hi2OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2 */ 2,
    /* version3 */ 3,
], tETRADomainId);

/* eslint-enable */
