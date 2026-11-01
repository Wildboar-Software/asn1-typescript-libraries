/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_pgpElement } from "../LdapSchema2ldifPgpRemtePrefs/id-oc-pgpElement.va.mjs";
import { pgpElementType } from "../LdapSchema2ldifPgpRemtePrefs/pgpElementType.oa.mjs";
import { pgpData } from "../LdapSchema2ldifPgpRemtePrefs/pgpData.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
// export { id_oc_pgpElement } from "../LdapSchema2ldifPgpRemtePrefs/id-oc-pgpElement.va.mjs";


/**
 * @summary pgpElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pgpElement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { pgpElementType
 *                               | pgpData
 *                               | owner }
 *   LDAP-NAME                 {"pgpElement"}
 *   LDAP-DESC                 "PGP defined objectclass of a single admin pref object"
 *   ID                        id-oc-pgpElement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pgpElement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ pgpElementType, pgpData, owner, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pgpElement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "PGP defined objectclass of a single admin pref object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pgpElement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
