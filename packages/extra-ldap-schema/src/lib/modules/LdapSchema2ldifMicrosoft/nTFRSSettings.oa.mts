/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { applicationSettings } from "../LdapSchema2ldifMicrosoft/applicationSettings.oa.mjs";
// export { id_oc_nTFRSSettings } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSettings.va.mjs";


/**
 * @summary nTFRSSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationSettings }
 *   MAY CONTAIN               { fRSExtensions
 *                               | managedBy }
 *   LDAP-NAME                 {"nTFRSSettings"}
 *   ID                        id-oc-nTFRSSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSSettings: OBJECT_CLASS = undefined;

/* eslint-enable */
