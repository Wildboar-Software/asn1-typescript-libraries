/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsManagedFamilyGroup } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedFamilyGroup.va.mjs";
import { nsNumUsers } from "../Ldapmigration50nsDelegatedAdmin/nsNumUsers.oa.mjs";
import { nsMaxUsers } from "../Ldapmigration50nsDelegatedAdmin/nsMaxUsers.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsdaModifiableBy } from "../Ldapmigration50nsDelegatedAdmin/nsdaModifiableBy.oa.mjs";


/**
 * @summary nsManagedFamilyGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedFamilyGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsNumUsers
 *                               | nsMaxUsers
 *                               | owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedFamilyGroup"}
 *   LDAP-DESC                 "Delegated Admin marker for managed familygroup"
 *   ID                        id-oc-nsManagedFamilyGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedFamilyGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsNumUsers, nsMaxUsers, owner, nsdaModifiableBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsManagedFamilyGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Delegated Admin marker for managed familygroup" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedFamilyGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

