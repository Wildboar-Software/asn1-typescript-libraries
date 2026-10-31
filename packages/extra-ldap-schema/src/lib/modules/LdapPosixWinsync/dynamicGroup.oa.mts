/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { dsOnlyMemberUid } from "../LdapPosixWinsync/dsOnlyMemberUid.oa.mjs";
import { id_oc_dynamicGroup } from "../LdapPosixWinsync/id-oc-dynamicGroup.va.mjs";
import { posixGroup } from "../NIS/posixGroup.oa.mjs";

/**
 * @summary dynamicGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dynamicGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { posixGroup }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { dsOnlyMemberUid }
 *   LDAP-NAME                 {"dynamicGroup"}
 *   LDAP-DESC                 "Group containing internal dynamically-generated members"
 *   ID                        id-oc-dynamicGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dynamicGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [posixGroup] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dsOnlyMemberUid] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dynamicGroup"],
    "&ldapDesc": "Group containing internal dynamically-generated members" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dynamicGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
