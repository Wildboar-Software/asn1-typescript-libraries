/* eslint-disable */
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { userSMIMECertificate } from "../H323-X500-Schema/userSMIMECertificate.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { textEncodedORAddress } from "../LdapSchema2ldifCosine/textEncodedORAddress.oa.mjs";
import { id_oc_mailRecipient } from "../LdapSchema2ldifMicrosoft/id-oc-mailRecipient.va.mjs";
import { garbageCollPeriod } from "../MSUser/garbageCollPeriod.oa.mjs";
import { legacyExchangeDN } from "../MSUser/legacyExchangeDN.oa.mjs";
import { showInAddressBook } from "../MSUser/showInAddressBook.oa.mjs";
import { userCert } from "../MSUser/userCert.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { info } from "./info.oa.mjs";

/**
 * @summary mailRecipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailRecipient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { telephoneNumber
 *                               | userCertificate
 *                               | info
 *                               | garbageCollPeriod
 *                               | showInAddressBook
 *                               | userCert
 *                               | legacyExchangeDN
 *                               | userSMIMECertificate
 *                               | textEncodedORAddress }
 *   LDAP-NAME                 {"mailRecipient"}
 *   ID                        id-oc-mailRecipient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailRecipient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [telephoneNumber, userCertificate, info, garbageCollPeriod, showInAddressBook, userCert, legacyExchangeDN, userSMIMECertificate, textEncodedORAddress] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mailRecipient"],
    "&id": id_oc_mailRecipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
