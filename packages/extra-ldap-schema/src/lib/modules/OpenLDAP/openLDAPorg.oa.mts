/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_openldap_oc } from "../OpenLDAP/id-openldap-oc.va.mjs";
import { buildingName } from "../Cosine/buildingName.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { organization } from "../SelectedObjectClasses/organization.oa.mjs";
// export { id_openldap_oc } from "../OpenLDAP/id-openldap-oc.va.mjs";


/**
 * @summary openLDAPorg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * openLDAPorg OBJECT-CLASS ::= {
 *     SUBCLASS OF     {organization}
 *     KIND            structural
 *     MAY CONTAIN     {buildingName | displayName | labeledURI}
 *     LDAP-NAME        {"OpenLDAPorg"}
 *     LDAP-DESC       "OpenLDAP Organizational Object"
 *     ID                { id-openldap-oc 3 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const openLDAPorg: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organization, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ buildingName, displayName, labeledURI, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "OpenLDAPorg" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "OpenLDAP Organizational Object" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([3,], id_openldap_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
