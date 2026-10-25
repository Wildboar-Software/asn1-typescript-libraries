/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type BASIC_CUSF_SCF_PDUs, _decode_BASIC_CUSF_SCF_PDUs, _encode_BASIC_CUSF_SCF_PDUs } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/BASIC-CUSF-SCF-PDUs.ta.mjs";
// export { BASIC_CUSF_SCF_PDUs, _decode_BASIC_CUSF_SCF_PDUs, _encode_BASIC_CUSF_SCF_PDUs } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/BASIC-CUSF-SCF-PDUs.ta.mjs";
import { id_as_basic_cusf_scf } from "../IN-CS2-object-identifiers/id-as-basic-cusf-scf.va.mjs";
// export { id_as_basic_cusf_scf } from "../IN-CS2-object-identifiers/id-as-basic-cusf-scf.va.mjs";


/**
 * @summary cusf_scf_abstract_syntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusf-scf-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   BASIC-CUSF-SCF-PDUs
 *   IDENTIFIED BY  id-as-basic-cusf-scf
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BASIC_CUSF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BASIC_CUSF_SCF_PDUs>}
 */
export
const cusf_scf_abstract_syntax: ABSTRACT_SYNTAX<BASIC_CUSF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BASIC_CUSF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BASIC_CUSF_SCF_PDUs,
    },
    "&id": id_as_basic_cusf_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
