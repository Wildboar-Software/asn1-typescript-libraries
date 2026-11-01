/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { rfc822MailMember } from "../LdapMisc/rfc822MailMember.oa.mjs";
import { id_oc_nisMailAlias } from "../LdapMisc/id-oc-nisMailAlias.va.mjs";

/**
 * @summary nisMailAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisMailAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { rfc822MailMember }
 *   LDAP-NAME                 {"nisMailAlias"}
 *   LDAP-DESC                 "NIS mail alias"
 *   ID                        id-oc-nisMailAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisMailAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rfc822MailMember, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nisMailAlias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "NIS mail alias" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nisMailAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
