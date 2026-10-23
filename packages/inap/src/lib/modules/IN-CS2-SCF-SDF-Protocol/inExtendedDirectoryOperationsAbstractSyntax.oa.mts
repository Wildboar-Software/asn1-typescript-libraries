/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { Extended_BasicDAP_PDUs, _decode_Extended_BasicDAP_PDUs, _encode_Extended_BasicDAP_PDUs } from "../IN-CS2-SCF-SDF-Protocol/Extended-BasicDAP-PDUs.ta.mjs";
// export { Extended_BasicDAP_PDUs, _decode_Extended_BasicDAP_PDUs, _encode_Extended_BasicDAP_PDUs } from "../IN-CS2-SCF-SDF-Protocol/Extended-BasicDAP-PDUs.ta.mjs";
import { id_as_inExtendedDirectoryOperationsAS } from "../IN-CS2-object-identifiers/id-as-inExtendedDirectoryOperationsAS.va.mjs";
// export { id_as_inExtendedDirectoryOperationsAS } from "../IN-CS2-object-identifiers/id-as-inExtendedDirectoryOperationsAS.va.mjs";


/**
 * @summary inExtendedDirectoryOperationsAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inExtendedDirectoryOperationsAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   Extended-BasicDAP-PDUs
 *   IDENTIFIED BY  id-as-inExtendedDirectoryOperationsAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<Extended_BasicDAP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<Extended_BasicDAP_PDUs>}
 */
export
const inExtendedDirectoryOperationsAbstractSyntax: ABSTRACT_SYNTAX<Extended_BasicDAP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_Extended_BasicDAP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_Extended_BasicDAP_PDUs,
    },
    "&id": id_as_inExtendedDirectoryOperationsAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
