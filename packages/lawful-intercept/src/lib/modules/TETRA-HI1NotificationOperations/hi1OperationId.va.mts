/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tETRADomainId } from "../TETRA-HI1NotificationOperations/tETRADomainId.va.mjs";
// export { tETRADomainId } from "../TETRA-HI1NotificationOperations/tETRADomainId.va.mjs";


/**
 * @summary hi1OperationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi1OperationId OBJECT IDENTIFIER ::= {tETRADomainId hi1(1) notificationOperations(1) version0(0)}
 * ```
 * 
 * @constant
 */
export
const hi1OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi1 */ 1,
    /* notificationOperations */ 1,
    /* version0 */ 0,
], tETRADomainId);

/* eslint-enable */
