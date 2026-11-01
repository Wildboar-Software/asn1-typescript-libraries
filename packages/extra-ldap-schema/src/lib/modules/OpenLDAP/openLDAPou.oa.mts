/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_openldap_oc } from "../OpenLDAP/id-openldap-oc.va.mjs";
import { buildingName } from "../Cosine/buildingName.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";


/**
 * @summary openLDAPou
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * openLDAPou OBJECT-CLASS ::= {
 *     SUBCLASS OF     {organizationalUnit}
 *     KIND            structural
 *     MAY CONTAIN     {buildingName | displayName | labeledURI | organizationName}
 *     LDAP-NAME        {"OpenLDAPou"}
 *     LDAP-DESC       "OpenLDAP Organizational Unit Object"
 *     ID                { id-openldap-oc 4 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const openLDAPou: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalUnit, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ buildingName, displayName, labeledURI, organizationName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "OpenLDAPou" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "OpenLDAP Organizational Unit Object" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([4,], id_openldap_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

