/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { id_oc_kmr_orgRole } from "../LdapUser/id-oc-kmr-orgRole.va.mjs";
import { orgCode } from "../LdapUser/orgCode.oa.mjs";
import { locationCode } from "../LdapUser/locationCode.oa.mjs";


/**
 * @summary kmr_orgRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-orgRole OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MAY CONTAIN               { orgCode
 *                               | locationCode }
 *   LDAP-NAME                 {"kmr-orgRole"}
 *   ID                        id-oc-kmr-orgRole }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_orgRole: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalRole, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ orgCode, locationCode, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kmr-orgRole" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kmr_orgRole /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

