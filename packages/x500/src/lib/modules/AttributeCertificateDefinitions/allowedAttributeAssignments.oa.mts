/* eslint-disable */
import {
    AllowedAttributeAssignments,
    _decode_AllowedAttributeAssignments,
    _encode_AllowedAttributeAssignments,
} from "../AttributeCertificateDefinitions/AllowedAttributeAssignments.ta.mjs";
import { id_ce_allowedAttributeAssignments } from "../AttributeCertificateDefinitions/id-ce-allowedAttributeAssignments.va.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
/**
 * @summary allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * allowedAttributeAssignments EXTENSION ::= {
 *   SYNTAX         AllowedAttributeAssignments
 *   IDENTIFIED BY  id-ce-allowedAttributeAssignments }
 * ```
 *
 * @constant
 * @type {EXTENSION<AllowedAttributeAssignments>}
 * @implements {EXTENSION<AllowedAttributeAssignments>}
 */
export const allowedAttributeAssignments: EXTENSION<AllowedAttributeAssignments> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AllowedAttributeAssignments,
    },
    encoderFor: {
        "&ExtnType": _encode_AllowedAttributeAssignments,
    },
    "&id": id_ce_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
