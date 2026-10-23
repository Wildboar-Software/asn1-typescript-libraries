/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { DAPBinding_PDUs, _decode_DAPBinding_PDUs, _encode_DAPBinding_PDUs } from "../INDirectoryAccessProtocol/DAPBinding-PDUs.ta.mjs";
// export { DAPBinding_PDUs, _decode_DAPBinding_PDUs, _encode_DAPBinding_PDUs } from "../INDirectoryAccessProtocol/DAPBinding-PDUs.ta.mjs";
import { id_as_directoryBindingAS } from "../SDFProtocolObjectIdentifiers/id-as-directoryBindingAS.va.mjs";
// export { id_as_directoryBindingAS } from "../SDFProtocolObjectIdentifiers/id-as-directoryBindingAS.va.mjs";


/**
 * @summary inDirectoryBindingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inDirectoryBindingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DAPBinding-PDUs
 *   IDENTIFIED BY  id-as-directoryBindingAS
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
    "&id": id_as_directoryBindingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
