/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_siteLinkBridge } from "../LdapSchema2ldifMicrosoft/id-oc-siteLinkBridge.va.mjs";
import { siteLinkList } from "../MSUser/siteLinkList.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [siteLinkList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["siteLinkBridge"],
    "&id": id_oc_siteLinkBridge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
