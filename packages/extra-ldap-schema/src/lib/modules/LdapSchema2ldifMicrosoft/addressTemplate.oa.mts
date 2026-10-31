/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { displayName } from "../LdapSchema2ldifMicrosoft/displayName.oa.mjs";
import { displayTemplate } from "../LdapSchema2ldifMicrosoft/displayTemplate.oa.mjs";
import { id_oc_addressTemplate } from "../LdapSchema2ldifMicrosoft/id-oc-addressTemplate.va.mjs";
import { addressSyntax } from "../MSUser/addressSyntax.oa.mjs";
import { addressType } from "../MSUser/addressType.oa.mjs";
import { perMsgDialogDisplayTable } from "../MSUser/perMsgDialogDisplayTable.oa.mjs";
import { perRecipDialogDisplayTable } from "../MSUser/perRecipDialogDisplayTable.oa.mjs";
import { proxyGenerationEnabled } from "../MSUser/proxyGenerationEnabled.oa.mjs";

/**
 * @summary addressTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * addressTemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { displayTemplate }
 *   MUST CONTAIN              { displayName }
 *   MAY CONTAIN               { addressSyntax
 *                               | perMsgDialogDisplayTable
 *                               | perRecipDialogDisplayTable
 *                               | addressType
 *                               | proxyGenerationEnabled }
 *   LDAP-NAME                 {"addressTemplate"}
 *   ID                        id-oc-addressTemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const addressTemplate: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [displayTemplate] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [displayName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [addressSyntax, perMsgDialogDisplayTable, perRecipDialogDisplayTable, addressType, proxyGenerationEnabled] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["addressTemplate"],
    "&id": id_oc_addressTemplate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
