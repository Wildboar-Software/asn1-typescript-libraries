/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { siteLinkList } from "../MSUser/siteLinkList.oa.mjs";
import { id_oc_siteLinkBridge } from "../LdapSchema2ldifMicrosoft/id-oc-siteLinkBridge.va.mjs";


/**
 * @summary siteLinkBridge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * siteLinkBridge OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { siteLinkList }
 *   LDAP-NAME                 {"siteLinkBridge"}
 *   ID                        id-oc-siteLinkBridge }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const siteLinkBridge: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ siteLinkList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "siteLinkBridge" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_siteLinkBridge /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

