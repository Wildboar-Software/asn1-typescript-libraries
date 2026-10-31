/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxLink } from "../LdapOx/id-oc-oxLink.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { oxGuid } from "./oxGuid.oa.mjs";
import { oxLinkCreator } from "./oxLinkCreator.oa.mjs";
import { oxLinkExpirationDate } from "./oxLinkExpirationDate.oa.mjs";
import { oxLinkLinktrack } from "./oxLinkLinktrack.oa.mjs";
import { oxLinkModerated } from "./oxLinkModerated.oa.mjs";
import { oxLinkModerators } from "./oxLinkModerators.oa.mjs";
import { oxLinkPending } from "./oxLinkPending.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, oxGuid, oxLinkCreator, oxLinkExpirationDate, oxLinkLinktrack, oxLinkModerated, oxLinkModerators, oxLinkPending] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxLink"],
    "&id": id_oc_oxLink /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
