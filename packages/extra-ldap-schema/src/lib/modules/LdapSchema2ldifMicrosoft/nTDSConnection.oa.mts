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
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_nTDSConnection } from "../LdapSchema2ldifMicrosoft/id-oc-nTDSConnection.va.mjs";

import { generatedConnection } from "../MSUser/generatedConnection.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";
import { transportType } from "../MSUser/transportType.oa.mjs";
import { mS_DS_ReplicatesNCReason } from "../MSUser/mS-DS-ReplicatesNCReason.oa.mjs";
import { enabledConnection } from "../MSUser/enabledConnection.oa.mjs";
import { fromServer } from "../MSUser/fromServer.oa.mjs";
import { options } from "../MSUser/options.oa.mjs";
/**
 * @summary nTDSConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTDSConnection OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MUST CONTAIN              { enabledConnection
 *                               | fromServer
 *                               | options }
 *   MAY CONTAIN               { generatedConnection
 *                               | schedule
 *                               | transportType
 *                               | mS-DS-ReplicatesNCReason }
 *   LDAP-NAME                 {"nTDSConnection"}
 *   ID                        id-oc-nTDSConnection }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTDSConnection: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ enabledConnection, fromServer, options, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ generatedConnection, schedule, transportType, mS_DS_ReplicatesNCReason, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTDSConnection" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTDSConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
