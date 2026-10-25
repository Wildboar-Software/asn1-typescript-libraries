/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type BasicSCFs_SCFc_PDUs, _decode_BasicSCFs_SCFc_PDUs, _encode_BasicSCFs_SCFc_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/BasicSCFs-SCFc-PDUs.ta.mjs";
// export { BasicSCFs_SCFc_PDUs, _decode_BasicSCFs_SCFc_PDUs, _encode_BasicSCFs_SCFc_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/BasicSCFs-SCFc-PDUs.ta.mjs";
import { id_as_scfs_scfcOperationsAS } from "../IN-object-identifiers/id-as-scfs-scfcOperationsAS.va.mjs";
// export { id_as_scfs_scfcOperationsAS } from "../IN-object-identifiers/id-as-scfs-scfcOperationsAS.va.mjs";


/**
 * @summary scfs_scfcOperationsAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfs-scfcOperationsAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicSCFs-SCFc-PDUs
 *   IDENTIFIED BY  id-as-scfs-scfcOperationsAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicSCFs_SCFc_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicSCFs_SCFc_PDUs>}
 */
export
const scfs_scfcOperationsAbstractSyntax: ABSTRACT_SYNTAX<BasicSCFs_SCFc_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicSCFs_SCFc_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicSCFs_SCFc_PDUs,
    },
    "&id": id_as_scfs_scfcOperationsAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
