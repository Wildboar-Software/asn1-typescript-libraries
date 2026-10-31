/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_sunIMNews } from "../Ldapmigration65im/id-oc-sunIMNews.va.mjs";


/**
 * @summary sunIMNews
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIMNews OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIMNewsAffiliations
 *                               | sunIMNewsConfiguration
 *                               | sunIMNewsMetaData
 *                               | commonName
 *                               | uid }
 *   LDAP-NAME                 {"sunIMNews"}
 *   LDAP-DESC                 "Pubsub Channel Object"
 *   ID                        id-oc-sunIMNews }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIMNews: OBJECT_CLASS = undefined;

/* eslint-enable */
