/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmUser } from "../LdapGfarm/id-oc-gFarmUser.va.mjs";
import { gsiDN } from "./gsiDN.oa.mjs";
import { homedir } from "./homedir.oa.mjs";
import { realname } from "./realname.oa.mjs";
import { username } from "./username.oa.mjs";

/**
 * @summary gFarmUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { username
 *                               | homedir }
 *   MAY CONTAIN               { realname
 *                               | gsiDN }
 *   LDAP-NAME                 {"GFarmUser"}
 *   ID                        id-oc-gFarmUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [username, homedir] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [realname, gsiDN] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GFarmUser"],
    "&id": id_oc_gFarmUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
