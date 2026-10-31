/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_displaySpecifier } from "../LdapSchema2ldifMicrosoft/id-oc-displaySpecifier.va.mjs";
import { adminContextMenu } from "../MSUser/adminContextMenu.oa.mjs";
import { adminPropertyPages } from "../MSUser/adminPropertyPages.oa.mjs";
import { attributeDisplayNames } from "../MSUser/attributeDisplayNames.oa.mjs";
import { classDisplayName } from "../MSUser/classDisplayName.oa.mjs";
import { contextMenu } from "../MSUser/contextMenu.oa.mjs";
import { createDialog } from "../MSUser/createDialog.oa.mjs";
import { createWizardExt } from "../MSUser/createWizardExt.oa.mjs";
import { creationWizard } from "../MSUser/creationWizard.oa.mjs";
import { iconPath } from "../MSUser/iconPath.oa.mjs";
import { queryFilter } from "../MSUser/queryFilter.oa.mjs";
import { scopeFlags } from "../MSUser/scopeFlags.oa.mjs";
import { shellContextMenu } from "../MSUser/shellContextMenu.oa.mjs";
import { shellPropertyPages } from "../MSUser/shellPropertyPages.oa.mjs";
import { treatAsLeaf } from "../MSUser/treatAsLeaf.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iconPath, creationWizard, contextMenu, adminPropertyPages, shellPropertyPages, classDisplayName, adminContextMenu, shellContextMenu, attributeDisplayNames, treatAsLeaf, createDialog, createWizardExt, scopeFlags, queryFilter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["displaySpecifier"],
    "&id": id_oc_displaySpecifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
