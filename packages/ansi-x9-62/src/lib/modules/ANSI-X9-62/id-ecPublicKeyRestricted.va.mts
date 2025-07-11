/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_publicKeyType } from "../ANSI-X9-62/id-publicKeyType.va.mjs";
/**
 * @summary id_ecPublicKeyRestricted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKeyRestricted OBJECT IDENTIFIER ::= {
 * id-publicKeyType restricted(2)
 * }
 * ```
 *
 * @constant
 */
export const id_ecPublicKeyRestricted: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* restricted */ 2],
    id_publicKeyType
);

/* eslint-enable */
