/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_vdlabel } from "../LdapOx/id-oc-vdlabel.va.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";

/**
 * @summary vdlabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vdlabel OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationName }
 *   LDAP-NAME                 {"vdlabel"}
 *   ID                        id-oc-vdlabel }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vdlabel: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["vdlabel"],
    "&id": id_oc_vdlabel /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
