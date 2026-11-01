/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_pgpProfile } from "../LdapSchema2ldifPgpRemtePrefs/id-oc-pgpProfile.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
// export { id_oc_pgpProfile } from "../LdapSchema2ldifPgpRemtePrefs/id-oc-pgpProfile.va.mjs";


/**
 * @summary pgpProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pgpProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { commonName
 *                               | owner }
 *   LDAP-NAME                 {"pgpProfile"}
 *   LDAP-DESC                 "PGP defined objectclass of a collection admin prefs"
 *   ID                        id-oc-pgpProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pgpProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, owner, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pgpProfile" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "PGP defined objectclass of a collection admin prefs" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pgpProfile /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
