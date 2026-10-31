/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxRadiusServerConfiguration } from "../LdapRadius/id-oc-oxRadiusServerConfiguration.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { oxRadiusAccountingPort } from "./oxRadiusAccountingPort.oa.mjs";
import { oxRadiusAcrValue } from "./oxRadiusAcrValue.oa.mjs";
import { oxRadiusAuthScope } from "./oxRadiusAuthScope.oa.mjs";
import { oxRadiusAuthenticationPort } from "./oxRadiusAuthenticationPort.oa.mjs";
import { oxRadiusAuthenticationTimeout } from "./oxRadiusAuthenticationTimeout.oa.mjs";
import { oxRadiusListenInterface } from "./oxRadiusListenInterface.oa.mjs";
import { oxRadiusOpenIdBaseUrl } from "./oxRadiusOpenIdBaseUrl.oa.mjs";
import { oxRadiusOpenidPassword } from "./oxRadiusOpenidPassword.oa.mjs";
import { oxRadiusOpenidUsername } from "./oxRadiusOpenidUsername.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName, oxRadiusListenInterface, oxRadiusAuthenticationPort, oxRadiusAccountingPort, oxRadiusOpenIdBaseUrl, oxRadiusOpenidUsername, oxRadiusOpenidPassword, oxRadiusAcrValue, oxRadiusAuthScope, oxRadiusAuthenticationTimeout] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxRadiusServerConfiguration"],
    "&id": id_oc_oxRadiusServerConfiguration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
