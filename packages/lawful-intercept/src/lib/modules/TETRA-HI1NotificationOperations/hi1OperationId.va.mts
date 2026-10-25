/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tETRADomainId } from "../TETRA-HI1NotificationOperations/tETRADomainId.va.mjs";
// export { tETRADomainId } from "../TETRA-HI1NotificationOperations/tETRADomainId.va.mjs";


/**
 * @summary hi1OperationId
 * @description
 *
 * `hi1(1) notificationOperations(1) version0(0)` under `tETRADomainId`.
 * `domainID` in this module is constrained to this value. The common HI1
 * `hi1OperationId` is `version6(6)` under `hi1(0) notificationOperations(1)`,
 * not under `tetra(6)`. The ROSE operation code of
 * `sending-of-HI1-Notification` is a different arc: `version1(1)` directly
 * under `tETRADomainId`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2, clause D.2, clause D.4.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
