/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type BasicDAP_PDUs, _decode_BasicDAP_PDUs, _encode_BasicDAP_PDUs } from "../IN-SCF-SDF-Protocol/BasicDAP-PDUs.ta.mjs";
// export { BasicDAP_PDUs, _decode_BasicDAP_PDUs, _encode_BasicDAP_PDUs } from "../IN-SCF-SDF-Protocol/BasicDAP-PDUs.ta.mjs";
import { id_as_indirectoryOperationsAS } from "../IN-object-identifiers/id-as-indirectoryOperationsAS.va.mjs";
// export { id_as_indirectoryOperationsAS } from "../IN-object-identifiers/id-as-indirectoryOperationsAS.va.mjs";


/**
 * @summary inDirectoryOperationsAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inDirectoryOperationsAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   BasicDAP-PDUs
 *   IDENTIFIED BY  id-as-indirectoryOperationsAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BasicDAP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BasicDAP_PDUs>}
 */
export
const inDirectoryOperationsAbstractSyntax: ABSTRACT_SYNTAX<BasicDAP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BasicDAP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BasicDAP_PDUs,
    },
    "&id": id_as_indirectoryOperationsAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
