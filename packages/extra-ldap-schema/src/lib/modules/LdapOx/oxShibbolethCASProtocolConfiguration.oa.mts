/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxShibbolethCASProtocolConfiguration } from "../LdapOx/id-oc-oxShibbolethCASProtocolConfiguration.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { oxConfApplication } from "../LdapOx/oxConfApplication.oa.mjs";
import { oxRevision } from "../LdapOx/oxRevision.oa.mjs";
// export { id_oc_oxShibbolethCASProtocolConfiguration } from "../LdapOx/id-oc-oxShibbolethCASProtocolConfiguration.va.mjs";


/**
 * @summary oxShibbolethCASProtocolConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxShibbolethCASProtocolConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | uniqueIdentifier
 *                               | inum
 *                               | oxConfApplication
 *                               | oxRevision }
 *   LDAP-NAME                 {"oxShibbolethCASProtocolConfiguration"}
 *   ID                        id-oc-oxShibbolethCASProtocolConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxShibbolethCASProtocolConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationalUnitName, uniqueIdentifier, inum, oxConfApplication, oxRevision, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxShibbolethCASProtocolConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxShibbolethCASProtocolConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
