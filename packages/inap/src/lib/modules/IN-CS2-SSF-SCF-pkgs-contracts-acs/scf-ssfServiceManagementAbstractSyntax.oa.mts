/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type ServiceManagementSCF_SSF_PDUs, _decode_ServiceManagementSCF_SSF_PDUs, _encode_ServiceManagementSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/ServiceManagementSCF-SSF-PDUs.ta.mjs";
// export { ServiceManagementSCF_SSF_PDUs, _decode_ServiceManagementSCF_SSF_PDUs, _encode_ServiceManagementSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/ServiceManagementSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfServiceManagementAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfServiceManagementAS.va.mjs";
// export { id_as_scf_ssfServiceManagementAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfServiceManagementAS.va.mjs";


/**
 * @summary scf_ssfServiceManagementAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfServiceManagementAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   ServiceManagementSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfServiceManagementAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<ServiceManagementSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<ServiceManagementSCF_SSF_PDUs>}
 */
export
const scf_ssfServiceManagementAbstractSyntax: ABSTRACT_SYNTAX<ServiceManagementSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_ServiceManagementSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_ServiceManagementSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfServiceManagementAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
