/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisExecAttr } from "../LdapNisclient/id-oc-solarisExecAttr.va.mjs";

import { solarisAttrKeyValue } from "../LdapNisclient/solarisAttrKeyValue.oa.mjs";
import { solarisAttrReserved1 } from "../LdapNisclient/solarisAttrReserved1.oa.mjs";
import { solarisAttrReserved2 } from "../LdapNisclient/solarisAttrReserved2.oa.mjs";
import { solarisKernelSecurityPolicy } from "../LdapNisclient/solarisKernelSecurityPolicy.oa.mjs";
import { solarisProfileId } from "../LdapNisclient/solarisProfileId.oa.mjs";
import { solarisProfileType } from "../LdapNisclient/solarisProfileType.oa.mjs";
/**
 * @summary solarisExecAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * solarisExecAttr OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { solarisAttrKeyValue
 *                               | solarisAttrReserved1
 *                               | solarisAttrReserved2
 *                               | solarisKernelSecurityPolicy
 *                               | solarisProfileId
 *                               | solarisProfileType }
 *   LDAP-NAME                 {"SolarisExecAttr"}
 *   ID                        id-oc-solarisExecAttr }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const solarisExecAttr: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ solarisAttrKeyValue, solarisAttrReserved1, solarisAttrReserved2, solarisKernelSecurityPolicy, solarisProfileId, solarisProfileType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "SolarisExecAttr" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_solarisExecAttr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
