/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmINode } from "../LdapGfarm/id-oc-gFarmINode.va.mjs";
import { atimensec } from "./atimensec.oa.mjs";
import { atimesec } from "./atimesec.oa.mjs";
import { checksum } from "./checksum.oa.mjs";
import { checksumType } from "./checksumType.oa.mjs";
import { ctimensec } from "./ctimensec.oa.mjs";
import { ctimesec } from "./ctimesec.oa.mjs";
import { groupname } from "./groupname.oa.mjs";
import { igen } from "./igen.oa.mjs";
import { inumber } from "./inumber.oa.mjs";
import { mode } from "./mode.oa.mjs";
import { mtimensec } from "./mtimensec.oa.mjs";
import { mtimesec } from "./mtimesec.oa.mjs";
import { nlink } from "./nlink.oa.mjs";
import { size_type } from "./size-type.oa.mjs";
import { username } from "./username.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [inumber, igen, nlink, size_type, mode, username, groupname, atimesec, atimensec, mtimesec, mtimensec, ctimesec, ctimensec] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [checksumType, checksum] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GFarmINode"],
    "&id": id_oc_gFarmINode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
