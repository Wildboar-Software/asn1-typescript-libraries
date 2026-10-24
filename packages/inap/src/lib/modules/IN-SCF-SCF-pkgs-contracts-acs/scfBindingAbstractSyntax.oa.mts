/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type SCF_SCFBinding_PDUs, _decode_SCF_SCFBinding_PDUs, _encode_SCF_SCFBinding_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/SCF-SCFBinding-PDUs.ta.mjs";
// export { SCF_SCFBinding_PDUs, _decode_SCF_SCFBinding_PDUs, _encode_SCF_SCFBinding_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/SCF-SCFBinding-PDUs.ta.mjs";
import { id_as_scf_scfBindingAS } from "../IN-object-identifiers/id-as-scf-scfBindingAS.va.mjs";
// export { id_as_scf_scfBindingAS } from "../IN-object-identifiers/id-as-scf-scfBindingAS.va.mjs";


/**
 * @summary scfBindingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfBindingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   SCF-SCFBinding-PDUs
 *   IDENTIFIED BY  id-as-scf-scfBindingAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<SCF_SCFBinding_PDUs>}
 * @implements {ABSTRACT_SYNTAX<SCF_SCFBinding_PDUs>}
 */
export
const scfBindingAbstractSyntax: ABSTRACT_SYNTAX<SCF_SCFBinding_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_SCF_SCFBinding_PDUs,
    },
    encoderFor: {
        "&Type": _encode_SCF_SCFBinding_PDUs,
    },
    "&id": id_as_scf_scfBindingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
