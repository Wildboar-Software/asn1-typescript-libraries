/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuAttribute } from "../LdapOx/id-oc-gluuAttribute.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { gluuAttributeEditType } from "./gluuAttributeEditType.oa.mjs";
import { gluuAttributeName } from "./gluuAttributeName.oa.mjs";
import { gluuAttributeOrigin } from "./gluuAttributeOrigin.oa.mjs";
import { gluuAttributeSystemEditType } from "./gluuAttributeSystemEditType.oa.mjs";
import { gluuAttributeType } from "./gluuAttributeType.oa.mjs";
import { gluuAttributeUsageType } from "./gluuAttributeUsageType.oa.mjs";
import { gluuAttributeViewType } from "./gluuAttributeViewType.oa.mjs";
import { gluuCategory } from "./gluuCategory.oa.mjs";
import { gluuRegExp } from "./gluuRegExp.oa.mjs";
import { gluuSAML1URI } from "./gluuSAML1URI.oa.mjs";
import { gluuSAML2URI } from "./gluuSAML2URI.oa.mjs";
import { gluuStatus } from "./gluuStatus.oa.mjs";
import { gluuTooltip } from "./gluuTooltip.oa.mjs";
import { iname } from "./iname.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxAuthClaimName } from "./oxAuthClaimName.oa.mjs";
import { oxMultivaluedAttribute } from "./oxMultivaluedAttribute.oa.mjs";
import { oxNameIdType } from "./oxNameIdType.oa.mjs";
import { oxSCIMCustomAttribute } from "./oxSCIMCustomAttribute.oa.mjs";
import { oxSourceAttribute } from "./oxSourceAttribute.oa.mjs";
import { oxValidation } from "./oxValidation.oa.mjs";
import { urn } from "./urn.oa.mjs";

/**
 * @summary gluuAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuAttribute OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { description
 *                               | displayName
 *                               | gluuAttributeEditType
 *                               | gluuAttributeName
 *                               | gluuAttributeOrigin
 *                               | gluuAttributeSystemEditType
 *                               | gluuAttributeType
 *                               | oxAuthClaimName
 *                               | gluuAttributeUsageType
 *                               | gluuAttributeViewType
 *                               | gluuCategory
 *                               | gluuSAML1URI
 *                               | gluuSAML2URI
 *                               | gluuStatus
 *                               | iname
 *                               | inum
 *                               | oxMultivaluedAttribute
 *                               | oxNameIdType
 *                               | oxSCIMCustomAttribute
 *                               | oxSourceAttribute
 *                               | seeAlso
 *                               | urn
 *                               | gluuRegExp
 *                               | gluuTooltip
 *                               | oxValidation }
 *   LDAP-NAME                 {"gluuAttribute"}
 *   ID                        id-oc-gluuAttribute }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuAttribute: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, displayName, gluuAttributeEditType, gluuAttributeName, gluuAttributeOrigin, gluuAttributeSystemEditType, gluuAttributeType, oxAuthClaimName, gluuAttributeUsageType, gluuAttributeViewType, gluuCategory, gluuSAML1URI, gluuSAML2URI, gluuStatus, iname, inum, oxMultivaluedAttribute, oxNameIdType, oxSCIMCustomAttribute, oxSourceAttribute, seeAlso, urn, gluuRegExp, gluuTooltip, oxValidation] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuAttribute"],
    "&id": id_oc_gluuAttribute /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
