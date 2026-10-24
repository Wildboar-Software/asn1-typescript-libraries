/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type DAPBinding_PDUs, _decode_DAPBinding_PDUs, _encode_DAPBinding_PDUs } from "../IN-CS2-SCF-SDF-Protocol/DAPBinding-PDUs.ta.mjs";
// export { DAPBinding_PDUs, _decode_DAPBinding_PDUs, _encode_DAPBinding_PDUs } from "../IN-CS2-SCF-SDF-Protocol/DAPBinding-PDUs.ta.mjs";
import { id_as_indirectoryBindingAS } from "../IN-CS2-object-identifiers/id-as-indirectoryBindingAS.va.mjs";
// export { id_as_indirectoryBindingAS } from "../IN-CS2-object-identifiers/id-as-indirectoryBindingAS.va.mjs";


/**
 * @summary inDirectoryBindingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inDirectoryBindingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DAPBinding-PDUs
 *   IDENTIFIED BY  id-as-indirectoryBindingAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DAPBinding_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DAPBinding_PDUs>}
 */
export
const inDirectoryBindingAbstractSyntax: ABSTRACT_SYNTAX<DAPBinding_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DAPBinding_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DAPBinding_PDUs,
    },
    "&id": id_as_indirectoryBindingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
