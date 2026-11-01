/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_mailRecipient } from "../LdapSchema2ldifMicrosoft/id-oc-mailRecipient.va.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { info } from "../LdapSchema2ldifMicrosoft/info.oa.mjs";
import { garbageCollPeriod } from "../MSUser/garbageCollPeriod.oa.mjs";
import { showInAddressBook } from "../MSUser/showInAddressBook.oa.mjs";
import { userCert } from "../MSUser/userCert.oa.mjs";
import { legacyExchangeDN } from "../MSUser/legacyExchangeDN.oa.mjs";
import { userSMIMECertificate } from "../H323-X500-Schema/userSMIMECertificate.oa.mjs";
import { textEncodedORAddress } from "../LdapSchema2ldifCosine/textEncodedORAddress.oa.mjs";
// export { id_oc_mailRecipient } from "../LdapSchema2ldifMicrosoft/id-oc-mailRecipient.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ telephoneNumber, userCertificate, info, garbageCollPeriod, showInAddressBook, userCert, legacyExchangeDN, userSMIMECertificate, textEncodedORAddress, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailRecipient" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailRecipient /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
