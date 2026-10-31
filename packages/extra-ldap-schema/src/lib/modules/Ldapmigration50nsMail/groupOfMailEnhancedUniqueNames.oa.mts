/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_groupOfMailEnhancedUniqueNames } from "../Ldapmigration50nsMail/id-oc-groupOfMailEnhancedUniqueNames.va.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { mailEnhancedUniqueMember } from "./mailEnhancedUniqueMember.oa.mjs";

/**
 * @summary groupOfMailEnhancedUniqueNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfMailEnhancedUniqueNames OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { objectClass
 *                               | commonName }
 *   MAY CONTAIN               { businessCategory
 *                               | description
 *                               | mailEnhancedUniqueMember
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | owner
 *                               | seeAlso }
 *   LDAP-NAME                 {"groupOfMailEnhancedUniqueNames"}
 *   ID                        id-oc-groupOfMailEnhancedUniqueNames }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupOfMailEnhancedUniqueNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass, commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [businessCategory, description, mailEnhancedUniqueMember, organizationName, organizationalUnitName, owner, seeAlso] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["groupOfMailEnhancedUniqueNames"],
    "&id": id_oc_groupOfMailEnhancedUniqueNames /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
