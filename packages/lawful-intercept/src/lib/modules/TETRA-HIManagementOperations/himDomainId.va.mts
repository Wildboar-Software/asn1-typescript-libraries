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
 * `him(3) version0(0)` under `tETRADomainId`, so the arc is under `tetra(6)`.
 * Clause D.2 shows TETRA separately from the common `him(3)` arc of clause D.3.
 * The common `himDomainId` has no version component; version 3 of that module
 * is `himOperationId`. Operation codes of this module are relative to this
 * value. Clause D.10.1 applies only to ROSE.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.1, clause D.2, clause D.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
