/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ipaAnchorUUID } from "../LdapIdviews/ipaAnchorUUID.oa.mjs";
import { id_oc_ipaOverrideTarget } from "../LdapIdviews/id-oc-ipaOverrideTarget.va.mjs";


/**
 * @summary ipaOverrideTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaOverrideTarget OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { ipaAnchorUUID }
 *   LDAP-NAME                 {"ipaOverrideTarget"}
 *   ID                        id-oc-ipaOverrideTarget }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaOverrideTarget: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ipaAnchorUUID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaOverrideTarget" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaOverrideTarget /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

