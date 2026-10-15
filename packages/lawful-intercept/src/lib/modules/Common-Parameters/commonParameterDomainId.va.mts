/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary commonParameterDomainId
 * @description
 *
 * Object identifier of this Common-Parameters module,
 * `{itu-t(0) identified-organization(4) etsi(0) common-parameters(3280) version261(261)}`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11) clause 7.2 and annex B publish the
 * same prefix with `version231(231)`. Clause 7.2 increases the ASN.1
 * version only when the ASN.1 changes, so the document version and
 * this arc may differ. Clause 4 defines the document version as
 * `<major>.<minor>.<patch>`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 4, clause 7.2, and annex B.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * commonParameterDomainId OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) common-parameters(3280) version261(261)}
 * ```
 * 
 * @constant
 */
export
const commonParameterDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* common-parameters */ 3280,
    /* version261 */ 261,
]);

/* eslint-enable */
