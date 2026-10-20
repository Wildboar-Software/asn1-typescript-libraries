/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { TriggerManagementSCF_SSF_PDUs, _decode_TriggerManagementSCF_SSF_PDUs, _encode_TriggerManagementSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/TriggerManagementSCF-SSF-PDUs.ta.mjs";
// export { TriggerManagementSCF_SSF_PDUs, _decode_TriggerManagementSCF_SSF_PDUs, _encode_TriggerManagementSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/TriggerManagementSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfTriggerManagementAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfTriggerManagementAS.va.mjs";
// export { id_as_scf_ssfTriggerManagementAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfTriggerManagementAS.va.mjs";


/**
 * @summary scf_ssfTriggerManagementAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfTriggerManagementAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   TriggerManagementSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfTriggerManagementAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<TriggerManagementSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<TriggerManagementSCF_SSF_PDUs>}
 */
export
const scf_ssfTriggerManagementAbstractSyntax: ABSTRACT_SYNTAX<TriggerManagementSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_TriggerManagementSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_TriggerManagementSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfTriggerManagementAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
