/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxRadiusServerConfiguration } from "../LdapRadius/id-oc-oxRadiusServerConfiguration.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { oxRadiusListenInterface } from "../LdapRadius/oxRadiusListenInterface.oa.mjs";
import { oxRadiusAuthenticationPort } from "../LdapRadius/oxRadiusAuthenticationPort.oa.mjs";
import { oxRadiusAccountingPort } from "../LdapRadius/oxRadiusAccountingPort.oa.mjs";
import { oxRadiusOpenIdBaseUrl } from "../LdapRadius/oxRadiusOpenIdBaseUrl.oa.mjs";
import { oxRadiusOpenidUsername } from "../LdapRadius/oxRadiusOpenidUsername.oa.mjs";
import { oxRadiusOpenidPassword } from "../LdapRadius/oxRadiusOpenidPassword.oa.mjs";
import { oxRadiusAcrValue } from "../LdapRadius/oxRadiusAcrValue.oa.mjs";
import { oxRadiusAuthScope } from "../LdapRadius/oxRadiusAuthScope.oa.mjs";
import { oxRadiusAuthenticationTimeout } from "../LdapRadius/oxRadiusAuthenticationTimeout.oa.mjs";
// export { id_oc_oxRadiusServerConfiguration } from "../LdapRadius/id-oc-oxRadiusServerConfiguration.va.mjs";


/**
 * @summary oxRadiusServerConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxRadiusServerConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | oxRadiusListenInterface
 *                               | oxRadiusAuthenticationPort
 *                               | oxRadiusAccountingPort
 *                               | oxRadiusOpenIdBaseUrl
 *                               | oxRadiusOpenidUsername
 *                               | oxRadiusOpenidPassword
 *                               | oxRadiusAcrValue
 *                               | oxRadiusAuthScope
 *                               | oxRadiusAuthenticationTimeout }
 *   LDAP-NAME                 {"oxRadiusServerConfiguration"}
 *   ID                        id-oc-oxRadiusServerConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxRadiusServerConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationalUnitName, oxRadiusListenInterface, oxRadiusAuthenticationPort, oxRadiusAccountingPort, oxRadiusOpenIdBaseUrl, oxRadiusOpenidUsername, oxRadiusOpenidPassword, oxRadiusAcrValue, oxRadiusAuthScope, oxRadiusAuthenticationTimeout, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxRadiusServerConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxRadiusServerConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
