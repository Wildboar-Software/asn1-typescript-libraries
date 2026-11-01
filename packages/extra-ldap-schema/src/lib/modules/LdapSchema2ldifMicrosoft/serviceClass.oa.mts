/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { serviceClassInfo } from "../MSUser/serviceClassInfo.oa.mjs";
import { id_oc_serviceClass } from "../LdapSchema2ldifMicrosoft/id-oc-serviceClass.va.mjs";
import { displayName } from "../LdapSchema2ldifMicrosoft/displayName.oa.mjs";
import { serviceClassID } from "../MSUser/serviceClassID.oa.mjs";


/**
 * @summary serviceClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceClass OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MUST CONTAIN              { displayName
 *                               | serviceClassID }
 *   MAY CONTAIN               { serviceClassInfo }
 *   LDAP-NAME                 {"serviceClass"}
 *   ID                        id-oc-serviceClass }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceClass: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ displayName, serviceClassID, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ serviceClassInfo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "serviceClass" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_serviceClass /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

