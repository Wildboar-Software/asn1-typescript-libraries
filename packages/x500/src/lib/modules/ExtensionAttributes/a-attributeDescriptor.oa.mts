/* eslint-disable */
import { attributeDescriptor } from "../AttributeCertificateDefinitions/attributeDescriptor.oa.mjs";
import { id_asx_attributeDescriptor } from "../ExtensionAttributes/id-asx-attributeDescriptor.va.mjs";
import { id_ce_a_attributeDescriptor } from "../ExtensionAttributes/id-ce-a-attributeDescriptor.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-attributeDescriptor ATTRIBUTE ::= {
 *   WITH SYNTAX       attributeDescriptor.&ExtnType
 *   LDAP-SYNTAX       id-asx-attributeDescriptor
 *   LDAP-NAME         {"Attribute descriptor"}
 *   ID                id-ce-a-attributeDescriptor}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof attributeDescriptor["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof attributeDescriptor["&ExtnType"]>}
 */
export const a_attributeDescriptor: ATTRIBUTE<
    typeof attributeDescriptor["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": attributeDescriptor.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": attributeDescriptor.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_attributeDescriptor /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_attributeDescriptor /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
