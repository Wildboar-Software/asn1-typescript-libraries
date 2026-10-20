/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { DISP_PDUs, _decode_DISP_PDUs, _encode_DISP_PDUs } from "../DirectoryInformationShadowProtocol/DISP-PDUs.ta.mjs";
// export { DISP_PDUs, _decode_DISP_PDUs, _encode_DISP_PDUs } from "../DirectoryInformationShadowProtocol/DISP-PDUs.ta.mjs";
import { id_as_directoryShadowAS } from "../ProtocolObjectIdentifiers/id-as-directoryShadowAS.va.mjs";
// export { id_as_directoryShadowAS } from "../ProtocolObjectIdentifiers/id-as-directoryShadowAS.va.mjs";


/**
 * @summary directoryShadowAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryShadowAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   DISP-PDUs
 *   IDENTIFIED BY  id-as-directoryShadowAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DISP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DISP_PDUs>}
 */
export
const directoryShadowAbstractSyntax: ABSTRACT_SYNTAX<DISP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DISP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DISP_PDUs,
    },
    "&id": id_as_directoryShadowAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
