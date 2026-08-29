/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";

/**
 * @summary keyDerivationMethod
 * @description
 *
 * Arc for KDF OIDs (`{ ansi-X9-42 kdMethods(5) }`). Constrains
 * `SchemeSyntax`. ANS X9.42-2003 §7.7, §A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyDerivationMethod        OBJECT  IDENTIFIER ::= { ansi-X9-42 kdMethods(5) }
 * ```
 *
 * @constant
 */
export const keyDerivationMethod: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* kdMethods */ 5],
    ansi_X9_42
);

/* eslint-enable */
