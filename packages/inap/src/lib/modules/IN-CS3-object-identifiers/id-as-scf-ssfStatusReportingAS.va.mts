/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_scf_ssfStatusReportingAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-scf-ssfStatusReportingAS OBJECT IDENTIFIER ::= {id-as scf-ssfStatusReportingAS(12)}
 * ```
 * 
 * @constant
 */
export
const id_as_scf_ssfStatusReportingAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-ssfStatusReportingAS */ 12,
], id_as);

/* eslint-enable */
