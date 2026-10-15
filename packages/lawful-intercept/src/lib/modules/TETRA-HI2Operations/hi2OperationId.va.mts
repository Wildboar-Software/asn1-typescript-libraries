/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tETRADomainId } from "../TETRA-HI2Operations/tETRADomainId.va.mjs";
// export { tETRADomainId } from "../TETRA-HI2Operations/tETRADomainId.va.mjs";


/**
 * @summary hi2OperationId
 * @description
 * 
 * Object identifier of this HI2 module: `{tETRADomainId hi2(2) version3(3)}`.
 * It is the same identifier as the module header. `domainID` in
 * `Tetra-IRI-Parameters` is constrained to this value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2OperationId OBJECT IDENTIFIER ::= {tETRADomainId hi2(2) version3(3)}
 * ```
 * 
 * @constant
 */
export
const hi2OperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2 */ 2,
    /* version3 */ 3,
], tETRADomainId);

/* eslint-enable */
