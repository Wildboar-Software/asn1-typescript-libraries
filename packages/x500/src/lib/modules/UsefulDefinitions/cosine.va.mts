/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/**
 * @summary cosine
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cosine              ID ::= {itu-t(0) data(9) pss(2342) ucl(19200300) pilot(100)}
 * ```
 *
 * @constant
 */
export const cosine: ID = _OID.fromParts([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
]);

/* eslint-enable */
