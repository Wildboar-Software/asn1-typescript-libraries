/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { algorithm } from "../ANSI-X9-42/algorithm.va.mjs";

/**
 * @summary tripleDES
 * @description
 *
 * TDEA as the algorithm in `OtherInfo.keyInfo`. Parameters are a
 * 4-octet `Counter`. ANS X9.42-2003 §A.5, §7.7.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tripleDES     OBJECT IDENTIFIER ::= { algorithm triple-des(2) }
 * ```
 *
 * @constant
 */
export const tripleDES: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* triple-des */ 2],
    algorithm
);

/* eslint-enable */
