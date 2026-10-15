/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPP_hi1NotificationOperationsId } from "../ThreeGPP-HI1NotificationOperations/threeGPP-hi1NotificationOperationsId.va.mjs";
// export { threeGPP_hi1NotificationOperationsId } from "../ThreeGPP-HI1NotificationOperations/threeGPP-hi1NotificationOperationsId.va.mjs";


/**
 * @summary threeGPP_hi1OperationId
 * @description
 * 
 * Object identifier of this module: `r16(16) version-1(1)` under
 * `hi1(0) notificationOperations(1)`.
 *
 * Annex M (informative) says the HI1 IRI may include the OID. The schema does
 * not state that the domain component of a notification is this value.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * threeGPP-hi1OperationId OBJECT IDENTIFIER ::= {threeGPP-hi1NotificationOperationsId r16 (16) version-1(1)}
 * ```
 * 
 * @constant
 */
export
const threeGPP_hi1OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* r16 */ 16,
    /* version-1 */ 1,
], threeGPP_hi1NotificationOperationsId);

/* eslint-enable */
