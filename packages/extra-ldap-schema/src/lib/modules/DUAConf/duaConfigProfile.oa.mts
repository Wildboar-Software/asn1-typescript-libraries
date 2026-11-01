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
    NULL,
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
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { duaConfSchemaOID } from "../DUAConf/duaConfSchemaOID.va.mjs";
import { defaultServerList } from "../DUAConf/defaultServerList.oa.mjs";
import { preferredServerList } from "../DUAConf/preferredServerList.oa.mjs";
import { defaultSearchBase } from "../DUAConf/defaultSearchBase.oa.mjs";
import { defaultSearchScope } from "../DUAConf/defaultSearchScope.oa.mjs";
import { searchTimeLimit } from "../DUAConf/searchTimeLimit.oa.mjs";
import { bindTimeLimit } from "../DUAConf/bindTimeLimit.oa.mjs";
import { credentialLevel } from "../DUAConf/credentialLevel.oa.mjs";
import { authenticationMethod } from "../DUAConf/authenticationMethod.oa.mjs";
import { followReferrals } from "../DUAConf/followReferrals.oa.mjs";
import { dereferenceAliases } from "../DUAConf/dereferenceAliases.oa.mjs";
import { serviceSearchDescriptor } from "../DUAConf/serviceSearchDescriptor.oa.mjs";
import { serviceCredentialLevel } from "../DUAConf/serviceCredentialLevel.oa.mjs";
import { serviceAuthenticationMethod } from "../DUAConf/serviceAuthenticationMethod.oa.mjs";
import { objectclassMap } from "../DUAConf/objectclassMap.oa.mjs";
import { attributeMap } from "../DUAConf/attributeMap.oa.mjs";
import { profileTTL } from "../DUAConf/profileTTL.oa.mjs";
// export { duaConfSchemaOID } from "../DUAConf/duaConfSchemaOID.va.mjs";


/**
 * @summary duaConfigProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * duaConfigProfile OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName}
 *     MAY CONTAIN        {
 *         defaultServerList
 *         | preferredServerList
 *         | defaultSearchBase
 *         | defaultSearchScope
 *         | searchTimeLimit
 *         | bindTimeLimit
 *         | credentialLevel
 *         | authenticationMethod
 *         | followReferrals
 *         | dereferenceAliases
 *         | serviceSearchDescriptor
 *         | serviceCredentialLevel
 *         | serviceAuthenticationMethod
 *         | objectclassMap
 *         | attributeMap
 *         | profileTTL
 *     }
 *     LDAP-NAME        {"DUAConfigProfile"}
 *     LDAP-DESC        "Abstraction of a base configuration for a DUA"
 *     ID                { duaConfSchemaOID 2 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const duaConfigProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ defaultServerList, preferredServerList, defaultSearchBase, defaultSearchScope, searchTimeLimit, bindTimeLimit, credentialLevel, authenticationMethod, followReferrals, dereferenceAliases, serviceSearchDescriptor, serviceCredentialLevel, serviceAuthenticationMethod, objectclassMap, attributeMap, profileTTL, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "DUAConfigProfile" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a base configuration for a DUA" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([2, 5,], duaConfSchemaOID) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
