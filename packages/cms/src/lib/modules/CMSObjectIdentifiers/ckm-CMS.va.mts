/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary ckm_CMS
 * @description
 *
 * Constructive Key Management (CKM) OID arc under CMS object identifiers
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 9.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ckm-CMS OID ::= {
 * joint-iso-itu-t(2) international-organizations(23) set(42) vendors(9) griffin(10) business(3) tecsec(0) cms(2) header(2) }
 * ```
 *
 * @constant
 */
export const ckm_CMS: OID = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* international-organizations */ 23,
    /* set */ 42,
    /* vendors */ 9,
    /* griffin */ 10,
    /* business */ 3,
    /* tecsec */ 0,
    /* cms */ 2,
    /* header */ 2,
]);

/* eslint-enable */
