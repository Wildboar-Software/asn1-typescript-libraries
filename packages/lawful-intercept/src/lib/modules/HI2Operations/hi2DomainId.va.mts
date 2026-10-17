/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI2Operations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI2Operations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi2DomainId
 * @description
 * 
 * HI2 arc `{lawfulInterceptDomainId hi2(1)}`. `sending-of-IRI` is coded under
 * this arc as `{hi2DomainId sending-of-IRI(1) version1(1)}`. The operation
 * carries Intercept Related Information from the mediation function to the
 * LEMF.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 8.1, clause C.1.2.1, clause D.2,
 * clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2DomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi2(1)}
 * ```
 * 
 * @constant
 */
export
const hi2DomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2 */ 1,
], lawfulInterceptDomainId);

/* eslint-enable */
