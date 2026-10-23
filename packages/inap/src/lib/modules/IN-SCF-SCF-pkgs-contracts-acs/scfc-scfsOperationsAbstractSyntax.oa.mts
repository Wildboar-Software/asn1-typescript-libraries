/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { BasicSCFc_SCFs_PDUs, _decode_BasicSCFc_SCFs_PDUs, _encode_BasicSCFc_SCFs_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/BasicSCFc-SCFs-PDUs.ta.mjs";
// export { BasicSCFc_SCFs_PDUs, _decode_BasicSCFc_SCFs_PDUs, _encode_BasicSCFc_SCFs_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/BasicSCFc-SCFs-PDUs.ta.mjs";
import { id_as_scfc_scfsOperationsAS } from "../IN-object-identifiers/id-as-scfc-scfsOperationsAS.va.mjs";
// export { id_as_scfc_scfsOperationsAS } from "../IN-object-identifiers/id-as-scfc-scfsOperationsAS.va.mjs";


/**
 * @summary scfc_scfsOperationsAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfc-scfsOperationsAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicSCFc-SCFs-PDUs
 *   IDENTIFIED BY  id-as-scfc-scfsOperationsAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicSCFc_SCFs_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicSCFc_SCFs_PDUs>}
 */
export
const scfc_scfsOperationsAbstractSyntax: ABSTRACT_SYNTAX<BasicSCFc_SCFs_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicSCFc_SCFs_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicSCFc_SCFs_PDUs,
    },
    "&id": id_as_scfc_scfsOperationsAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
