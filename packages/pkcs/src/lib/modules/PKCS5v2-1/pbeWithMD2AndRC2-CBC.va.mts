/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary pbeWithMD2AndRC2_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithMD2AndRC2-CBC OBJECT IDENTIFIER ::= {pkcs-5 4}
 * ```
 *
 * @constant
 */
export const pbeWithMD2AndRC2_CBC: OBJECT_IDENTIFIER = _OID.fromParts([4], pkcs_5);

/* eslint-enable */
