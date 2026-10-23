/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_aca
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aca OBJECT IDENTIFIER ::= {id aca(24)}
 * ```
 * 
 * @constant
 */
export
const id_aca: OBJECT_IDENTIFIER = _OID.fromParts([
    /* aca */ 24,
], id);

/* eslint-enable */
