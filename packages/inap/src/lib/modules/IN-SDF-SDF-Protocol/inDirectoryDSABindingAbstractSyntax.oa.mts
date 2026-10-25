/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type DSABinding_PDUs, _decode_DSABinding_PDUs, _encode_DSABinding_PDUs } from "../IN-SDF-SDF-Protocol/DSABinding-PDUs.ta.mjs";
// export { DSABinding_PDUs, _decode_DSABinding_PDUs, _encode_DSABinding_PDUs } from "../IN-SDF-SDF-Protocol/DSABinding-PDUs.ta.mjs";
import { id_as_indirectoryDSABindingAS } from "../IN-object-identifiers/id-as-indirectoryDSABindingAS.va.mjs";
// export { id_as_indirectoryDSABindingAS } from "../IN-object-identifiers/id-as-indirectoryDSABindingAS.va.mjs";


/**
 * @summary inDirectoryDSABindingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inDirectoryDSABindingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DSABinding-PDUs
 *   IDENTIFIED BY  id-as-indirectoryDSABindingAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DSABinding_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DSABinding_PDUs>}
 */
export
const inDirectoryDSABindingAbstractSyntax: ABSTRACT_SYNTAX<DSABinding_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DSABinding_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DSABinding_PDUs,
    },
    "&id": id_as_indirectoryDSABindingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
