/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type BasicDSP_PDUs, _decode_BasicDSP_PDUs, _encode_BasicDSP_PDUs } from "../IN-CS2-SDF-SDF-Protocol/BasicDSP-PDUs.ta.mjs";
// export { BasicDSP_PDUs, _decode_BasicDSP_PDUs, _encode_BasicDSP_PDUs } from "../IN-CS2-SDF-SDF-Protocol/BasicDSP-PDUs.ta.mjs";
import { id_as_indirectorySystemAS } from "../IN-CS2-object-identifiers/id-as-indirectorySystemAS.va.mjs";
// export { id_as_indirectorySystemAS } from "../IN-CS2-object-identifiers/id-as-indirectorySystemAS.va.mjs";


/**
 * @summary inDirectorySystemAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inDirectorySystemAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicDSP-PDUs
 *   IDENTIFIED BY  id-as-indirectorySystemAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicDSP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicDSP_PDUs>}
 */
export
const inDirectorySystemAbstractSyntax: ABSTRACT_SYNTAX<BasicDSP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicDSP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicDSP_PDUs,
    },
    "&id": id_as_indirectorySystemAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
