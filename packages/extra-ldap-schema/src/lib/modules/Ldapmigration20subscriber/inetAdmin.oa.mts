/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { aci } from "../LdapAci/aci.oa.mjs";
import { id_oc_inetAdmin } from "../Ldapmigration20subscriber/id-oc-inetAdmin.va.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { adminRole } from "./adminRole.oa.mjs";

/**
 * @summary inetAdmin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetAdmin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { aci
 *                               | memberOf
 *                               | adminRole }
 *   LDAP-NAME                 {"inetAdmin"}
 *   LDAP-DESC                 "Marker for an administrative group or user"
 *   ID                        id-oc-inetAdmin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetAdmin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [aci, memberOf, adminRole] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetAdmin"],
    "&ldapDesc": "Marker for an administrative group or user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetAdmin /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
