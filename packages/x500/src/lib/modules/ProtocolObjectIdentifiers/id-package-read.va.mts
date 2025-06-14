/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_package } from "../UsefulDefinitions/id-package.va.mjs";
/**
 * @summary id_package_read
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-read OBJECT IDENTIFIER ::= {id-package 1}
 * ```
 *
 * @constant
 */
export const id_package_read: OBJECT_IDENTIFIER = new _OID([1], id_package);

/* eslint-enable */
