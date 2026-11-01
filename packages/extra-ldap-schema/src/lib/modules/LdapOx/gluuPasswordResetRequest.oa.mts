/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuPasswordResetRequest } from "../LdapOx/id-oc-gluuPasswordResetRequest.va.mjs";

import { creationDate } from "../LdapOx/creationDate.oa.mjs";
import { oxGuid } from "../LdapOx/oxGuid.oa.mjs";
import { personInum } from "../LdapOx/personInum.oa.mjs";
/**
 * @summary gluuPasswordResetRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuPasswordResetRequest OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { creationDate
 *                               | oxGuid
 *                               | personInum }
 *   LDAP-NAME                 {"gluuPasswordResetRequest"}
 *   ID                        id-oc-gluuPasswordResetRequest }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuPasswordResetRequest: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ creationDate, oxGuid, personInum, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuPasswordResetRequest" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuPasswordResetRequest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
