/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_scf_ssfTrafficManagementAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-scf-ssfTrafficManagementAS OBJECT IDENTIFIER ::= {id-as scf-ssfTrafficManagementAS(9)}
 * ```
 * 
 * @constant
 */
export
const id_as_scf_ssfTrafficManagementAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-ssfTrafficManagementAS */ 9,
], id_as);

/* eslint-enable */
