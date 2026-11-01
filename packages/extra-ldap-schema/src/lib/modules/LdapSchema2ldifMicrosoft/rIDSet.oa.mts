/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rIDSet } from "../LdapSchema2ldifMicrosoft/id-oc-rIDSet.va.mjs";

import { rIDAllocationPool } from "../MSUser/rIDAllocationPool.oa.mjs";
import { rIDPreviousAllocationPool } from "../MSUser/rIDPreviousAllocationPool.oa.mjs";
import { rIDUsedPool } from "../MSUser/rIDUsedPool.oa.mjs";
import { rIDNextRID } from "../MSUser/rIDNextRID.oa.mjs";
/**
 * @summary rIDSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rIDSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { rIDAllocationPool
 *                               | rIDPreviousAllocationPool
 *                               | rIDUsedPool
 *                               | rIDNextRID }
 *   LDAP-NAME                 {"rIDSet"}
 *   ID                        id-oc-rIDSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rIDSet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ rIDAllocationPool, rIDPreviousAllocationPool, rIDUsedPool, rIDNextRID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rIDSet" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rIDSet /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
