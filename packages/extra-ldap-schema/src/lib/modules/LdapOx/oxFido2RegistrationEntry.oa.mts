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
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxFido2RegistrationEntry } from "../LdapOx/id-oc-oxFido2RegistrationEntry.va.mjs";
// export { id_oc_oxFido2RegistrationEntry } from "../LdapOx/id-oc-oxFido2RegistrationEntry.va.mjs";


import { oxId } from "../LdapOx/oxId.oa.mjs";
import { creationDate } from "../LdapOx/creationDate.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { oxSessionStateId } from "../LdapOx/oxSessionStateId.oa.mjs";
import { oxCodeChallenge } from "../LdapOx/oxCodeChallenge.oa.mjs";
import { oxCodeChallengeHash } from "../LdapOx/oxCodeChallengeHash.oa.mjs";
import { oxPublicKeyId } from "../LdapOx/oxPublicKeyId.oa.mjs";
import { personInum } from "../LdapOx/personInum.oa.mjs";
import { oxRegistrationData } from "../LdapOx/oxRegistrationData.oa.mjs";
import { oxDeviceNotificationConf } from "../LdapOx/oxDeviceNotificationConf.oa.mjs";
import { oxCounter } from "../LdapOx/oxCounter.oa.mjs";
import { oxStatus } from "../LdapOx/oxStatus.oa.mjs";
/**
 * @summary oxFido2RegistrationEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxFido2RegistrationEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | creationDate
 *                               | displayName
 *                               | oxSessionStateId
 *                               | oxCodeChallenge
 *                               | oxCodeChallengeHash
 *                               | oxPublicKeyId
 *                               | personInum
 *                               | oxRegistrationData
 *                               | oxDeviceNotificationConf
 *                               | oxCounter
 *                               | oxStatus }
 *   LDAP-NAME                 {"oxFido2RegistrationEntry"}
 *   ID                        id-oc-oxFido2RegistrationEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxFido2RegistrationEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, creationDate, displayName, oxSessionStateId, oxCodeChallenge, oxCodeChallengeHash, oxPublicKeyId, personInum, oxRegistrationData, oxDeviceNotificationConf, oxCounter, oxStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxFido2RegistrationEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxFido2RegistrationEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
