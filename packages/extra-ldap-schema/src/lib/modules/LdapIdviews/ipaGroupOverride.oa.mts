/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ipaGroupOverride } from "../LdapIdviews/id-oc-ipaGroupOverride.va.mjs";
import { ipaOverrideAnchor } from "../LdapIdviews/ipaOverrideAnchor.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary ipaGroupOverride
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaGroupOverride OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaOverrideAnchor }
 *   MAY CONTAIN               { gidNumber
 *                               | commonName }
 *   LDAP-NAME                 {"ipaGroupOverride"}
 *   LDAP-DESC                 "Override for Group Attributes"
 *   ID                        id-oc-ipaGroupOverride }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaGroupOverride: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [ipaOverrideAnchor] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gidNumber, commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaGroupOverride"],
    "&ldapDesc": "Override for Group Attributes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaGroupOverride /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
