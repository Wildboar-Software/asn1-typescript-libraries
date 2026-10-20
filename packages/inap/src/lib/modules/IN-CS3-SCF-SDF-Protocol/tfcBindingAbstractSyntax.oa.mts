/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { TFCBinding_PDUs, _decode_TFCBinding_PDUs, _encode_TFCBinding_PDUs } from "../IN-CS3-SCF-SDF-Protocol/TFCBinding-PDUs.ta.mjs";
// export { TFCBinding_PDUs, _decode_TFCBinding_PDUs, _encode_TFCBinding_PDUs } from "../IN-CS3-SCF-SDF-Protocol/TFCBinding-PDUs.ta.mjs";
import { id_as_tfcBindingAS } from "../IN-CS3-object-identifiers/id-as-tfcBindingAS.va.mjs";
// export { id_as_tfcBindingAS } from "../IN-CS3-object-identifiers/id-as-tfcBindingAS.va.mjs";


/**
 * @summary tfcBindingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcBindingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   TFCBinding-PDUs
 *   IDENTIFIED BY  id-as-tfcBindingAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<TFCBinding_PDUs>}
 * @implements {ABSTRACT_SYNTAX<TFCBinding_PDUs>}
 */
export
const tfcBindingAbstractSyntax: ABSTRACT_SYNTAX<TFCBinding_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_TFCBinding_PDUs,
    },
    encoderFor: {
        "&Type": _encode_TFCBinding_PDUs,
    },
    "&id": id_as_tfcBindingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
