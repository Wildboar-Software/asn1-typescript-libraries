/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { DSP_PDUs, _decode_DSP_PDUs, _encode_DSP_PDUs } from "../DirectorySystemProtocol/DSP-PDUs.ta.mjs";
// export { DSP_PDUs, _decode_DSP_PDUs, _encode_DSP_PDUs } from "../DirectorySystemProtocol/DSP-PDUs.ta.mjs";
import { id_as_directorySystemAS } from "../ProtocolObjectIdentifiers/id-as-directorySystemAS.va.mjs";
// export { id_as_directorySystemAS } from "../ProtocolObjectIdentifiers/id-as-directorySystemAS.va.mjs";


/**
 * @summary directorySystemAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directorySystemAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DSP-PDUs
 *   IDENTIFIED BY  id-as-directorySystemAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DSP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DSP_PDUs>}
 */
export
const directorySystemAbstractSyntax: ABSTRACT_SYNTAX<DSP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DSP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DSP_PDUs,
    },
    "&id": id_as_directorySystemAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
