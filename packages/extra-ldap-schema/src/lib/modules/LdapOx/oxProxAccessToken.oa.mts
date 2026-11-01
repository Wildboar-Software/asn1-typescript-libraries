/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxProxAccessToken } from "../LdapOx/id-oc-oxProxAccessToken.va.mjs";

import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { oxProxyAccessToken } from "../LdapOx/oxProxyAccessToken.oa.mjs";
import { oxProxyClientId } from "../LdapOx/oxProxyClientId.oa.mjs";
/**
 * @summary oxProxAccessToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxProxAccessToken OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { iat
 *                               | exp
 *                               | del
 *                               | oxProxyAccessToken
 *                               | oxProxyClientId }
 *   LDAP-NAME                 {"oxProxAccessToken"}
 *   ID                        id-oc-oxProxAccessToken }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxProxAccessToken: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iat, exp, del, oxProxyAccessToken, oxProxyClientId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxProxAccessToken" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxProxAccessToken /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
