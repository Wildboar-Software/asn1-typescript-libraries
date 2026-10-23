/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { GenericSCF_SSF_PDUs, _decode_GenericSCF_SSF_PDUs, _encode_GenericSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/GenericSCF-SSF-PDUs.ta.mjs";
// export { GenericSCF_SSF_PDUs, _decode_GenericSCF_SSF_PDUs, _encode_GenericSCF_SSF_PDUs } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/GenericSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfGenericAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfGenericAS.va.mjs";
// export { id_as_scf_ssfGenericAS } from "../IN-CS2-object-identifiers/id-as-scf-ssfGenericAS.va.mjs";


/**
 * @summary scf_ssfGenericAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfGenericAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   GenericSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfGenericAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<GenericSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<GenericSCF_SSF_PDUs>}
 */
export
const scf_ssfGenericAbstractSyntax: ABSTRACT_SYNTAX<GenericSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_GenericSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_GenericSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfGenericAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
