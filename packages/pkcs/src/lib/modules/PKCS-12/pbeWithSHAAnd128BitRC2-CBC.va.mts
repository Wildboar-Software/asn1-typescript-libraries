/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va.mjs";

/**
 * @summary pbeWithSHAAnd128BitRC2_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHAAnd128BitRC2-CBC      OBJECT IDENTIFIER ::= {pkcs-12PbeIds 5}
 * ```
 *
 * @constant
 */
export const pbeWithSHAAnd128BitRC2_CBC: OBJECT_IDENTIFIER = _OID.fromParts(
    [5],
    pkcs_12PbeIds
);

/* eslint-enable */
