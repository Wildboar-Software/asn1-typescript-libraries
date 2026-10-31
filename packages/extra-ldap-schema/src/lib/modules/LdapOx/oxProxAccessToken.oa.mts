/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxProxAccessToken } from "../LdapOx/id-oc-oxProxAccessToken.va.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { iat } from "./iat.oa.mjs";
import { oxProxyAccessToken } from "./oxProxyAccessToken.oa.mjs";
import { oxProxyClientId } from "./oxProxyClientId.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iat, exp, del, oxProxyAccessToken, oxProxyClientId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxProxAccessToken"],
    "&id": id_oc_oxProxAccessToken /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
