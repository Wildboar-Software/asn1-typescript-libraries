/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    DeltaInformation,
    _decode_DeltaInformation,
    _encode_DeltaInformation,
} from "../CertificateExtensions/DeltaInformation.ta.mjs";
import { id_ce_deltaInfo } from "../CertificateExtensions/id-ce-deltaInfo.va.mjs";
/**
 * @summary deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaInfo EXTENSION ::= {
 *   SYNTAX         DeltaInformation
 *   IDENTIFIED BY  id-ce-deltaInfo }
 * ```
 *
 * @constant
 * @type {EXTENSION<DeltaInformation>}
 * @implements {EXTENSION<DeltaInformation>}
 */
export const deltaInfo: EXTENSION<DeltaInformation> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_DeltaInformation,
    },
    encoderFor: {
        "&ExtnType": _encode_DeltaInformation,
    },
    "&id": id_ce_deltaInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
