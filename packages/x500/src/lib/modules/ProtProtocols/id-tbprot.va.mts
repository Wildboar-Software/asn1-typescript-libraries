/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_wrprot } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-wrprot.va.mjs";
export { id_wrprot } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-wrprot.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_tbprot */
/**
 * @summary id_tbprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-tbprot           OBJECT IDENTIFIER ::= {id-wrprot 2}
 * ```
 *
 * @constant
 */
export const id_tbprot: OBJECT_IDENTIFIER = new _OID([2], id_wrprot);
/* END_OF_SYMBOL_DEFINITION id_tbprot */

/* eslint-enable */
