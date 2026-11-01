/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmUserAuth } from "../LdapGfarm/id-oc-gFarmUserAuth.va.mjs";
import { username } from "../LdapGfarm/username.oa.mjs";
import { authIDType } from "../LdapGfarm/authIDType.oa.mjs";
import { authUserId } from "../LdapGfarm/authUserId.oa.mjs";


/**
 * @summary gFarmUserAuth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmUserAuth OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { username
 *                               | authIDType
 *                               | authUserId }
 *   LDAP-NAME                 {"GFarmUserAuth"}
 *   ID                        id-oc-gFarmUserAuth }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmUserAuth: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ username, authIDType, authUserId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GFarmUserAuth" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gFarmUserAuth /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

