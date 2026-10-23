/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { DpSpecificSSF_SCF_PDUs, _decode_DpSpecificSSF_SCF_PDUs, _encode_DpSpecificSSF_SCF_PDUs } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/DpSpecificSSF-SCF-PDUs.ta.mjs";
// export { DpSpecificSSF_SCF_PDUs, _decode_DpSpecificSSF_SCF_PDUs, _encode_DpSpecificSSF_SCF_PDUs } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/DpSpecificSSF-SCF-PDUs.ta.mjs";
import { id_as_ssf_scfDpSpecificAS } from "../IN-CS3-object-identifiers/id-as-ssf-scfDpSpecificAS.va.mjs";
// export { id_as_ssf_scfDpSpecificAS } from "../IN-CS3-object-identifiers/id-as-ssf-scfDpSpecificAS.va.mjs";


/**
 * @summary ssf_scfDpSpecificAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scfDpSpecificAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DpSpecificSSF-SCF-PDUs
 *   IDENTIFIED BY  id-as-ssf-scfDpSpecificAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DpSpecificSSF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DpSpecificSSF_SCF_PDUs>}
 */
export
const ssf_scfDpSpecificAbstractSyntax: ABSTRACT_SYNTAX<DpSpecificSSF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DpSpecificSSF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DpSpecificSSF_SCF_PDUs,
    },
    "&id": id_as_ssf_scfDpSpecificAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
