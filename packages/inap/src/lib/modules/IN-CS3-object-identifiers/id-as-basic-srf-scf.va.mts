/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_basic_srf_scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-basic-srf-scf OBJECT IDENTIFIER ::= {id-as basic-srf-scf(14)}
 * ```
 * 
 * @constant
 */
export
const id_as_basic_srf_scf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* basic-srf-scf */ 14,
], id_as);

/* eslint-enable */
