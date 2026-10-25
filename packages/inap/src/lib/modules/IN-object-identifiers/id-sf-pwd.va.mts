/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_sf } from "../IN-object-identifiers/id-sf.va.mjs";
// export { id_sf } from "../IN-object-identifiers/id-sf.va.mjs";


/**
 * @summary id_sf_pwd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sf-pwd OBJECT IDENTIFIER ::= {id-sf pwd(1)}
 * ```
 * 
 * @constant
 */
export
const id_sf_pwd: OBJECT_IDENTIFIER = _OID.fromParts([
    /* pwd */ 1,
], id_sf);

/* eslint-enable */
