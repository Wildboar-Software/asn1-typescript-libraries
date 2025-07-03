/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "@wildboar/x500/UsefulDefinitions";


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
export const id_at_pseudonym: OBJECT_IDENTIFIER = _OID.fromParts([65], id_at);

/* eslint-enable */
