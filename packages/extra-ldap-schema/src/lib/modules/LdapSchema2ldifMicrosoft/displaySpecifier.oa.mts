/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
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
const displaySpecifier: OBJECT_CLASS = undefined;

/* eslint-enable */
