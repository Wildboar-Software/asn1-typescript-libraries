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
import { id_oc_domainPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-domainPolicy.va.mjs";

import { authenticationOptions } from "../MSUser/authenticationOptions.oa.mjs";
import { forceLogoff } from "../MSUser/forceLogoff.oa.mjs";
import { defaultLocalPolicyObject } from "../MSUser/defaultLocalPolicyObject.oa.mjs";
import { lockoutDuration } from "../MSUser/lockoutDuration.oa.mjs";
import { lockOutObservationWindow } from "../MSUser/lockOutObservationWindow.oa.mjs";
import { lockoutThreshold } from "../MSUser/lockoutThreshold.oa.mjs";
import { maxPwdAge } from "../MSUser/maxPwdAge.oa.mjs";
import { maxRenewAge } from "../MSUser/maxRenewAge.oa.mjs";
import { maxTicketAge } from "../MSUser/maxTicketAge.oa.mjs";
import { minPwdAge } from "../MSUser/minPwdAge.oa.mjs";
import { minPwdLength } from "../MSUser/minPwdLength.oa.mjs";
import { minTicketAge } from "../MSUser/minTicketAge.oa.mjs";
import { pwdProperties } from "../MSUser/pwdProperties.oa.mjs";
import { pwdHistoryLength } from "../MSUser/pwdHistoryLength.oa.mjs";
import { proxyLifetime } from "../MSUser/proxyLifetime.oa.mjs";
import { eFSPolicy } from "../MSUser/eFSPolicy.oa.mjs";
import { publicKeyPolicy } from "../MSUser/publicKeyPolicy.oa.mjs";
import { domainWidePolicy } from "../MSUser/domainWidePolicy.oa.mjs";
import { domainPolicyReference } from "../MSUser/domainPolicyReference.oa.mjs";
import { qualityOfService } from "../MSUser/qualityOfService.oa.mjs";
import { ipsecPolicyReference } from "../MSUser/ipsecPolicyReference.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { domainCAs } from "../MSUser/domainCAs.oa.mjs";
/**
 * @summary domainPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { authenticationOptions
 *                               | forceLogoff
 *                               | defaultLocalPolicyObject
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | maxRenewAge
 *                               | maxTicketAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | minTicketAge
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | proxyLifetime
 *                               | eFSPolicy
 *                               | publicKeyPolicy
 *                               | domainWidePolicy
 *                               | domainPolicyReference
 *                               | qualityOfService
 *                               | ipsecPolicyReference
 *                               | managedBy
 *                               | domainCAs }
 *   LDAP-NAME                 {"domainPolicy"}
 *   ID                        id-oc-domainPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domainPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ authenticationOptions, forceLogoff, defaultLocalPolicyObject, lockoutDuration, lockOutObservationWindow, lockoutThreshold, maxPwdAge, maxRenewAge, maxTicketAge, minPwdAge, minPwdLength, minTicketAge, pwdProperties, pwdHistoryLength, proxyLifetime, eFSPolicy, publicKeyPolicy, domainWidePolicy, domainPolicyReference, qualityOfService, ipsecPolicyReference, managedBy, domainCAs, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "domainPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_domainPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
