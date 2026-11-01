/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_serviceSecurityObject } from "../Ldaptor/id-oc-serviceSecurityObject.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { validFrom } from "../Ldaptor/validFrom.oa.mjs";
import { validUntil } from "../Ldaptor/validUntil.oa.mjs";


/**
 * @summary serviceSecurityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceSecurityObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | owner
 *                               | userPassword }
 *   MAY CONTAIN               { validFrom
 *                               | validUntil }
 *   LDAP-NAME                 {"serviceSecurityObject"}
 *   LDAP-DESC                 "A service-specific authentication method"
 *   ID                        id-oc-serviceSecurityObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceSecurityObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, owner, userPassword, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ validFrom, validUntil, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "serviceSecurityObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A service-specific authentication method" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_serviceSecurityObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

