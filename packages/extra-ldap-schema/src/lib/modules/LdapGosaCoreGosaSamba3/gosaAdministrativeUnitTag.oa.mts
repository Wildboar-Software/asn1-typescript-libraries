/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gosaUnitTag } from "../LdapGosaCoreGosaSamba3/gosaUnitTag.oa.mjs";
import { id_oc_gosaAdministrativeUnitTag } from "../LdapGosaCoreGosaSamba3/id-oc-gosaAdministrativeUnitTag.va.mjs";

/**
 * @summary gosaAdministrativeUnitTag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaAdministrativeUnitTag OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { gosaUnitTag }
 *   LDAP-NAME                 {"gosaAdministrativeUnitTag"}
 *   LDAP-DESC                 "Marker for objects below administrational units (v2.7)"
 *   ID                        id-oc-gosaAdministrativeUnitTag }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaAdministrativeUnitTag: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gosaUnitTag, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaAdministrativeUnitTag" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Marker for objects below administrational units (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaAdministrativeUnitTag /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
