/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { keyDerivationMethod } from "../ANSI-X9-42/keyDerivationMethod.va.mjs";

/**
 * @summary kdConcatenation
 * @description
 *
 * Concatenation KDF: `h_i = H(ZZ || Counter || [OtherInfo])` with a
 * 32-bit counter starting at `00000001` hex. `OtherInfo` here is an
 * optional untyped bit string (not the ASN.1 `OtherInfo` type) used
 * e.g. to delimit key purpose. ANS X9.42-2003 §7.7.2.
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
