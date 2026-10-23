/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { AssistHandoffSSF_SCF_PDUs, _decode_AssistHandoffSSF_SCF_PDUs, _encode_AssistHandoffSSF_SCF_PDUs } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/AssistHandoffSSF-SCF-PDUs.ta.mjs";
// export { AssistHandoffSSF_SCF_PDUs, _decode_AssistHandoffSSF_SCF_PDUs, _encode_AssistHandoffSSF_SCF_PDUs } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/AssistHandoffSSF-SCF-PDUs.ta.mjs";
import { id_as_assistHandoff_ssf_scfAS } from "../IN-CS3-object-identifiers/id-as-assistHandoff-ssf-scfAS.va.mjs";
// export { id_as_assistHandoff_ssf_scfAS } from "../IN-CS3-object-identifiers/id-as-assistHandoff-ssf-scfAS.va.mjs";


/**
 * @summary assistHandoff_ssf_scfAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * assistHandoff-ssf-scfAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   AssistHandoffSSF-SCF-PDUs
 *   IDENTIFIED BY  id-as-assistHandoff-ssf-scfAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<AssistHandoffSSF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<AssistHandoffSSF_SCF_PDUs>}
 */
export
const assistHandoff_ssf_scfAbstractSyntax: ABSTRACT_SYNTAX<AssistHandoffSSF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_AssistHandoffSSF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_AssistHandoffSSF_SCF_PDUs,
    },
    "&id": id_as_assistHandoff_ssf_scfAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
