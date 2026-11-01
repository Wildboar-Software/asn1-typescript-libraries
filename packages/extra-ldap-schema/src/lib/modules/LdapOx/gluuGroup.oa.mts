/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuGroup } from "../LdapOx/id-oc-gluuGroup.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { gluuGroupType } from "../LdapOx/gluuGroupType.oa.mjs";
import { gluuGroupVisibility } from "../LdapOx/gluuGroupVisibility.oa.mjs";
import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
import { iname } from "../LdapOx/iname.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { oxTrustMetaCreated } from "../LdapOx/oxTrustMetaCreated.oa.mjs";
import { oxTrustMetaLastModified } from "../LdapOx/oxTrustMetaLastModified.oa.mjs";
import { oxTrustMetaLocation } from "../LdapOx/oxTrustMetaLocation.oa.mjs";
import { oxTrustMetaVersion } from "../LdapOx/oxTrustMetaVersion.oa.mjs";
// export { id_oc_gluuGroup } from "../LdapOx/id-oc-gluuGroup.va.mjs";


/**
 * @summary gluuGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { countryName
 *                               | description
 *                               | displayName
 *                               | gluuGroupType
 *                               | gluuGroupVisibility
 *                               | gluuStatus
 *                               | iname
 *                               | inum
 *                               | member
 *                               | organizationName
 *                               | owner
 *                               | seeAlso
 *                               | oxTrustMetaCreated
 *                               | oxTrustMetaLastModified
 *                               | oxTrustMetaLocation
 *                               | oxTrustMetaVersion }
 *   LDAP-NAME                 {"gluuGroup"}
 *   ID                        id-oc-gluuGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, description, displayName, gluuGroupType, gluuGroupVisibility, gluuStatus, iname, inum, member, organizationName, owner, seeAlso, oxTrustMetaCreated, oxTrustMetaLastModified, oxTrustMetaLocation, oxTrustMetaVersion, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuGroup" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
