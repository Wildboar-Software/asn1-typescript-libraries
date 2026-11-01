/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { id_oc_ftUserAttrs } from "../LdapApacheFortress/id-oc-ftUserAttrs.va.mjs";

import { ftRC } from "../LdapApacheFortress/ftRC.oa.mjs";
import { ftRA } from "../LdapApacheFortress/ftRA.oa.mjs";
import { ftARC } from "../LdapApacheFortress/ftARC.oa.mjs";
import { ftARA } from "../LdapApacheFortress/ftARA.oa.mjs";
import { ftCstr } from "../LdapApacheFortress/ftCstr.oa.mjs";
import { ftSystem } from "../LdapApacheFortress/ftSystem.oa.mjs";
/**
 * @summary ftUserAttrs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftUserAttrs OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ftId }
 *   MAY CONTAIN               { ftRC
 *                               | ftRA
 *                               | ftARC
 *                               | ftARA
 *                               | ftCstr
 *                               | ftSystem }
 *   LDAP-NAME                 {"ftUserAttrs"}
 *   LDAP-DESC                 "Fortress User Attribute AUX Object Class"
 *   ID                        id-oc-ftUserAttrs }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftUserAttrs: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftRC, ftRA, ftARC, ftARA, ftCstr, ftSystem, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftUserAttrs" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress User Attribute AUX Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftUserAttrs /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
