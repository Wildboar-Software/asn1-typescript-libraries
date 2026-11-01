/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
import { id_oc_serviceInstance } from "../LdapSchema2ldifMicrosoft/id-oc-serviceInstance.va.mjs";

import { winsockAddresses } from "../MSUser/winsockAddresses.oa.mjs";
import { serviceInstanceVersion } from "../MSUser/serviceInstanceVersion.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { serviceClassID } from "../MSUser/serviceClassID.oa.mjs";
/**
 * @summary serviceInstance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceInstance OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { displayName
 *                               | serviceClassID }
 *   MAY CONTAIN               { winsockAddresses
 *                               | serviceInstanceVersion }
 *   LDAP-NAME                 {"serviceInstance"}
 *   ID                        id-oc-serviceInstance }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceInstance: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ connectionPoint, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ displayName, serviceClassID, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ winsockAddresses, serviceInstanceVersion, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "serviceInstance" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_serviceInstance /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
