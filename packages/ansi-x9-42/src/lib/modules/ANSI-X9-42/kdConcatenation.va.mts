/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { keyDerivationMethod } from "../ANSI-X9-42/keyDerivationMethod.va.mjs";

/**
 * @summary kdConcatenation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kdConcatenation    OBJECT IDENTIFIER ::= {keyDerivationMethod concatenation(1)}
 * ```
 *
 * @constant
 */
export const kdConcatenation: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* concatenation */ 1],
    keyDerivationMethod
);

/* eslint-enable */
