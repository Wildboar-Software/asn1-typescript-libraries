/* eslint-disable */
import {
    AllowedAttributeAssignments,
    _decode_AllowedAttributeAssignments,
    _encode_AllowedAttributeAssignments,
} from "../AttributeCertificateDefinitions/AllowedAttributeAssignments.ta.js";
import { id_ce_allowedAttributeAssignments } from "../AttributeCertificateDefinitions/id-ce-allowedAttributeAssignments.va.js";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    AllowedAttributeAssignments,
    _decode_AllowedAttributeAssignments,
    _encode_AllowedAttributeAssignments,
} from "../AttributeCertificateDefinitions/AllowedAttributeAssignments.ta.js";
export { id_ce_allowedAttributeAssignments } from "../AttributeCertificateDefinitions/id-ce-allowedAttributeAssignments.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";

/* START_OF_SYMBOL_DEFINITION allowedAttributeAssignments */
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
/* END_OF_SYMBOL_DEFINITION allowedAttributeAssignments */

/* eslint-enable */
