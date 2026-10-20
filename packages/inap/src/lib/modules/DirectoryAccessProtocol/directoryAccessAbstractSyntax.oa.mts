/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { DAP_PDUs, _decode_DAP_PDUs, _encode_DAP_PDUs } from "../DirectoryAccessProtocol/DAP-PDUs.ta.mjs";
// export { DAP_PDUs, _decode_DAP_PDUs, _encode_DAP_PDUs } from "../DirectoryAccessProtocol/DAP-PDUs.ta.mjs";
import { id_as_directoryAccessAS } from "../ProtocolObjectIdentifiers/id-as-directoryAccessAS.va.mjs";
// export { id_as_directoryAccessAS } from "../ProtocolObjectIdentifiers/id-as-directoryAccessAS.va.mjs";


/**
 * @summary directoryAccessAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryAccessAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DAP-PDUs
 *   IDENTIFIED BY  id-as-directoryAccessAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DAP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DAP_PDUs>}
 */
export
const directoryAccessAbstractSyntax: ABSTRACT_SYNTAX<DAP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DAP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DAP_PDUs,
    },
    "&id": id_as_directoryAccessAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
