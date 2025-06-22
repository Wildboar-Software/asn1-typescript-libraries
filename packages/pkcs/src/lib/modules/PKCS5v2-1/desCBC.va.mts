/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { oiw } from "../PKCS5v2-1/oiw.va.mjs";

/**
 * @summary desCBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * desCBC OBJECT IDENTIFIER ::= {oiw secsig(3) algorithms(2) 7}
 * ```
 *
 * @constant
 */
export const desCBC: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* secsig */ 3, /* algorithms */ 2, 7],
    oiw
);

/* eslint-enable */
