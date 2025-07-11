/* eslint-disable */
import { id_at_privPolicy } from "../AttributeCertificateDefinitions/id-at-privPolicy.va.mjs";
import {
    PolicySyntax,
    _decode_PolicySyntax,
    _encode_PolicySyntax,
} from "../AuthenticationFramework/PolicySyntax.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary privPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privPolicy ATTRIBUTE ::= {
 *   WITH SYNTAX  PolicySyntax
 *   ID           id-at-privPolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PolicySyntax>}
 * @implements {ATTRIBUTE<PolicySyntax>}
 */
export const privPolicy: ATTRIBUTE<PolicySyntax> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PolicySyntax,
    },
    encoderFor: {
        "&Type": _encode_PolicySyntax,
    },
    "&id": id_at_privPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
