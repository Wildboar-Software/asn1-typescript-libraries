/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisUserAttr } from "../LdapNisclient/id-oc-solarisUserAttr.va.mjs";

import { solarisAttrKeyValue } from "../LdapNisclient/solarisAttrKeyValue.oa.mjs";
import { solarisAttrReserved1 } from "../LdapNisclient/solarisAttrReserved1.oa.mjs";
import { solarisAttrReserved2 } from "../LdapNisclient/solarisAttrReserved2.oa.mjs";
import { solarisUserQualifier } from "../LdapNisclient/solarisUserQualifier.oa.mjs";
/**
 * @summary solarisUserAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * solarisUserAttr OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { solarisAttrKeyValue
 *                               | solarisAttrReserved1
 *                               | solarisAttrReserved2
 *                               | solarisUserQualifier }
 *   LDAP-NAME                 {"SolarisUserAttr"}
 *   ID                        id-oc-solarisUserAttr }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const solarisUserAttr: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ solarisAttrKeyValue, solarisAttrReserved1, solarisAttrReserved2, solarisUserQualifier, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "SolarisUserAttr" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_solarisUserAttr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
