/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nginfo } from "../Ldapmigration50nsNews/id-oc-nginfo.va.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { ngcomponent } from "../Ldapmigration50nsNews/ngcomponent.oa.mjs";
import { nsnewsACL } from "../Ldapmigration50nsNews/nsnewsACL.oa.mjs";
import { subtreeACI } from "../LdapSubtreeAci/subtreeACI.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { nsaclrole } from "../Ldapmigration50nsNews/nsaclrole.oa.mjs";
import { nsprettyname } from "../Ldapmigration50nsNews/nsprettyname.oa.mjs";
import { nsflags } from "../Ldapmigration50nsNews/nsflags.oa.mjs";
import { nscreator } from "../Ldapmigration50nsNews/nscreator.oa.mjs";
// export { id_oc_nginfo } from "../Ldapmigration50nsNews/id-oc-nginfo.va.mjs";


/**
 * @summary nginfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nginfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass
 *                               | ngcomponent }
 *   MAY CONTAIN               { nsnewsACL
 *                               | subtreeACI
 *                               | description
 *                               | nsaclrole
 *                               | nsprettyname
 *                               | nsflags
 *                               | nscreator }
 *   LDAP-NAME                 {"nginfo"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nginfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nginfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ngcomponent, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsnewsACL, subtreeACI, description, nsaclrole, nsprettyname, nsflags, nscreator, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nginfo" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nginfo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
