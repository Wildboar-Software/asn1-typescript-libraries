/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_netscapeServer } from "../LdapCommon389/id-oc-netscapeServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { adminUrl } from "./adminUrl.oa.mjs";
import { administratorContactInfo } from "./administratorContactInfo.oa.mjs";
import { installationTimeStamp } from "./installationTimeStamp.oa.mjs";
import { serverHostName } from "./serverHostName.oa.mjs";
import { serverProductName } from "./serverProductName.oa.mjs";
import { serverRoot } from "./serverRoot.oa.mjs";
import { serverVersionNumber } from "./serverVersionNumber.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, serverRoot, serverProductName, serverVersionNumber, installationTimeStamp, administratorContactInfo, userPassword, adminUrl, serverHostName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["netscapeServer"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_netscapeServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
