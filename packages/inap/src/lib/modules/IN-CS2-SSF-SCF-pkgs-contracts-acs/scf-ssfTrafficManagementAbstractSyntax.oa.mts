/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { TrafficManagementSCF_SSF_PDUs, _decode_TrafficManagementSCF_SSF_PDUs, _encode_TrafficManagementSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/TrafficManagementSCF-SSF-PDUs.ta.mjs";
// export { TrafficManagementSCF_SSF_PDUs, _decode_TrafficManagementSCF_SSF_PDUs, _encode_TrafficManagementSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/TrafficManagementSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfTrafficManagementAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfTrafficManagementAS.va.mjs";
// export { id_as_scf_ssfTrafficManagementAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfTrafficManagementAS.va.mjs";


/**
 * @summary scf_ssfTrafficManagementAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfTrafficManagementAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   TrafficManagementSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfTrafficManagementAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<TrafficManagementSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<TrafficManagementSCF_SSF_PDUs>}
 */
export
const scf_ssfTrafficManagementAbstractSyntax: ABSTRACT_SYNTAX<TrafficManagementSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_TrafficManagementSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_TrafficManagementSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfTrafficManagementAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
