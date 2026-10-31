/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaObject } from "../Ldap60basev2/id-oc-ipaObject.va.mjs";
import { ipaUniqueID } from "../Ldap60basev2/ipaUniqueID.oa.mjs";

/**
 * @summary ipaObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ipaUniqueID }
 *   LDAP-NAME                 {"ipaObject"}
 *   LDAP-DESC                 "IPA objectclass"
 *   ID                        id-oc-ipaObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ipaUniqueID] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaObject"],
    "&ldapDesc": "IPA objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
