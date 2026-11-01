/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmINode } from "../LdapGfarm/id-oc-gFarmINode.va.mjs";

import { checksumType } from "../LdapGfarm/checksumType.oa.mjs";
import { checksum } from "../LdapGfarm/checksum.oa.mjs";
import { inumber } from "../LdapGfarm/inumber.oa.mjs";
import { igen } from "../LdapGfarm/igen.oa.mjs";
import { nlink } from "../LdapGfarm/nlink.oa.mjs";
import { size_type } from "../LdapGfarm/size-type.oa.mjs";
import { mode } from "../LdapGfarm/mode.oa.mjs";
import { username } from "../LdapGfarm/username.oa.mjs";
import { groupname } from "../LdapGfarm/groupname.oa.mjs";
import { atimesec } from "../LdapGfarm/atimesec.oa.mjs";
import { atimensec } from "../LdapGfarm/atimensec.oa.mjs";
import { mtimesec } from "../LdapGfarm/mtimesec.oa.mjs";
import { mtimensec } from "../LdapGfarm/mtimensec.oa.mjs";
import { ctimesec } from "../LdapGfarm/ctimesec.oa.mjs";
import { ctimensec } from "../LdapGfarm/ctimensec.oa.mjs";
/**
 * @summary gFarmINode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmINode OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { inumber
 *                               | igen
 *                               | nlink
 *                               | size-type
 *                               | mode
 *                               | username
 *                               | groupname
 *                               | atimesec
 *                               | atimensec
 *                               | mtimesec
 *                               | mtimensec
 *                               | ctimesec
 *                               | ctimensec }
 *   MAY CONTAIN               { checksumType
 *                               | checksum }
 *   LDAP-NAME                 {"GFarmINode"}
 *   ID                        id-oc-gFarmINode }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmINode: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ inumber, igen, nlink, size_type, mode, username, groupname, atimesec, atimensec, mtimesec, mtimensec, ctimesec, ctimensec, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ checksumType, checksum, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GFarmINode" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gFarmINode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
