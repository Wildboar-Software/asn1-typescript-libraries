/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { keyDerivationMethod } from "../ANSI-X9-42/keyDerivationMethod.va.mjs";

/**
 * @summary kdasn1der
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kdasn1der        OBJECT    IDENTIFIER ::= { keyDerivationMethod asn1der(0) }
 * ```
 *
 * @constant
 */
export const kdasn1der: OBJECT_IDENTIFIER = new _OID(
    [/* asn1der */ 0],
    keyDerivationMethod
);

/* eslint-enable */
