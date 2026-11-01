/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_inetResource } from "../Ldapmigration60iplanetCalendar/id-oc-inetResource.va.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { inetResourceStatus } from "../Ldapmigration60iplanetCalendar/inetResourceStatus.oa.mjs";


/**
 * @summary inetResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { telephoneNumber
 *                               | facsimileTelephoneNumber
 *                               | mail
 *                               | postalAddress
 *                               | inetResourceStatus }
 *   LDAP-NAME                 {"inetResource"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-inetResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetResource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ telephoneNumber, facsimileTelephoneNumber, mail, postalAddress, inetResourceStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetResource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

