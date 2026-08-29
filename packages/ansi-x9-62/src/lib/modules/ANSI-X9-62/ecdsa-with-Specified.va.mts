/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ecSigType } from "../ANSI-X9-62/id-ecSigType.va.mjs";
/**
 * @summary ecdsa_with_Specified
 * @description
 *
 * ECDSA whose hash is given as `HashAlgorithm` parameters.
 * Not in ANSI X9.62-1998. Parent of the SHA-224/256/384/512
 * signature OIDs.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Specified OBJECT IDENTIFIER ::= {id-ecSigType specified(3)}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Specified: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* specified */ 3],
    id_ecSigType
);

/* eslint-enable */
