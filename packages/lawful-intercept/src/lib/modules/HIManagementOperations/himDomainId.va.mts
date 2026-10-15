/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HIManagementOperations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HIManagementOperations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary himDomainId
 * @description
 *
 * `him(3)` under `lawfulInterceptDomainId`. Clause D.2 points this arc at HI
 * management (clause D.3). Operation codes add a further arc and `version1(1)`.
 * The TETRA management arc is `tetra(6) him(3) version0(0)`, not this value.
 * Clause D.3 applies only to the ROSE delivery mechanism.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.3, clause D.10.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * himDomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId him(3)}
 * ```
 * 
 * @constant
 */
export
const himDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* him */ 3,
], lawfulInterceptDomainId);

/* eslint-enable */
