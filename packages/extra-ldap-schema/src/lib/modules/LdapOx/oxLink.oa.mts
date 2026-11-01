/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxLink } from "../LdapOx/id-oc-oxLink.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { oxGuid } from "../LdapOx/oxGuid.oa.mjs";
import { oxLinkCreator } from "../LdapOx/oxLinkCreator.oa.mjs";
import { oxLinkExpirationDate } from "../LdapOx/oxLinkExpirationDate.oa.mjs";
import { oxLinkLinktrack } from "../LdapOx/oxLinkLinktrack.oa.mjs";
import { oxLinkModerated } from "../LdapOx/oxLinkModerated.oa.mjs";
import { oxLinkModerators } from "../LdapOx/oxLinkModerators.oa.mjs";
import { oxLinkPending } from "../LdapOx/oxLinkPending.oa.mjs";


/**
 * @summary oxLink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxLink OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { description
 *                               | oxGuid
 *                               | oxLinkCreator
 *                               | oxLinkExpirationDate
 *                               | oxLinkLinktrack
 *                               | oxLinkModerated
 *                               | oxLinkModerators
 *                               | oxLinkPending }
 *   LDAP-NAME                 {"oxLink"}
 *   ID                        id-oc-oxLink }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxLink: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, oxGuid, oxLinkCreator, oxLinkExpirationDate, oxLinkLinktrack, oxLinkModerated, oxLinkModerators, oxLinkPending, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxLink" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxLink /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

