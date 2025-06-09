/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import {
    DeltaInformation,
    _decode_DeltaInformation,
    _encode_DeltaInformation,
} from "../CertificateExtensions/DeltaInformation.ta.js";
import { id_ce_deltaInfo } from "../CertificateExtensions/id-ce-deltaInfo.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    DeltaInformation,
    _decode_DeltaInformation,
    _encode_DeltaInformation,
} from "../CertificateExtensions/DeltaInformation.ta.js";
export { id_ce_deltaInfo } from "../CertificateExtensions/id-ce-deltaInfo.va.js";

/* START_OF_SYMBOL_DEFINITION deltaInfo */
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
/* END_OF_SYMBOL_DEFINITION deltaInfo */

/* eslint-enable */
