/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type BasicTFC_PDUs, _decode_BasicTFC_PDUs, _encode_BasicTFC_PDUs } from "../IN-CS3-SCF-SDF-Protocol/BasicTFC-PDUs.ta.mjs";
// export { BasicTFC_PDUs, _decode_BasicTFC_PDUs, _encode_BasicTFC_PDUs } from "../IN-CS3-SCF-SDF-Protocol/BasicTFC-PDUs.ta.mjs";
import { id_as_tfcOperationsAS } from "../IN-CS3-object-identifiers/id-as-tfcOperationsAS.va.mjs";
// export { id_as_tfcOperationsAS } from "../IN-CS3-object-identifiers/id-as-tfcOperationsAS.va.mjs";


/**
 * @summary tfcAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicTFC-PDUs
 *   IDENTIFIED BY  id-as-tfcOperationsAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicTFC_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicTFC_PDUs>}
 */
export
const tfcAbstractSyntax: ABSTRACT_SYNTAX<BasicTFC_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicTFC_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicTFC_PDUs,
    },
    "&id": id_as_tfcOperationsAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
