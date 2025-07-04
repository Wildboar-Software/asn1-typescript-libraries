/* eslint-disable */
import { id_at_certificatePolicy } from "../AuthenticationFramework/id-at-certificatePolicy.va.mjs";
import {
    PolicySyntax,
    _decode_PolicySyntax,
    _encode_PolicySyntax,
} from "../AuthenticationFramework/PolicySyntax.ta.mjs";
import { policyMatch } from "../CertificateExtensions/policyMatch.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary certificatePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePolicy ATTRIBUTE ::= {
 *   WITH SYNTAX             PolicySyntax
 *   EQUALITY MATCHING RULE  policyMatch
 *   ID                      id-at-certificatePolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PolicySyntax>}
 * @implements {ATTRIBUTE<PolicySyntax>}
 */
export const certificatePolicy: ATTRIBUTE<PolicySyntax> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PolicySyntax,
    },
    encoderFor: {
        "&Type": _encode_PolicySyntax,
    },
    "&equality-match": policyMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_certificatePolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
