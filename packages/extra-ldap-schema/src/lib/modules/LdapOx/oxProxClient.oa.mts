/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxProxClient } from "../LdapOx/id-oc-oxProxClient.va.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { oxProxyClaimMapping } from "../LdapOx/oxProxyClaimMapping.oa.mjs";
import { oxProxyScope } from "../LdapOx/oxProxyScope.oa.mjs";
import { oxProxyToOpClientMapping } from "../LdapOx/oxProxyToOpClientMapping.oa.mjs";


/**
 * @summary oxProxClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxProxClient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { displayName
 *                               | inum
 *                               | oxProxyClaimMapping
 *                               | oxProxyScope
 *                               | oxProxyToOpClientMapping }
 *   LDAP-NAME                 {"oxProxClient"}
 *   ID                        id-oc-oxProxClient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxProxClient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ displayName, inum, oxProxyClaimMapping, oxProxyScope, oxProxyToOpClientMapping, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxProxClient" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxProxClient /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

