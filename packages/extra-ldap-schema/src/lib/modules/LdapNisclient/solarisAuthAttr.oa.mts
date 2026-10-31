/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisAuthAttr } from "../LdapNisclient/id-oc-solarisAuthAttr.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { solarisAttrKeyValue } from "./solarisAttrKeyValue.oa.mjs";
import { solarisAttrLongDesc } from "./solarisAttrLongDesc.oa.mjs";
import { solarisAttrReserved1 } from "./solarisAttrReserved1.oa.mjs";
import { solarisAttrReserved2 } from "./solarisAttrReserved2.oa.mjs";
import { solarisAttrShortDesc } from "./solarisAttrShortDesc.oa.mjs";

/**
 * @summary solarisAuthAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * solarisAuthAttr OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { solarisAttrKeyValue
 *                               | solarisAttrLongDesc
 *                               | solarisAttrReserved1
 *                               | solarisAttrReserved2
 *                               | solarisAttrShortDesc }
 *   LDAP-NAME                 {"SolarisAuthAttr"}
 *   ID                        id-oc-solarisAuthAttr }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const solarisAuthAttr: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [solarisAttrKeyValue, solarisAttrLongDesc, solarisAttrReserved1, solarisAttrReserved2, solarisAttrShortDesc] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["SolarisAuthAttr"],
    "&id": id_oc_solarisAuthAttr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
