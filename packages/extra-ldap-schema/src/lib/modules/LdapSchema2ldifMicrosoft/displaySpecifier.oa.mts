/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_displaySpecifier } from "../LdapSchema2ldifMicrosoft/id-oc-displaySpecifier.va.mjs";
import { iconPath } from "../MSUser/iconPath.oa.mjs";
import { creationWizard } from "../MSUser/creationWizard.oa.mjs";
import { contextMenu } from "../MSUser/contextMenu.oa.mjs";
import { adminPropertyPages } from "../MSUser/adminPropertyPages.oa.mjs";
import { shellPropertyPages } from "../MSUser/shellPropertyPages.oa.mjs";
import { classDisplayName } from "../MSUser/classDisplayName.oa.mjs";
import { adminContextMenu } from "../MSUser/adminContextMenu.oa.mjs";
import { shellContextMenu } from "../MSUser/shellContextMenu.oa.mjs";
import { attributeDisplayNames } from "../MSUser/attributeDisplayNames.oa.mjs";
import { treatAsLeaf } from "../MSUser/treatAsLeaf.oa.mjs";
import { createDialog } from "../MSUser/createDialog.oa.mjs";
import { createWizardExt } from "../MSUser/createWizardExt.oa.mjs";
import { scopeFlags } from "../MSUser/scopeFlags.oa.mjs";
import { queryFilter } from "../MSUser/queryFilter.oa.mjs";
// export { id_oc_displaySpecifier } from "../LdapSchema2ldifMicrosoft/id-oc-displaySpecifier.va.mjs";


/**
 * @summary displaySpecifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * displaySpecifier OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { iconPath
 *                               | creationWizard
 *                               | contextMenu
 *                               | adminPropertyPages
 *                               | shellPropertyPages
 *                               | classDisplayName
 *                               | adminContextMenu
 *                               | shellContextMenu
 *                               | attributeDisplayNames
 *                               | treatAsLeaf
 *                               | createDialog
 *                               | createWizardExt
 *                               | scopeFlags
 *                               | queryFilter }
 *   LDAP-NAME                 {"displaySpecifier"}
 *   ID                        id-oc-displaySpecifier }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const displaySpecifier: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iconPath, creationWizard, contextMenu, adminPropertyPages, shellPropertyPages, classDisplayName, adminContextMenu, shellContextMenu, attributeDisplayNames, treatAsLeaf, createDialog, createWizardExt, scopeFlags, queryFilter, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "displaySpecifier" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_displaySpecifier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
