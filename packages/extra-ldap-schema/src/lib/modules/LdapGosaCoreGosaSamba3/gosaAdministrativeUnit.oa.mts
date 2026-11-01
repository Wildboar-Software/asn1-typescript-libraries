/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gosaUnitTag } from "../LdapGosaCoreGosaSamba3/gosaUnitTag.oa.mjs";
import { id_oc_gosaAdministrativeUnit } from "../LdapGosaCoreGosaSamba3/id-oc-gosaAdministrativeUnit.va.mjs";


/**
 * @summary gosaAdministrativeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaAdministrativeUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { gosaUnitTag }
 *   LDAP-NAME                 {"gosaAdministrativeUnit"}
 *   LDAP-DESC                 "Marker for administrational units (v2.7)"
 *   ID                        id-oc-gosaAdministrativeUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaAdministrativeUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gosaUnitTag, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaAdministrativeUnit" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Marker for administrational units (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaAdministrativeUnit /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

