/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { nisDomain } from "../LdapSolaris/nisDomain.oa.mjs";
import { id_oc_nisDomainObject } from "../LdapSolaris/id-oc-nisDomainObject.va.mjs";

/**
 * @summary nisDomainObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisDomainObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { nisDomain }
 *   LDAP-NAME                 {"nisDomainObject"}
 *   LDAP-DESC                 "nisDomainObject"
 *   ID                        id-oc-nisDomainObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisDomainObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ nisDomain, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nisDomainObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "nisDomainObject" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nisDomainObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
