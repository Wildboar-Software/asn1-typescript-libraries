/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { BasicDISP_PDUs, _decode_BasicDISP_PDUs, _encode_BasicDISP_PDUs } from "../IN-SDF-SDF-Protocol/BasicDISP-PDUs.ta.mjs";
// export { BasicDISP_PDUs, _decode_BasicDISP_PDUs, _encode_BasicDISP_PDUs } from "../IN-SDF-SDF-Protocol/BasicDISP-PDUs.ta.mjs";
import { id_as_indirectoryShadowAS } from "../IN-object-identifiers/id-as-indirectoryShadowAS.va.mjs";
// export { id_as_indirectoryShadowAS } from "../IN-object-identifiers/id-as-indirectoryShadowAS.va.mjs";


/**
 * @summary inDirectoryShadowAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inDirectoryShadowAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicDISP-PDUs
 *   IDENTIFIED BY  id-as-indirectoryShadowAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicDISP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicDISP_PDUs>}
 */
export
const inDirectoryShadowAbstractSyntax: ABSTRACT_SYNTAX<BasicDISP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicDISP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicDISP_PDUs,
    },
    "&id": id_as_indirectoryShadowAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
