/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisExecAttr } from "../LdapNisclient/id-oc-solarisExecAttr.va.mjs";
import { solarisAttrKeyValue } from "./solarisAttrKeyValue.oa.mjs";
import { solarisAttrReserved1 } from "./solarisAttrReserved1.oa.mjs";
import { solarisAttrReserved2 } from "./solarisAttrReserved2.oa.mjs";
import { solarisKernelSecurityPolicy } from "./solarisKernelSecurityPolicy.oa.mjs";
import { solarisProfileId } from "./solarisProfileId.oa.mjs";
import { solarisProfileType } from "./solarisProfileType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [solarisAttrKeyValue, solarisAttrReserved1, solarisAttrReserved2, solarisKernelSecurityPolicy, solarisProfileId, solarisProfileType] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["SolarisExecAttr"],
    "&id": id_oc_solarisExecAttr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
