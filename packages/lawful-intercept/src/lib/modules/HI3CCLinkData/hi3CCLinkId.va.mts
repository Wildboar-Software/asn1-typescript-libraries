/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI3CCLinkData/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI3CCLinkData/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi3CCLinkId
 * @description
 *
 * CC-link UUS1 arc: `hi3(2) ccLinkLI(4)` under `lawfulInterceptDomainId`.
 * Clause D.2 points this arc at clause D.8, the UUS1 content associated with
 * the circuit-switched CC link. The module object identifier spells the same
 * arc `cclinkLI(4)`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.8.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CCLinkId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi3(2) ccLinkLI(4)}
 * ```
 * 
 * @constant
 */
export
const hi3CCLinkId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3 */ 2,
    /* ccLinkLI */ 4,
], lawfulInterceptDomainId);

/* eslint-enable */
