/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { id_oc_linkTrackOMTEntry } from "../LdapSchema2ldifMicrosoft/id-oc-linkTrackOMTEntry.va.mjs";


/**
 * @summary linkTrackOMTEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * linkTrackOMTEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { birthLocation
 *                               | oMTIndxGuid
 *                               | currentLocation
 *                               | timeRefresh
 *                               | oMTGuid }
 *   LDAP-NAME                 {"linkTrackOMTEntry"}
 *   ID                        id-oc-linkTrackOMTEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const linkTrackOMTEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
