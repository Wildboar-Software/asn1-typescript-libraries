/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi2DomainId } from "../HI2Operations/hi2DomainId.va.mjs";
// export { hi2DomainId } from "../HI2Operations/hi2DomainId.va.mjs";


/**
 * @summary hi2OperationId
 * @description
 * 
 * Object identifier `{hi2DomainId version18(18)}`. `IRI-Parameters.domainID` is
 * constrained to this value, and the sending entity must include it.
 *
 * The HI2Operations module header in this edition is written
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2) hi2(1) version17(18)}`.
 * Clause D.2 names the accompanying definition `HI2Operations,ver18.txt`. The
 * specification states these identifiers and does not say why the header name
 * is `version17` while the number is 18.
 *
 * Do not use `version11(11)`. The module says it contains a syntax error and is
 * defined only in TS 101 671 v3.5.1.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2OperationId OBJECT IDENTIFIER ::= {hi2DomainId version18(18)}
 * ```
 * 
 * @constant
 */
export
const hi2OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version18 */ 18,
], hi2DomainId);

/* eslint-enable */
