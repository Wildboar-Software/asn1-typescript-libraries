/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaAssociation } from "../Ldap60basev2/id-oc-ipaAssociation.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { hostCategory } from "./hostCategory.oa.mjs";
import { ipaEnabledFlag } from "./ipaEnabledFlag.oa.mjs";
import { ipaUniqueID } from "./ipaUniqueID.oa.mjs";
import { memberHost } from "./memberHost.oa.mjs";
import { memberUser } from "./memberUser.oa.mjs";
import { userCategory } from "./userCategory.oa.mjs";

/**
 * @summary ipaAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaAssociation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MUST CONTAIN              { ipaUniqueID
 *                               | commonName }
 *   MAY CONTAIN               { memberUser
 *                               | userCategory
 *                               | memberHost
 *                               | hostCategory
 *                               | ipaEnabledFlag
 *                               | description }
 *   LDAP-NAME                 {"ipaAssociation"}
 *   ID                        id-oc-ipaAssociation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaAssociation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ipaUniqueID, commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [memberUser, userCategory, memberHost, hostCategory, ipaEnabledFlag, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaAssociation"],
    "&id": id_oc_ipaAssociation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
