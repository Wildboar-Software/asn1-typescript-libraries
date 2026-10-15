/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../TETRA-HIManagementOperations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../TETRA-HIManagementOperations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary tETRADomainId
 * @description
 *
 * `tetra(6)` under `lawfulInterceptDomainId`. TETRA HI management is
 * `him(3) version0(0)` under this arc (clause D.10.1). The common management
 * module is not under `tetra(6)`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.10.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tETRADomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId tETRA(6)}
 * ```
 * 
 * @constant
 */
export
const tETRADomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tETRA */ 6,
], lawfulInterceptDomainId);

/* eslint-enable */
