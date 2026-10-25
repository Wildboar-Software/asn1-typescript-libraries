/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_scf_ssfDpSpecificAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-scf-ssfDpSpecificAS OBJECT IDENTIFIER ::= {id-as scf-ssfDpSpecificAS(8)}
 * ```
 * 
 * @constant
 */
export
const id_as_scf_ssfDpSpecificAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-ssfDpSpecificAS */ 8,
], id_as);

/* eslint-enable */
