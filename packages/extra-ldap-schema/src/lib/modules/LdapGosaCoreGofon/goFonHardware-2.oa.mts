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
import { id_oc_goFonHardware_2 } from "../LdapGosaCoreGofon/id-oc-goFonHardware-2.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goFonType } from "../LdapGosaCoreGofon/goFonType.oa.mjs";
import { goFonDmtfMode } from "../LdapGosaCoreGofon/goFonDmtfMode.oa.mjs";
import { goFonHost } from "../LdapGosaCoreGofon/goFonHost.oa.mjs";
import { goFonDefaultIP } from "../LdapGosaCoreGofon/goFonDefaultIP.oa.mjs";
import { goFonQualify } from "../LdapGosaCoreGofon/goFonQualify.oa.mjs";
import { goFonAuth } from "../LdapGosaCoreGofon/goFonAuth.oa.mjs";
import { goFonSecret } from "../LdapGosaCoreGofon/goFonSecret.oa.mjs";
import { goFonInkeys } from "../LdapGosaCoreGofon/goFonInkeys.oa.mjs";
import { goFonOutkey } from "../LdapGosaCoreGofon/goFonOutkey.oa.mjs";
import { goFonTrunk } from "../LdapGosaCoreGofon/goFonTrunk.oa.mjs";
import { goFonAccountCode } from "../LdapGosaCoreGofon/goFonAccountCode.oa.mjs";
import { goFonMSN } from "../LdapGosaCoreGofon/goFonMSN.oa.mjs";
import { goFonPermit } from "../LdapGosaCoreGofon/goFonPermit.oa.mjs";
import { goFonDeny } from "../LdapGosaCoreGofon/goFonDeny.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
/**
 * @summary goFonHardware_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonHardware-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | macAddress
 *                               | ipHostNumber }
 *   MAY CONTAIN               { description
 *                               | goFonType
 *                               | goFonDmtfMode
 *                               | goFonHost
 *                               | goFonDefaultIP
 *                               | goFonQualify
 *                               | goFonAuth
 *                               | goFonSecret
 *                               | goFonInkeys
 *                               | goFonOutkey
 *                               | goFonTrunk
 *                               | goFonAccountCode
 *                               | goFonMSN
 *                               | goFonPermit
 *                               | goFonDeny }
 *   LDAP-NAME                 {"goFonHardware"}
 *   LDAP-DESC                 "defines a telephone (v2.7)"
 *   ID                        id-oc-goFonHardware-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonHardware_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, macAddress, ipHostNumber, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goFonType, goFonDmtfMode, goFonHost, goFonDefaultIP, goFonQualify, goFonAuth, goFonSecret, goFonInkeys, goFonOutkey, goFonTrunk, goFonAccountCode, goFonMSN, goFonPermit, goFonDeny, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goFonHardware" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "defines a telephone (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonHardware_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
