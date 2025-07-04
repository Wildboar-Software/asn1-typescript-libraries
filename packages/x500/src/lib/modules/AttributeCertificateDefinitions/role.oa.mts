/* eslint-disable */
import { id_at_role } from "../AttributeCertificateDefinitions/id-at-role.va.mjs";
import {
    RoleSyntax,
    _decode_RoleSyntax,
    _encode_RoleSyntax,
} from "../AttributeCertificateDefinitions/RoleSyntax.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary role
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * role ATTRIBUTE ::= {
 *   WITH SYNTAX  RoleSyntax
 *   ID           id-at-role }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RoleSyntax>}
 * @implements {ATTRIBUTE<RoleSyntax>}
 */
export const role: ATTRIBUTE<RoleSyntax> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_RoleSyntax,
    },
    encoderFor: {
        "&Type": _encode_RoleSyntax,
    },
    "&id": id_at_role /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
