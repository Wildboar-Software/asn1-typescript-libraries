/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuGroup } from "../LdapOx/id-oc-gluuGroup.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { gluuGroupType } from "./gluuGroupType.oa.mjs";
import { gluuGroupVisibility } from "./gluuGroupVisibility.oa.mjs";
import { gluuStatus } from "./gluuStatus.oa.mjs";
import { iname } from "./iname.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxTrustMetaCreated } from "./oxTrustMetaCreated.oa.mjs";
import { oxTrustMetaLastModified } from "./oxTrustMetaLastModified.oa.mjs";
import { oxTrustMetaLocation } from "./oxTrustMetaLocation.oa.mjs";
import { oxTrustMetaVersion } from "./oxTrustMetaVersion.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, description, displayName, gluuGroupType, gluuGroupVisibility, gluuStatus, iname, inum, member, organizationName, owner, seeAlso, oxTrustMetaCreated, oxTrustMetaLastModified, oxTrustMetaLocation, oxTrustMetaVersion] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuGroup"],
    "&id": id_oc_gluuGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
