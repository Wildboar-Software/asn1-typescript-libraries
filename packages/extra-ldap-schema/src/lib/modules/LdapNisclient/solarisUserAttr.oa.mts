/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisUserAttr } from "../LdapNisclient/id-oc-solarisUserAttr.va.mjs";
import { solarisAttrKeyValue } from "./solarisAttrKeyValue.oa.mjs";
import { solarisAttrReserved1 } from "./solarisAttrReserved1.oa.mjs";
import { solarisAttrReserved2 } from "./solarisAttrReserved2.oa.mjs";
import { solarisUserQualifier } from "./solarisUserQualifier.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [solarisAttrKeyValue, solarisAttrReserved1, solarisAttrReserved2, solarisUserQualifier] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["SolarisUserAttr"],
    "&id": id_oc_solarisUserAttr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
