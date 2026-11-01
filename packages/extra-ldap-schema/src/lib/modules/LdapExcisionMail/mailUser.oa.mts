/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
// export { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_mailUser } from "../LdapExcisionMail/id-oc-mailUser.va.mjs";
// export { id_oc_mailUser } from "../LdapExcisionMail/id-oc-mailUser.va.mjs";


import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { mailUID } from "../LdapExcisionMail/mailUID.oa.mjs";
import { mailGID } from "../LdapExcisionMail/mailGID.oa.mjs";
import { mailQuota } from "../LdapExcisionMail/mailQuota.oa.mjs";
import { mailSetting } from "../LdapExcisionMail/mailSetting.oa.mjs";
import { aliasAddress } from "../LdapExcisionMail/aliasAddress.oa.mjs";
import { backupAddress } from "../LdapExcisionMail/backupAddress.oa.mjs";
import { accountStatus } from "../LdapExcisionMail/accountStatus.oa.mjs";
import { allowedNetwork } from "../LdapExcisionMail/allowedNetwork.oa.mjs";
import { allowList } from "../LdapExcisionMail/allowList.oa.mjs";
import { blockList } from "../LdapExcisionMail/blockList.oa.mjs";
/**
 * @summary mailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mail }
 *   MAY CONTAIN               { commonName
 *                               | givenName
 *                               | surname
 *                               | userPassword
 *                               | homeDirectory
 *                               | mailUID
 *                               | mailGID
 *                               | mailQuota
 *                               | mailSetting
 *                               | aliasAddress
 *                               | backupAddress
 *                               | accountStatus
 *                               | allowedNetwork
 *                               | allowList
 *                               | blockList }
 *   LDAP-NAME                 {"mailUser"}
 *   LDAP-DESC                 "Abstraction of a mail user"
 *   ID                        id-oc-mailUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, givenName, surname, userPassword, homeDirectory, mailUID, mailGID, mailQuota, mailSetting, aliasAddress, backupAddress, accountStatus, allowedNetwork, allowList, blockList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a mail user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
