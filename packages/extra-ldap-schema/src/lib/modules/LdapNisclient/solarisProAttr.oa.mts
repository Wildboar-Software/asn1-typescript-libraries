/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisProAttr } from "../LdapNisclient/id-oc-solarisProAttr.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { solarisAttrKeyValue } from "./solarisAttrKeyValue.oa.mjs";
import { solarisAttrLongDesc } from "./solarisAttrLongDesc.oa.mjs";
import { solarisAttrReserved1 } from "./solarisAttrReserved1.oa.mjs";
import { solarisAttrReserved2 } from "./solarisAttrReserved2.oa.mjs";

/**
 * @summary solarisProAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * solarisProAttr OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { solarisAttrKeyValue
 *                               | solarisAttrLongDesc
 *                               | solarisAttrReserved1
 *                               | solarisAttrReserved2 }
 *   LDAP-NAME                 {"SolarisProAttr"}
 *   ID                        id-oc-solarisProAttr }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const solarisProAttr: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [solarisAttrKeyValue, solarisAttrLongDesc, solarisAttrReserved1, solarisAttrReserved2] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["SolarisProAttr"],
    "&id": id_oc_solarisProAttr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
