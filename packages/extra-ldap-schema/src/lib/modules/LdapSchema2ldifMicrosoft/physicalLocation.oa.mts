/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { id_oc_physicalLocation } from "../LdapSchema2ldifMicrosoft/id-oc-physicalLocation.va.mjs";


/**
 * @summary physicalLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * physicalLocation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality }
 *   MAY CONTAIN               { managedBy }
 *   LDAP-NAME                 {"physicalLocation"}
 *   ID                        id-oc-physicalLocation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const physicalLocation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ locality, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ managedBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "physicalLocation" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_physicalLocation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

