/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ecSigType } from "../ANSI-X9-62/id-ecSigType.va.mjs";
/**
 * @summary ecdsa_with_Recommended
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Recommended OBJECT IDENTIFIER ::= {id-ecSigType recommended(2)}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Recommended: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* recommended */ 2],
    id_ecSigType
);

/* eslint-enable */
