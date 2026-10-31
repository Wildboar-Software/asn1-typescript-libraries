/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_vdapcontainer } from "../LdapOx/id-oc-vdapcontainer.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";

/**
 * @summary vdapcontainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vdapcontainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName }
 *   LDAP-NAME                 {"vdapcontainer"}
 *   ID                        id-oc-vdapcontainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vdapcontainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["vdapcontainer"],
    "&id": id_oc_vdapcontainer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
