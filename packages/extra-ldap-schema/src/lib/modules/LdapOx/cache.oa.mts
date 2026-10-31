/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_cache } from "../LdapOx/id-oc-cache.va.mjs";
import { dat } from "./dat.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { iat } from "./iat.oa.mjs";
import { uuid } from "./uuid.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uuid, iat, exp, del, dat] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cache"],
    "&id": id_oc_cache /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
