/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";
/**
 * @summary id_ecSigType
 * @description
 *
 * Arc for ECDSA signature-type OIDs. ANSI X9.62-1998 §6.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecSigType OBJECT IDENTIFIER ::= { ansi-X9-62 signatures(4) }
 * ```
 *
 * @constant
 */
export const id_ecSigType: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* signatures */ 4],
    ansi_X9_62
);

/* eslint-enable */
