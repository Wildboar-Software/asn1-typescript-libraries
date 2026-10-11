/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi1NotificationOperationsId } from "../HI1NotificationOperations/hi1NotificationOperationsId.va.mjs";
// export { hi1NotificationOperationsId } from "../HI1NotificationOperations/hi1NotificationOperationsId.va.mjs";


/**
 * @summary hi1OperationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi1OperationId OBJECT IDENTIFIER ::= {hi1NotificationOperationsId version6(6)}
 * ```
 * 
 * @constant
 */
export
const hi1OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version6 */ 6,
], hi1NotificationOperationsId);

/* eslint-enable */
