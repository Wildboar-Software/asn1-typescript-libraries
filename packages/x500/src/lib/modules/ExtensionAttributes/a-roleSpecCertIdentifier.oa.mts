/* eslint-disable */
import { roleSpecCertIdentifier } from "../AttributeCertificateDefinitions/roleSpecCertIdentifier.oa.mjs";
import { id_asx_roleSpecCertIdentifier } from "../ExtensionAttributes/id-asx-roleSpecCertIdentifier.va.mjs";
import { id_ce_a_roleSpecCertIdentifier } from "../ExtensionAttributes/id-ce-a-roleSpecCertIdentifier.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary a_roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-roleSpecCertIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       roleSpecCertIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-roleSpecCertIdentifier
 *   LDAP-NAME         {"Role specification certificate identifier"}
 *   ID                id-ce-a-roleSpecCertIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof roleSpecCertIdentifier["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof roleSpecCertIdentifier["&ExtnType"]>}
 */
export const a_roleSpecCertIdentifier: ATTRIBUTE<
    typeof roleSpecCertIdentifier["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": roleSpecCertIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": roleSpecCertIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_roleSpecCertIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_roleSpecCertIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
