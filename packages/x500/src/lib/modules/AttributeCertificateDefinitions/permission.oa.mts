/* eslint-disable */
import { dualStringMatch } from "../AttributeCertificateDefinitions/dualStringMatch.oa.mjs";
import {
    DualStringSyntax,
    _decode_DualStringSyntax,
    _encode_DualStringSyntax,
} from "../AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import { id_at_permission } from "../AttributeCertificateDefinitions/id-at-permission.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION permission */
/**
 * @summary permission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * permission ATTRIBUTE ::= {
 *   WITH SYNTAX             DualStringSyntax
 *   EQUALITY MATCHING RULE  dualStringMatch
 *   ID                      id-at-permission }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DualStringSyntax>}
 * @implements {ATTRIBUTE<DualStringSyntax>}
 */
export const permission: ATTRIBUTE<DualStringSyntax> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DualStringSyntax,
    },
    encoderFor: {
        "&Type": _encode_DualStringSyntax,
    },
    "&equality-match": dualStringMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_permission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION permission */

/* eslint-enable */
