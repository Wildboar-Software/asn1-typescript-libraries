/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_gotoPrinter } from "../LdapGosaCoreGoto/id-oc-gotoPrinter.va.mjs";


/**
 * @summary gotoPrinter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoPrinter OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { labeledURI
 *                               | description
 *                               | localityName
 *                               | gotoPrinterPPD
 *                               | macAddress
 *                               | ipHostNumber
 *                               | gotoUserPrinter
 *                               | gotoUserAdminPrinter
 *                               | gotoGroupPrinter
 *                               | gotoGroupAdminPrinter }
 *   LDAP-NAME                 {"gotoPrinter"}
 *   LDAP-DESC                 "GOto - Gonicus Terminal Concept, objectclass (v2.7)"
 *   ID                        id-oc-gotoPrinter }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoPrinter: OBJECT_CLASS = undefined;

/* eslint-enable */
