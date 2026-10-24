/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_basic_scf_srf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-basic-scf-srf OBJECT IDENTIFIER ::= {id-as basic-scf-srf(15)}
 * ```
 * 
 * @constant
 */
export
const id_as_basic_scf_srf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* basic-scf-srf */ 15,
], id_as);

/* eslint-enable */
