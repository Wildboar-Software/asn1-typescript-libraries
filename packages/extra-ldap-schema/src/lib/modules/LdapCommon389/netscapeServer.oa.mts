/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_netscapeServer } from "../LdapCommon389/id-oc-netscapeServer.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { serverRoot } from "../LdapCommon389/serverRoot.oa.mjs";
import { serverProductName } from "../LdapCommon389/serverProductName.oa.mjs";
import { serverVersionNumber } from "../LdapCommon389/serverVersionNumber.oa.mjs";
import { installationTimeStamp } from "../LdapCommon389/installationTimeStamp.oa.mjs";
import { administratorContactInfo } from "../LdapCommon389/administratorContactInfo.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { adminUrl } from "../LdapCommon389/adminUrl.oa.mjs";
import { serverHostName } from "../LdapCommon389/serverHostName.oa.mjs";
/**
 * @summary netscapeServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * netscapeServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | serverRoot
 *                               | serverProductName
 *                               | serverVersionNumber
 *                               | installationTimeStamp
 *                               | administratorContactInfo
 *                               | userPassword
 *                               | adminUrl
 *                               | serverHostName }
 *   LDAP-NAME                 {"netscapeServer"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-netscapeServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const netscapeServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, serverRoot, serverProductName, serverVersionNumber, installationTimeStamp, administratorContactInfo, userPassword, adminUrl, serverHostName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "netscapeServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_netscapeServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
