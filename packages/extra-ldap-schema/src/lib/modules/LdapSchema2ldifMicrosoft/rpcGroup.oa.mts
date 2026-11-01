/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
import { id_oc_rpcGroup } from "../LdapSchema2ldifMicrosoft/id-oc-rpcGroup.va.mjs";

import { rpcNsGroup } from "../MSUser/rpcNsGroup.oa.mjs";
import { rpcNsObjectID } from "../MSUser/rpcNsObjectID.oa.mjs";
/**
 * @summary rpcGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   MAY CONTAIN               { rpcNsGroup
 *                               | rpcNsObjectID }
 *   LDAP-NAME                 {"rpcGroup"}
 *   ID                        id-oc-rpcGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ rpcEntry, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rpcNsGroup, rpcNsObjectID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rpcGroup" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rpcGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
