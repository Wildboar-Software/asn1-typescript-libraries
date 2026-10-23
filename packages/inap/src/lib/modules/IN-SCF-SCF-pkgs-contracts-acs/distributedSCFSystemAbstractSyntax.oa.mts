/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { BasicDSSP_PDUs, _decode_BasicDSSP_PDUs, _encode_BasicDSSP_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/BasicDSSP-PDUs.ta.mjs";
// export { BasicDSSP_PDUs, _decode_BasicDSSP_PDUs, _encode_BasicDSSP_PDUs } from "../IN-SCF-SCF-pkgs-contracts-acs/BasicDSSP-PDUs.ta.mjs";
import { id_as_distributedSCFSystemAS } from "../IN-object-identifiers/id-as-distributedSCFSystemAS.va.mjs";
// export { id_as_distributedSCFSystemAS } from "../IN-object-identifiers/id-as-distributedSCFSystemAS.va.mjs";


/**
 * @summary distributedSCFSystemAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * distributedSCFSystemAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicDSSP-PDUs
 *   IDENTIFIED BY  id-as-distributedSCFSystemAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicDSSP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicDSSP_PDUs>}
 */
export
const distributedSCFSystemAbstractSyntax: ABSTRACT_SYNTAX<BasicDSSP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicDSSP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicDSSP_PDUs,
    },
    "&id": id_as_distributedSCFSystemAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
