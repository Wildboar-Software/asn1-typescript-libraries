/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ipaHostGroup } from "../Ldap60basev2/id-oc-ipaHostGroup.va.mjs";
import { memberManager } from "../Ldap60basev2/memberManager.oa.mjs";
import { nestedGroup } from "../Ldap60basev2/nestedGroup.oa.mjs";

/**
 * @summary ipaHostGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHostGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nestedGroup }
 *   MAY CONTAIN               { memberManager }
 *   LDAP-NAME                 {"ipaHostGroup"}
 *   LDAP-DESC                 "IPA host group object class"
 *   ID                        id-oc-ipaHostGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHostGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [nestedGroup] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [memberManager] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaHostGroup"],
    "&ldapDesc": "IPA host group object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaHostGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
