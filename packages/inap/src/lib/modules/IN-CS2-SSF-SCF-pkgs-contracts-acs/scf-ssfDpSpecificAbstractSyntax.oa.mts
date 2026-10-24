/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type DpSpecificSCF_SSF_PDUs, _decode_DpSpecificSCF_SSF_PDUs, _encode_DpSpecificSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/DpSpecificSCF-SSF-PDUs.ta.mjs";
// export { DpSpecificSCF_SSF_PDUs, _decode_DpSpecificSCF_SSF_PDUs, _encode_DpSpecificSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/DpSpecificSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfDpSpecificAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfDpSpecificAS.va.mjs";
// export { id_as_scf_ssfDpSpecificAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfDpSpecificAS.va.mjs";


/**
 * @summary scf_ssfDpSpecificAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfDpSpecificAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DpSpecificSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfDpSpecificAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DpSpecificSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DpSpecificSCF_SSF_PDUs>}
 */
export
const scf_ssfDpSpecificAbstractSyntax: ABSTRACT_SYNTAX<DpSpecificSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DpSpecificSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DpSpecificSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfDpSpecificAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
