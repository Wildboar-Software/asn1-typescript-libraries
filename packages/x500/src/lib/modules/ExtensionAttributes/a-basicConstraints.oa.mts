/* eslint-disable */
import { basicConstraints } from "../CertificateExtensions/basicConstraints.oa.mjs";
import { id_asx_basicConstraints } from "../ExtensionAttributes/id-asx-basicConstraints.va.mjs";
import { id_ce_a_basicConstraints } from "../ExtensionAttributes/id-ce-a-basicConstraints.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-basicConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       basicConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-basicConstraints
 *   LDAP-NAME         {"Basic Constraints"}
 *   ID                id-ce-a-basicConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof basicConstraints["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof basicConstraints["&ExtnType"]>}
 */
export const a_basicConstraints: ATTRIBUTE<
    typeof basicConstraints["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": basicConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": basicConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_basicConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_basicConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
