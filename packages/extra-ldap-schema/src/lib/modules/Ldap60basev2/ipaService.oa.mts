/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaService } from "../Ldap60basev2/id-oc-ipaService.va.mjs";

import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { managedBy } from "../Ldap60basev2/managedBy.oa.mjs";
import { ipaKrbAuthzData } from "../Ldap60basev2/ipaKrbAuthzData.oa.mjs";
/**
 * @summary ipaService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { memberOf
 *                               | managedBy
 *                               | ipaKrbAuthzData }
 *   LDAP-NAME                 {"ipaService"}
 *   LDAP-DESC                 "IPA service objectclass"
 *   ID                        id-oc-ipaService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberOf, managedBy, ipaKrbAuthzData, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA service objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
