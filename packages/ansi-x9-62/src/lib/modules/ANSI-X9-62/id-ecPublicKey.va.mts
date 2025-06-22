/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_publicKeyType } from "../ANSI-X9-62/id-publicKeyType.va.mjs";
/**
 * @summary id_ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= {
 * id-publicKeyType unrestricted(1)
 * }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* unrestricted */ 1],
    id_publicKeyType
);

/* eslint-enable */
