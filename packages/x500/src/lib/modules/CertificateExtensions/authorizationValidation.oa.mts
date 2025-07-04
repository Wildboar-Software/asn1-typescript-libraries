/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    AvlId,
    _decode_AvlId,
    _encode_AvlId,
} from "../CertificateExtensions/AvlId.ta.mjs";
import { id_ce_authorizationValidation } from "../CertificateExtensions/id-ce-authorizationValidation.va.mjs";
/**
 * @summary authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorizationValidation EXTENSION ::= {
 *   SYNTAX         AvlId
 *   IDENTIFIED BY  id-ce-authorizationValidation }
 * ```
 *
 * @constant
 * @type {EXTENSION<AvlId>}
 * @implements {EXTENSION<AvlId>}
 */
export const authorizationValidation: EXTENSION<AvlId> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AvlId,
    },
    encoderFor: {
        "&ExtnType": _encode_AvlId,
    },
    "&id": id_ce_authorizationValidation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
