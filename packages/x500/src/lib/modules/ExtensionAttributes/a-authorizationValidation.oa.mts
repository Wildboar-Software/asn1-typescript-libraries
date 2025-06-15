/* eslint-disable */
import { authorizationValidation } from "../CertificateExtensions/authorizationValidation.oa.mjs";
import { id_asx_authorizationValidation } from "../ExtensionAttributes/id-asx-authorizationValidation.va.mjs";
import { id_ce_a_authorizationValidation } from "../ExtensionAttributes/id-ce-a-authorizationValidation.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorizationValidation ATTRIBUTE ::= {
 *   WITH SYNTAX       authorizationValidation.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorizationValidation
 *   LDAP-NAME         {"Authorization Validation"}
 *   ID                id-ce-a-authorizationValidation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof authorizationValidation["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof authorizationValidation["&ExtnType"]>}
 */
export const a_authorizationValidation: ATTRIBUTE<
    typeof authorizationValidation["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorizationValidation.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorizationValidation.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorizationValidation /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorizationValidation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
