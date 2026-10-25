/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type GenericSSF_SCF_PDUs, _decode_GenericSSF_SCF_PDUs, _encode_GenericSSF_SCF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/GenericSSF-SCF-PDUs.ta.mjs";
// export { GenericSSF_SCF_PDUs, _decode_GenericSSF_SCF_PDUs, _encode_GenericSSF_SCF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/GenericSSF-SCF-PDUs.ta.mjs";
import { id_as_ssf_scfGenericAS } from "../IN-object-identifiers/id-as-ssf-scfGenericAS.va.mjs";
// export { id_as_ssf_scfGenericAS } from "../IN-object-identifiers/id-as-ssf-scfGenericAS.va.mjs";


/**
 * @summary ssf_scfGenericAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scfGenericAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   GenericSSF-SCF-PDUs
 *   IDENTIFIED BY  id-as-ssf-scfGenericAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<GenericSSF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<GenericSSF_SCF_PDUs>}
 */
export
const ssf_scfGenericAbstractSyntax: ABSTRACT_SYNTAX<GenericSSF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_GenericSSF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_GenericSSF_SCF_PDUs,
    },
    "&id": id_as_ssf_scfGenericAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
