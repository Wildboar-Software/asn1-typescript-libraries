/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxUmaResourcePermission } from "../LdapOx/id-oc-oxUmaResourcePermission.va.mjs";

import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { oxAuthUmaScope } from "../LdapOx/oxAuthUmaScope.oa.mjs";
import { oxConfigurationCode } from "../LdapOx/oxConfigurationCode.oa.mjs";
import { oxResourceSetId } from "../LdapOx/oxResourceSetId.oa.mjs";
import { oxAttributes } from "../LdapOx/oxAttributes.oa.mjs";
import { oxTicket } from "../LdapOx/oxTicket.oa.mjs";
import { oxStatus } from "../LdapOx/oxStatus.oa.mjs";
/**
 * @summary oxUmaResourcePermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxUmaResourcePermission OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { exp
 *                               | del
 *                               | oxAuthUmaScope
 *                               | oxConfigurationCode
 *                               | oxResourceSetId
 *                               | oxAttributes
 *                               | oxTicket
 *                               | oxStatus }
 *   LDAP-NAME                 {"oxUmaResourcePermission"}
 *   ID                        id-oc-oxUmaResourcePermission }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxUmaResourcePermission: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ exp, del, oxAuthUmaScope, oxConfigurationCode, oxResourceSetId, oxAttributes, oxTicket, oxStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxUmaResourcePermission" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxUmaResourcePermission /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
