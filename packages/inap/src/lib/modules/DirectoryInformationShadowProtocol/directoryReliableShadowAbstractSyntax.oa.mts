/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { Reliable_DISP_PDUs, _decode_Reliable_DISP_PDUs, _encode_Reliable_DISP_PDUs } from "../DirectoryInformationShadowProtocol/Reliable-DISP-PDUs.ta.mjs";
// export { Reliable_DISP_PDUs, _decode_Reliable_DISP_PDUs, _encode_Reliable_DISP_PDUs } from "../DirectoryInformationShadowProtocol/Reliable-DISP-PDUs.ta.mjs";
import { id_as_directoryReliableShadowAS } from "../ProtocolObjectIdentifiers/id-as-directoryReliableShadowAS.va.mjs";
// export { id_as_directoryReliableShadowAS } from "../ProtocolObjectIdentifiers/id-as-directoryReliableShadowAS.va.mjs";


/**
 * @summary directoryReliableShadowAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryReliableShadowAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   Reliable-DISP-PDUs
 *   IDENTIFIED BY  id-as-directoryReliableShadowAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<Reliable_DISP_PDUs>}
 * @implements {ABSTRACT_SYNTAX<Reliable_DISP_PDUs>}
 */
export
const directoryReliableShadowAbstractSyntax: ABSTRACT_SYNTAX<Reliable_DISP_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_Reliable_DISP_PDUs,
    },
    encoderFor: {
        "&Type": _encode_Reliable_DISP_PDUs,
    },
    "&id": id_as_directoryReliableShadowAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
