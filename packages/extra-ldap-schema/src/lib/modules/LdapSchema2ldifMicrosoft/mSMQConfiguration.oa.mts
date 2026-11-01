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
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mSMQConfiguration } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQConfiguration.va.mjs";

import { mSMQQuota } from "../MSUser/mSMQQuota.oa.mjs";
import { mSMQJournalQuota } from "../MSUser/mSMQJournalQuota.oa.mjs";
import { mSMQOwnerID } from "../MSUser/mSMQOwnerID.oa.mjs";
import { mSMQSites } from "../MSUser/mSMQSites.oa.mjs";
import { mSMQOutRoutingServers } from "../MSUser/mSMQOutRoutingServers.oa.mjs";
import { mSMQInRoutingServers } from "../MSUser/mSMQInRoutingServers.oa.mjs";
import { mSMQServiceType } from "../MSUser/mSMQServiceType.oa.mjs";
import { mSMQComputerType } from "../MSUser/mSMQComputerType.oa.mjs";
import { mSMQForeign } from "../MSUser/mSMQForeign.oa.mjs";
import { mSMQOSType } from "../MSUser/mSMQOSType.oa.mjs";
import { mSMQEncryptKey } from "../MSUser/mSMQEncryptKey.oa.mjs";
import { mSMQSignKey } from "../MSUser/mSMQSignKey.oa.mjs";
import { mSMQDependentClientServices } from "../MSUser/mSMQDependentClientServices.oa.mjs";
import { mSMQRoutingServices } from "../MSUser/mSMQRoutingServices.oa.mjs";
import { mSMQDsServices } from "../MSUser/mSMQDsServices.oa.mjs";
/**
 * @summary mSMQConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mSMQQuota
 *                               | mSMQJournalQuota
 *                               | mSMQOwnerID
 *                               | mSMQSites
 *                               | mSMQOutRoutingServers
 *                               | mSMQInRoutingServers
 *                               | mSMQServiceType
 *                               | mSMQComputerType
 *                               | mSMQForeign
 *                               | mSMQOSType
 *                               | mSMQEncryptKey
 *                               | mSMQSignKey
 *                               | mSMQDependentClientServices
 *                               | mSMQRoutingServices
 *                               | mSMQDsServices }
 *   LDAP-NAME                 {"mSMQConfiguration"}
 *   ID                        id-oc-mSMQConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mSMQQuota, mSMQJournalQuota, mSMQOwnerID, mSMQSites, mSMQOutRoutingServers, mSMQInRoutingServers, mSMQServiceType, mSMQComputerType, mSMQForeign, mSMQOSType, mSMQEncryptKey, mSMQSignKey, mSMQDependentClientServices, mSMQRoutingServices, mSMQDsServices, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mSMQConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mSMQConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
