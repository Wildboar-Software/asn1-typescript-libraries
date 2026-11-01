/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsManagedDomain } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedDomain.va.mjs";

import { nsNumUsers } from "../Ldapmigration50nsDelegatedAdmin/nsNumUsers.oa.mjs";
import { nsMaxUsers } from "../Ldapmigration50nsDelegatedAdmin/nsMaxUsers.oa.mjs";
import { nsNumDepts } from "../Ldapmigration50nsDelegatedAdmin/nsNumDepts.oa.mjs";
import { nsMaxDepts } from "../Ldapmigration50nsDelegatedAdmin/nsMaxDepts.oa.mjs";
import { nsNumMailLists } from "../Ldapmigration50nsDelegatedAdmin/nsNumMailLists.oa.mjs";
import { nsMaxMailLists } from "../Ldapmigration50nsDelegatedAdmin/nsMaxMailLists.oa.mjs";
import { nsNumDomains } from "../Ldapmigration50nsDelegatedAdmin/nsNumDomains.oa.mjs";
import { nsMaxDomains } from "../Ldapmigration50nsDelegatedAdmin/nsMaxDomains.oa.mjs";
import { nsDefaultMaxDeptSize } from "../Ldapmigration50nsDelegatedAdmin/nsDefaultMaxDeptSize.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsdaModifiableBy } from "../Ldapmigration50nsDelegatedAdmin/nsdaModifiableBy.oa.mjs";
/**
 * @summary nsManagedDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsNumUsers
 *                               | nsMaxUsers
 *                               | nsNumDepts
 *                               | nsMaxDepts
 *                               | nsNumMailLists
 *                               | nsMaxMailLists
 *                               | nsNumDomains
 *                               | nsMaxDomains
 *                               | nsDefaultMaxDeptSize
 *                               | owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedDomain"}
 *   LDAP-DESC                 "Delegated Admin marker for managed domain"
 *   ID                        id-oc-nsManagedDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsNumUsers, nsMaxUsers, nsNumDepts, nsMaxDepts, nsNumMailLists, nsMaxMailLists, nsNumDomains, nsMaxDomains, nsDefaultMaxDeptSize, owner, nsdaModifiableBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsManagedDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Delegated Admin marker for managed domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
