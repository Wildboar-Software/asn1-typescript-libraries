/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { himDomainId } from "../HIManagementOperations/himDomainId.va.mjs";
// export { himDomainId } from "../HIManagementOperations/himDomainId.va.mjs";


/**
 * @summary himOperationId
 * @description
 *
 * `version3(3)` under `himDomainId`. `domainID` in `Password-Name` is
 * constrained to this value when the FTP delivery mechanism is used. The module
 * object identifier is the same version. Clause D.3 applies to ROSE; this
 * component is the FTP comment on the argument.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * himOperationId OBJECT IDENTIFIER ::= {himDomainId version3(3)}
 * ```
 * 
 * @constant
 */
export
const himOperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version3 */ 3,
], himDomainId);

/* eslint-enable */
