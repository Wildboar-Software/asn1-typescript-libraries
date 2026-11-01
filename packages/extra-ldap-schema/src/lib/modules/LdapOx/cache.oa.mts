/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_cache } from "../LdapOx/id-oc-cache.va.mjs";

import { uuid } from "../LdapOx/uuid.oa.mjs";
import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { dat } from "../LdapOx/dat.oa.mjs";
/**
 * @summary cache
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cache OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { uuid
 *                               | iat
 *                               | exp
 *                               | del
 *                               | dat }
 *   LDAP-NAME                 {"cache"}
 *   ID                        id-oc-cache }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cache: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uuid, iat, exp, del, dat, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "cache" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cache /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
