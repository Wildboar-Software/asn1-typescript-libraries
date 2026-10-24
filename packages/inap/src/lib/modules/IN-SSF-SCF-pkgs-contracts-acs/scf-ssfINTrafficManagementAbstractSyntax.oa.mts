/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type INTrafficManagementSCF_SSF_PDUs, _decode_INTrafficManagementSCF_SSF_PDUs, _encode_INTrafficManagementSCF_SSF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/INTrafficManagementSCF-SSF-PDUs.ta.mjs";
// export { INTrafficManagementSCF_SSF_PDUs, _decode_INTrafficManagementSCF_SSF_PDUs, _encode_INTrafficManagementSCF_SSF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/INTrafficManagementSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfINTrafficManagementAS } from "../IN-object-identifiers/id-as-scf-ssfINTrafficManagementAS.va.mjs";
// export { id_as_scf_ssfINTrafficManagementAS } from "../IN-object-identifiers/id-as-scf-ssfINTrafficManagementAS.va.mjs";


/**
 * @summary scf_ssfINTrafficManagementAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfINTrafficManagementAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   INTrafficManagementSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfINTrafficManagementAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<INTrafficManagementSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<INTrafficManagementSCF_SSF_PDUs>}
 */
export
const scf_ssfINTrafficManagementAbstractSyntax: ABSTRACT_SYNTAX<INTrafficManagementSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_INTrafficManagementSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_INTrafficManagementSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfINTrafficManagementAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
