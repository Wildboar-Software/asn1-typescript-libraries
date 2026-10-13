/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI1NotificationOperations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI1NotificationOperations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi1NotificationOperationsId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi1NotificationOperationsId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi1(0) notificationOperations(1)}
 * ```
 * 
 * @constant
 */
export
const hi1NotificationOperationsId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi1 */ 0,
    /* notificationOperations */ 1,
], lawfulInterceptDomainId);

/* eslint-enable */
