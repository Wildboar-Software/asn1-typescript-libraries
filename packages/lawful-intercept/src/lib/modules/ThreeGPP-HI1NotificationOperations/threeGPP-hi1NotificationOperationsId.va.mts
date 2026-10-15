/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../ThreeGPP-HI1NotificationOperations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../ThreeGPP-HI1NotificationOperations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary threeGPP_hi1NotificationOperationsId
 * @description
 * 
 * HI1 notification-operations arc: `hi1(0) notificationOperations(1)` under the
 * 3GPP LI subdomain.
 *
 * Parent of the release and version arcs. The informative annex says the HI1
 * IRI may include the OID; it does not say this incomplete arc is the value
 * carried. 3GPP TS 33.108, annex M (informative).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * threeGPP-hi1NotificationOperationsId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi1(0) notificationOperations(1)}
 * ```
 * 
 * @constant
 */
export
const threeGPP_hi1NotificationOperationsId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi1 */ 0,
    /* notificationOperations */ 1,
], threeGPPSUBDomainId);

/* eslint-enable */
