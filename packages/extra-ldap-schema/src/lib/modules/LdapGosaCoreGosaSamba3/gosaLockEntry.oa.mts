/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaLockEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gosaLockEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gosaObject } from "./gosaObject.oa.mjs";
import { gosaUser } from "./gosaUser.oa.mjs";

/**
 * @summary gosaLockEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaLockEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gosaUser
 *                               | gosaObject
 *                               | commonName }
 *   LDAP-NAME                 {"gosaLockEntry"}
 *   LDAP-DESC                 "Class for GOsa locking (v2.7)"
 *   ID                        id-oc-gosaLockEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaLockEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gosaUser, gosaObject, commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaLockEntry"],
    "&ldapDesc": "Class for GOsa locking (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaLockEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
