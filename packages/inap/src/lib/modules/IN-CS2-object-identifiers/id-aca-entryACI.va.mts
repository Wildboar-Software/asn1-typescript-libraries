/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_aca } from "../IN-CS2-object-identifiers/id-aca.va.mjs";
// export { id_aca } from "../IN-CS2-object-identifiers/id-aca.va.mjs";


/**
 * @summary id_aca_entryACI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aca-entryACI OBJECT IDENTIFIER ::= {id-aca 5}
 * ```
 * 
 * @constant
 */
export
const id_aca_entryACI: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_aca);

/* eslint-enable */
