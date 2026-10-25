/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type DISPBinding_PDUs, _decode_DISPBinding_PDUs, _encode_DISPBinding_PDUs } from "../IN-CS3-SDF-SDF-Protocol/DISPBinding-PDUs.ta.mjs";
// export { DISPBinding_PDUs, _decode_DISPBinding_PDUs, _encode_DISPBinding_PDUs } from "../IN-CS3-SDF-SDF-Protocol/DISPBinding-PDUs.ta.mjs";
import { id_as_indsaShadowBindingAS } from "../IN-CS3-object-identifiers/id-as-indsaShadowBindingAS.va.mjs";
// export { id_as_indsaShadowBindingAS } from "../IN-CS3-object-identifiers/id-as-indsaShadowBindingAS.va.mjs";


/**
 * @summary inDirectoryDSAShadowBindingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inDirectoryDSAShadowBindingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DISPBinding-PDUs
 *   IDENTIFIED BY  id-as-indsaShadowBindingAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DISPBinding_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DISPBinding_PDUs>}
 */
export
const inDirectoryDSAShadowBindingAbstractSyntax: ABSTRACT_SYNTAX<DISPBinding_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DISPBinding_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DISPBinding_PDUs,
    },
    "&id": id_as_indsaShadowBindingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
