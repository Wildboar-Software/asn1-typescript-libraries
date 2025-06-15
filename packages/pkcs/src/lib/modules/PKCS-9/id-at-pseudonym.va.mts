/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "@wildboar/x500/src/lib/modules/UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_pseudonym
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-pseudonym                    OBJECT IDENTIFIER ::= {id-at 65}
 * ```
 *
 * @constant
 */
export const id_at_pseudonym: OBJECT_IDENTIFIER = new _OID([65], id_at);

/* eslint-enable */
