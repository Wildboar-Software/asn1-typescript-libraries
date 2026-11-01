/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { associatedDomain } from "../MIXERAddressMapping/associatedDomain.oa.mjs";
import { id_oc_domainRelatedObject } from "../LdapSchema2ldifCosine/id-oc-domainRelatedObject.va.mjs";


/**
 * @summary domainRelatedObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainRelatedObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { associatedDomain }
 *   LDAP-NAME                 {"domainRelatedObject"}
 *   LDAP-DESC                 "RFC1274: an object related to an domain"
 *   ID                        id-oc-domainRelatedObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domainRelatedObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ associatedDomain, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "domainRelatedObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: an object related to an domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_domainRelatedObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

