/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { ServiceManagementSSF_SCF_PDUs, _decode_ServiceManagementSSF_SCF_PDUs, _encode_ServiceManagementSSF_SCF_PDUs } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/ServiceManagementSSF-SCF-PDUs.ta.mjs";
// export { ServiceManagementSSF_SCF_PDUs, _decode_ServiceManagementSSF_SCF_PDUs, _encode_ServiceManagementSSF_SCF_PDUs } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/ServiceManagementSSF-SCF-PDUs.ta.mjs";
import { id_as_ssf_scfServiceManagementAS } from "../IN-CS3-object-identifiers/id-as-ssf-scfServiceManagementAS.va.mjs";
// export { id_as_ssf_scfServiceManagementAS } from "../IN-CS3-object-identifiers/id-as-ssf-scfServiceManagementAS.va.mjs";


/**
 * @summary ssf_scfServiceManagementAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scfServiceManagementAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   ServiceManagementSSF-SCF-PDUs
 *   IDENTIFIED BY  id-as-ssf-scfServiceManagementAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<ServiceManagementSSF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<ServiceManagementSSF_SCF_PDUs>}
 */
export
const ssf_scfServiceManagementAbstractSyntax: ABSTRACT_SYNTAX<ServiceManagementSSF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_ServiceManagementSSF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_ServiceManagementSSF_SCF_PDUs,
    },
    "&id": id_as_ssf_scfServiceManagementAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
