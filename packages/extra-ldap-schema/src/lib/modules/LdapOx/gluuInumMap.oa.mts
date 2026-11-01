/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuInumMap } from "../LdapOx/id-oc-gluuInumMap.va.mjs";

import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { primaryKeyAttrName } from "../LdapOx/primaryKeyAttrName.oa.mjs";
import { primaryKeyValue } from "../LdapOx/primaryKeyValue.oa.mjs";
import { secondaryKeyAttrName } from "../LdapOx/secondaryKeyAttrName.oa.mjs";
import { secondaryKeyValue } from "../LdapOx/secondaryKeyValue.oa.mjs";
import { tertiaryKeyAttrName } from "../LdapOx/tertiaryKeyAttrName.oa.mjs";
import { tertiaryKeyValue } from "../LdapOx/tertiaryKeyValue.oa.mjs";
/**
 * @summary gluuInumMap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuInumMap OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { gluuStatus
 *                               | inum
 *                               | primaryKeyAttrName
 *                               | primaryKeyValue
 *                               | secondaryKeyAttrName
 *                               | secondaryKeyValue
 *                               | tertiaryKeyAttrName
 *                               | tertiaryKeyValue }
 *   LDAP-NAME                 {"gluuInumMap"}
 *   ID                        id-oc-gluuInumMap }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuInumMap: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gluuStatus, inum, primaryKeyAttrName, primaryKeyValue, secondaryKeyAttrName, secondaryKeyValue, tertiaryKeyAttrName, tertiaryKeyValue, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuInumMap" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuInumMap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
