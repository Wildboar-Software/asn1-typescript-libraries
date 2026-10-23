/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { BASIC_SCF_CUSF_PDUs, _decode_BASIC_SCF_CUSF_PDUs, _encode_BASIC_SCF_CUSF_PDUs } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/BASIC-SCF-CUSF-PDUs.ta.mjs";
// export { BASIC_SCF_CUSF_PDUs, _decode_BASIC_SCF_CUSF_PDUs, _encode_BASIC_SCF_CUSF_PDUs } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/BASIC-SCF-CUSF-PDUs.ta.mjs";
import { id_as_basic_scf_cusf } from "../IN-CS2-object-identifiers/id-as-basic-scf-cusf.va.mjs";
// export { id_as_basic_scf_cusf } from "../IN-CS2-object-identifiers/id-as-basic-scf-cusf.va.mjs";


/**
 * @summary scf_cusf_abstract_syntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-cusf-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   BASIC-SCF-CUSF-PDUs
 *   IDENTIFIED BY  id-as-basic-scf-cusf
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BASIC_SCF_CUSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BASIC_SCF_CUSF_PDUs>}
 */
export
const scf_cusf_abstract_syntax: ABSTRACT_SYNTAX<BASIC_SCF_CUSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BASIC_SCF_CUSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BASIC_SCF_CUSF_PDUs,
    },
    "&id": id_as_basic_scf_cusf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
