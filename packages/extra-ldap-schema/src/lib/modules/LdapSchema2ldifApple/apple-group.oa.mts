/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
import { id_oc_apple_group } from "../LdapSchema2ldifApple/id-oc-apple-group.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { rid } from "../SambaSchema/rid.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
import { apple_generateduid } from "./apple-generateduid.oa.mjs";
import { apple_group_homeowner } from "./apple-group-homeowner.oa.mjs";
import { apple_group_homeurl } from "./apple-group-homeurl.oa.mjs";
import { apple_group_memberguid } from "./apple-group-memberguid.oa.mjs";
import { apple_group_nestedgroup } from "./apple-group-nestedgroup.oa.mjs";
import { apple_group_realname } from "./apple-group-realname.oa.mjs";
import { apple_keyword } from "./apple-keyword.oa.mjs";
import { apple_mcxflags } from "./apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "./apple-mcxsettings.oa.mjs";
import { apple_user_picture } from "./apple-user-picture.oa.mjs";

/**
 * @summary apple_group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { apple-group-homeurl
 *                               | apple-group-homeowner
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-group-realname
 *                               | apple-user-picture
 *                               | apple-keyword
 *                               | apple-generateduid
 *                               | apple-group-nestedgroup
 *                               | apple-group-memberguid
 *                               | mail
 *                               | rid
 *                               | sambaSID
 *                               | ttl }
 *   LDAP-NAME                 {"apple-group"}
 *   LDAP-DESC                 "group account"
 *   ID                        id-oc-apple-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [apple_group_homeurl, apple_group_homeowner, apple_mcxflags, apple_mcxsettings, apple_group_realname, apple_user_picture, apple_keyword, apple_generateduid, apple_group_nestedgroup, apple_group_memberguid, mail, rid, sambaSID, ttl] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-group"],
    "&ldapDesc": "group account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_group /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
