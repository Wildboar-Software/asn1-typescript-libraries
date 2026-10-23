/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { BasicSCF_SCF_PDUs, _decode_BasicSCF_SCF_PDUs, _encode_BasicSCF_SCF_PDUs } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/BasicSCF-SCF-PDUs.ta.mjs";
// export { BasicSCF_SCF_PDUs, _decode_BasicSCF_SCF_PDUs, _encode_BasicSCF_SCF_PDUs } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/BasicSCF-SCF-PDUs.ta.mjs";
import { id_as_scf_scfOperationsAS } from "../IN-CS2-object-identifiers/id-as-scf-scfOperationsAS.va.mjs";
// export { id_as_scf_scfOperationsAS } from "../IN-CS2-object-identifiers/id-as-scf-scfOperationsAS.va.mjs";


/**
 * @summary scf_scfOperationsAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-scfOperationsAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicSCF-SCF-PDUs
 *   IDENTIFIED BY  id-as-scf-scfOperationsAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicSCF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicSCF_SCF_PDUs>}
 */
export
const scf_scfOperationsAbstractSyntax: ABSTRACT_SYNTAX<BasicSCF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicSCF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicSCF_SCF_PDUs,
    },
    "&id": id_as_scf_scfOperationsAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
