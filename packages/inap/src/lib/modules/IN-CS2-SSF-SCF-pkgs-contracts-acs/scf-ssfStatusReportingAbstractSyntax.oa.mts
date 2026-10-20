/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { StatusReportingSCF_SSF_PDUs, _decode_StatusReportingSCF_SSF_PDUs, _encode_StatusReportingSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/StatusReportingSCF-SSF-PDUs.ta.mjs";
// export { StatusReportingSCF_SSF_PDUs, _decode_StatusReportingSCF_SSF_PDUs, _encode_StatusReportingSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/StatusReportingSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfStatusReportingAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfStatusReportingAS.va.mjs";
// export { id_as_scf_ssfStatusReportingAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfStatusReportingAS.va.mjs";


/**
 * @summary scf_ssfStatusReportingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfStatusReportingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   StatusReportingSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfStatusReportingAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<StatusReportingSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<StatusReportingSCF_SSF_PDUs>}
 */
export
const scf_ssfStatusReportingAbstractSyntax: ABSTRACT_SYNTAX<StatusReportingSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_StatusReportingSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_StatusReportingSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfStatusReportingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
