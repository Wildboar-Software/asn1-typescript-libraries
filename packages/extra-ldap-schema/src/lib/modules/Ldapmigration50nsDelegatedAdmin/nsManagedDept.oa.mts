/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { groupOfUniqueNames } from "../SelectedObjectClasses/groupOfUniqueNames.oa.mjs";
import { id_oc_nsManagedDept } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedDept.va.mjs";

import { nsNumUsers } from "../Ldapmigration50nsDelegatedAdmin/nsNumUsers.oa.mjs";
import { nsMaxUsers } from "../Ldapmigration50nsDelegatedAdmin/nsMaxUsers.oa.mjs";
import { nsNumDepts } from "../Ldapmigration50nsDelegatedAdmin/nsNumDepts.oa.mjs";
import { nsMaxDepts } from "../Ldapmigration50nsDelegatedAdmin/nsMaxDepts.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsdaModifiableBy } from "../Ldapmigration50nsDelegatedAdmin/nsdaModifiableBy.oa.mjs";
/**
 * @summary nsManagedDept
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedDept OBJECT-CLASS ::= {
 *   SUBCLASS OF               { groupOfUniqueNames }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsNumUsers
 *                               | nsMaxUsers
 *                               | nsNumDepts
 *                               | nsMaxDepts
 *                               | owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedDept"}
 *   LDAP-DESC                 "Delegated Admin marker for managed department"
 *   ID                        id-oc-nsManagedDept }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedDept: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ groupOfUniqueNames, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsNumUsers, nsMaxUsers, nsNumDepts, nsMaxDepts, owner, nsdaModifiableBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsManagedDept" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Delegated Admin marker for managed department" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedDept /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
