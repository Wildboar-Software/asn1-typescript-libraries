/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gosaUser } from "../LdapGosaCoreGosaSamba3/gosaUser.oa.mjs";
import { id_oc_gosaCacheEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gosaCacheEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary gosaCacheEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaCacheEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaUser }
 *   LDAP-NAME                 {"gosaCacheEntry"}
 *   LDAP-DESC                 "Class for GOsa caching (v2.7)"
 *   ID                        id-oc-gosaCacheEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaCacheEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gosaUser] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaCacheEntry"],
    "&ldapDesc": "Class for GOsa caching (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaCacheEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
