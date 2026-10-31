/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_kmr_orgUnit } from "../LdapUser/id-oc-kmr-orgUnit.va.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
import { locationCode } from "./locationCode.oa.mjs";
import { orgCode } from "./orgCode.oa.mjs";

/**
 * @summary kmr_orgUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-orgUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MAY CONTAIN               { orgCode
 *                               | locationCode }
 *   LDAP-NAME                 {"kmr-orgUnit"}
 *   ID                        id-oc-kmr-orgUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_orgUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalUnit] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [orgCode, locationCode] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kmr-orgUnit"],
    "&id": id_oc_kmr_orgUnit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
