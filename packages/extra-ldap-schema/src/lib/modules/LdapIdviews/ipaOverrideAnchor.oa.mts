/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaOverrideAnchor } from "../LdapIdviews/id-oc-ipaOverrideAnchor.va.mjs";
import { ipaAnchorUUID } from "../LdapIdviews/ipaAnchorUUID.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";

/**
 * @summary ipaOverrideAnchor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaOverrideAnchor OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { ipaAnchorUUID }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"ipaOverrideAnchor"}
 *   ID                        id-oc-ipaOverrideAnchor }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaOverrideAnchor: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ipaAnchorUUID] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaOverrideAnchor"],
    "&id": id_oc_ipaOverrideAnchor /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
