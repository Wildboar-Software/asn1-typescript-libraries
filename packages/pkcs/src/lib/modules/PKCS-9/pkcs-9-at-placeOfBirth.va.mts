/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ietf_at } from "../PKCS-9/ietf-at.va.mjs";

/**
 * @summary pkcs_9_at_placeOfBirth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-placeOfBirth             OBJECT IDENTIFIER ::= {ietf-at 2}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_placeOfBirth: OBJECT_IDENTIFIER = _OID.fromParts([2], ietf_at);

/* eslint-enable */
