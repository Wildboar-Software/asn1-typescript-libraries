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
import { id_oc_inetMailingListSubscription } from "../Ldapmigration56imsSchema/id-oc-inetMailingListSubscription.va.mjs";
// export { id_oc_inetMailingListSubscription } from "../Ldapmigration56imsSchema/id-oc-inetMailingListSubscription.va.mjs";


import { mlsubMail } from "../Ldapmigration56imsSchema/mlsubMail.oa.mjs";
import { mlsubDigest } from "../Ldapmigration56imsSchema/mlsubDigest.oa.mjs";
import { mlsubReceiveMail } from "../Ldapmigration56imsSchema/mlsubReceiveMail.oa.mjs";
import { mlsubSuppressDuplicates } from "../Ldapmigration56imsSchema/mlsubSuppressDuplicates.oa.mjs";
import { mlsubJoinDate } from "../Ldapmigration56imsSchema/mlsubJoinDate.oa.mjs";
import { mlsubJoinIPAddress } from "../Ldapmigration56imsSchema/mlsubJoinIPAddress.oa.mjs";
import { mlsubTentativeEmail } from "../Ldapmigration56imsSchema/mlsubTentativeEmail.oa.mjs";
import { mlsubTrack } from "../Ldapmigration56imsSchema/mlsubTrack.oa.mjs";
import { mlsubActionKey } from "../Ldapmigration56imsSchema/mlsubActionKey.oa.mjs";
import { mlsubListIdentifier } from "../Ldapmigration56imsSchema/mlsubListIdentifier.oa.mjs";
import { mlsubRole } from "../Ldapmigration56imsSchema/mlsubRole.oa.mjs";
/**
 * @summary inetMailingListSubscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailingListSubscription OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mlsubListIdentifier
 *                               | mlsubRole }
 *   MAY CONTAIN               { mlsubMail
 *                               | mlsubDigest
 *                               | mlsubReceiveMail
 *                               | mlsubSuppressDuplicates
 *                               | mlsubJoinDate
 *                               | mlsubJoinIPAddress
 *                               | mlsubTentativeEmail
 *                               | mlsubTrack
 *                               | mlsubActionKey }
 *   LDAP-NAME                 {"inetMailingListSubscription"}
 *   LDAP-DESC                 "auxiliary class for mailing list subscriptions"
 *   ID                        id-oc-inetMailingListSubscription }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailingListSubscription: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mlsubListIdentifier, mlsubRole, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mlsubMail, mlsubDigest, mlsubReceiveMail, mlsubSuppressDuplicates, mlsubJoinDate, mlsubJoinIPAddress, mlsubTentativeEmail, mlsubTrack, mlsubActionKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetMailingListSubscription" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for mailing list subscriptions" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailingListSubscription /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
