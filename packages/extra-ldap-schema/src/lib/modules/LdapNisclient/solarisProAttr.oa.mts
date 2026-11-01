/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_solarisProAttr } from "../LdapNisclient/id-oc-solarisProAttr.va.mjs";
import { solarisAttrKeyValue } from "../LdapNisclient/solarisAttrKeyValue.oa.mjs";
import { solarisAttrLongDesc } from "../LdapNisclient/solarisAttrLongDesc.oa.mjs";
import { solarisAttrReserved1 } from "../LdapNisclient/solarisAttrReserved1.oa.mjs";
import { solarisAttrReserved2 } from "../LdapNisclient/solarisAttrReserved2.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ solarisAttrKeyValue, solarisAttrLongDesc, solarisAttrReserved1, solarisAttrReserved2, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "SolarisProAttr" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_solarisProAttr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

