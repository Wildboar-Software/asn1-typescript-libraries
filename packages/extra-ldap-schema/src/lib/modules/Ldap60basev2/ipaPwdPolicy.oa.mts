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
import { id_oc_ipaPwdPolicy } from "../Ldap60basev2/id-oc-ipaPwdPolicy.va.mjs";
// export { id_oc_ipaPwdPolicy } from "../Ldap60basev2/id-oc-ipaPwdPolicy.va.mjs";


import { ipaPwdMaxRepeat } from "../Ldap60basev2/ipaPwdMaxRepeat.oa.mjs";
import { ipaPwdMaxSequence } from "../Ldap60basev2/ipaPwdMaxSequence.oa.mjs";
import { ipaPwdDictCheck } from "../Ldap60basev2/ipaPwdDictCheck.oa.mjs";
import { ipaPwdUserCheck } from "../Ldap60basev2/ipaPwdUserCheck.oa.mjs";
import { ipaPwdDcredit } from "../Ldap60basev2/ipaPwdDcredit.oa.mjs";
import { ipaPwdUcredit } from "../Ldap60basev2/ipaPwdUcredit.oa.mjs";
import { ipaPwdLcredit } from "../Ldap60basev2/ipaPwdLcredit.oa.mjs";
import { ipaPwdOcredit } from "../Ldap60basev2/ipaPwdOcredit.oa.mjs";
import { passwordGraceLimit } from "../LdapCommon389/passwordGraceLimit.oa.mjs";
/**
 * @summary ipaPwdPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaPwdPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { ipaPwdMaxRepeat
 *                               | ipaPwdMaxSequence
 *                               | ipaPwdDictCheck
 *                               | ipaPwdUserCheck
 *                               | ipaPwdDcredit
 *                               | ipaPwdUcredit
 *                               | ipaPwdLcredit
 *                               | ipaPwdOcredit
 *                               | passwordGraceLimit }
 *   LDAP-NAME                 {"ipaPwdPolicy"}
 *   LDAP-DESC                 "IPA Password policy object class"
 *   ID                        id-oc-ipaPwdPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaPwdPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ipaPwdMaxRepeat, ipaPwdMaxSequence, ipaPwdDictCheck, ipaPwdUserCheck, ipaPwdDcredit, ipaPwdUcredit, ipaPwdLcredit, ipaPwdOcredit, passwordGraceLimit, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaPwdPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA Password policy object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaPwdPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
