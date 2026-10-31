/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsManagedMailList } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedMailList.va.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsMaxUsers } from "./nsMaxUsers.oa.mjs";
import { nsNumUsers } from "./nsNumUsers.oa.mjs";
import { nsdaModifiableBy } from "./nsdaModifiableBy.oa.mjs";

/**
 * @summary nsManagedMailList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedMailList OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsNumUsers
 *                               | nsMaxUsers
 *                               | owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedMailList"}
 *   LDAP-DESC                 "Delegated Admin marker for managed mailing list"
 *   ID                        id-oc-nsManagedMailList }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedMailList: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsNumUsers, nsMaxUsers, owner, nsdaModifiableBy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsManagedMailList"],
    "&ldapDesc": "Delegated Admin marker for managed mailing list" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedMailList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
