/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";
/**
 * @summary id_publicKeyType
 * @description
 *
 * Arc for public-key type OIDs. ANSI X9.62-1998 §6.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-publicKeyType OBJECT IDENTIFIER ::= { ansi-X9-62 keyType(2) }
 * ```
 *
 * @constant
 */
export const id_publicKeyType: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* keyType */ 2],
    ansi_X9_62
);

/* eslint-enable */
