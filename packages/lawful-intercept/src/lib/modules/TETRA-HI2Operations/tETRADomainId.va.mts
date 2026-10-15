/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../TETRA-HI2Operations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../TETRA-HI2Operations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary tETRADomainId
 * @description
 * 
 * Assigned value `{lawfulInterceptDomainId tETRA(6)}`. The comment above the
 * assignment says "hi1 Domain". That comment does not define the arc. The arc
 * that is assigned is `tETRA(6)`. Clause D.2 shows `tetra(6)` with `hi1(1)`,
 * `hi2(2)`, and `hi3(3)` under it.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.10.3.
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
