/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_package } from "../UsefulDefinitions/id-package.va.mjs";
/**
 * @summary id_package_chainedRead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-chainedRead OBJECT IDENTIFIER ::= {id-package 4}
 * ```
 *
 * @constant
 */
export const id_package_chainedRead: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    id_package
);

/* eslint-enable */
