/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
import { id_oc_rpcProfileElement } from "../LdapSchema2ldifMicrosoft/id-oc-rpcProfileElement.va.mjs";

import { rpcNsProfileEntry } from "../MSUser/rpcNsProfileEntry.oa.mjs";
import { rpcNsAnnotation } from "../MSUser/rpcNsAnnotation.oa.mjs";
import { rpcNsInterfaceID } from "../MSUser/rpcNsInterfaceID.oa.mjs";
import { rpcNsPriority } from "../MSUser/rpcNsPriority.oa.mjs";
/**
 * @summary rpcProfileElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcProfileElement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   MUST CONTAIN              { rpcNsInterfaceID
 *                               | rpcNsPriority }
 *   MAY CONTAIN               { rpcNsProfileEntry
 *                               | rpcNsAnnotation }
 *   LDAP-NAME                 {"rpcProfileElement"}
 *   ID                        id-oc-rpcProfileElement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcProfileElement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ rpcEntry, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ rpcNsInterfaceID, rpcNsPriority, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rpcNsProfileEntry, rpcNsAnnotation, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rpcProfileElement" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rpcProfileElement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
