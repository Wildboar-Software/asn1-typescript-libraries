/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
import { id_oc_apple_preset_group } from "../LdapSchema2ldifApple/id-oc-apple-preset-group.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { memberUid } from "../NIS/memberUid.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { apple_group_homeowner } from "./apple-group-homeowner.oa.mjs";
import { apple_group_homeurl } from "./apple-group-homeurl.oa.mjs";
import { apple_group_memberguid } from "./apple-group-memberguid.oa.mjs";
import { apple_group_nestedgroup } from "./apple-group-nestedgroup.oa.mjs";
import { apple_group_realname } from "./apple-group-realname.oa.mjs";
import { apple_keyword } from "./apple-keyword.oa.mjs";
import { apple_mcxflags } from "./apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "./apple-mcxsettings.oa.mjs";

/**
 * @summary apple_preset_group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-preset-group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { memberUid
 *                               | gidNumber
 *                               | description
 *                               | apple-group-homeurl
 *                               | apple-group-homeowner
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-group-realname
 *                               | apple-keyword
 *                               | apple-group-nestedgroup
 *                               | apple-group-memberguid
 *                               | ttl }
 *   LDAP-NAME                 {"apple-preset-group"}
 *   LDAP-DESC                 "preset group"
 *   ID                        id-oc-apple-preset-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_preset_group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [memberUid, gidNumber, description, apple_group_homeurl, apple_group_homeowner, apple_mcxflags, apple_mcxsettings, apple_group_realname, apple_keyword, apple_group_nestedgroup, apple_group_memberguid, ttl] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-preset-group"],
    "&ldapDesc": "preset group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_preset_group /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
