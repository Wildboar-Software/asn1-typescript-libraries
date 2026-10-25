/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_sf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sf OBJECT IDENTIFIER ::= {id sf(11)}
 * ```
 * 
 * @constant
 */
export
const id_sf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sf */ 11,
], id);

/* eslint-enable */
