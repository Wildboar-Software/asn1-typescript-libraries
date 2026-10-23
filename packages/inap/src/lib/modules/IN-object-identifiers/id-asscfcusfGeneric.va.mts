/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_asscfcusfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-asscfcusfGeneric OBJECT IDENTIFIER ::= {id-as scf-cusf-Generic(28)}
 * ```
 * 
 * @constant
 */
export
const id_asscfcusfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-Generic */ 28,
], id_as);

/* eslint-enable */
