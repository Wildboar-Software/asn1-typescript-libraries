/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_nsManagedDept } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedDept.va.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { groupOfUniqueNames } from "../SelectedObjectClasses/groupOfUniqueNames.oa.mjs";
import { nsMaxDepts } from "./nsMaxDepts.oa.mjs";
import { nsMaxUsers } from "./nsMaxUsers.oa.mjs";
import { nsNumDepts } from "./nsNumDepts.oa.mjs";
import { nsNumUsers } from "./nsNumUsers.oa.mjs";
import { nsdaModifiableBy } from "./nsdaModifiableBy.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [groupOfUniqueNames] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsNumUsers, nsMaxUsers, nsNumDepts, nsMaxDepts, owner, nsdaModifiableBy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsManagedDept"],
    "&ldapDesc": "Delegated Admin marker for managed department" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedDept /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
