/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_customer } from "../LdapIspenv/id-oc-customer.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { custID } from "./custID.oa.mjs";

/**
 * @summary customer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * customer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { custID
 *                               | postalAddress
 *                               | telephoneNumber
 *                               | facsimileTelephoneNumber
 *                               | streetAddress
 *                               | postalCode
 *                               | description
 *                               | mail }
 *   LDAP-NAME                 {"customer"}
 *   LDAP-DESC                 "Customer information (container class)"
 *   ID                        id-oc-customer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const customer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [custID, postalAddress, telephoneNumber, facsimileTelephoneNumber, streetAddress, postalCode, description, mail] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["customer"],
    "&ldapDesc": "Customer information (container class)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_customer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
