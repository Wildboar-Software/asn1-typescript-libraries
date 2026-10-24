/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type BASIC_SRF_SCF_PDUs, _decode_BASIC_SRF_SCF_PDUs, _encode_BASIC_SRF_SCF_PDUs } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/BASIC-SRF-SCF-PDUs.ta.mjs";
// export { BASIC_SRF_SCF_PDUs, _decode_BASIC_SRF_SCF_PDUs, _encode_BASIC_SRF_SCF_PDUs } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/BASIC-SRF-SCF-PDUs.ta.mjs";
import { id_as_basic_srf_scf } from "../IN-CS2-object-identifiers/id-as-basic-srf-scf.va.mjs";
// export { id_as_basic_srf_scf } from "../IN-CS2-object-identifiers/id-as-basic-srf-scf.va.mjs";


/**
 * @summary srf_scf_abstract_syntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * srf-scf-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   BASIC-SRF-SCF-PDUs
 *   IDENTIFIED BY  id-as-basic-srf-scf
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BASIC_SRF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BASIC_SRF_SCF_PDUs>}
 */
export
const srf_scf_abstract_syntax: ABSTRACT_SYNTAX<BASIC_SRF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BASIC_SRF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BASIC_SRF_SCF_PDUs,
    },
    "&id": id_as_basic_srf_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
