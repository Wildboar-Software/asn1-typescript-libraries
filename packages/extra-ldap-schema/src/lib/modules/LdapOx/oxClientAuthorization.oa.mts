/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxClientAuthorization } from "../LdapOx/id-oc-oxClientAuthorization.va.mjs";

import { oxId } from "../LdapOx/oxId.oa.mjs";
import { oxAuthClientId } from "../LdapOx/oxAuthClientId.oa.mjs";
import { oxAuthUserId } from "../LdapOx/oxAuthUserId.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { oxAuthScope } from "../LdapOx/oxAuthScope.oa.mjs";
/**
 * @summary oxClientAuthorization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxClientAuthorization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | oxAuthClientId
 *                               | oxAuthUserId
 *                               | exp
 *                               | del
 *                               | oxAuthScope }
 *   LDAP-NAME                 {"oxClientAuthorization"}
 *   ID                        id-oc-oxClientAuthorization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxClientAuthorization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, oxAuthClientId, oxAuthUserId, exp, del, oxAuthScope, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxClientAuthorization" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxClientAuthorization /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
