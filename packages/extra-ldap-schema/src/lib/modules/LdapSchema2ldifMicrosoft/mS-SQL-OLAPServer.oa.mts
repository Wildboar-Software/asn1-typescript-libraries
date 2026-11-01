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
import { serviceConnectionPoint } from "../LdapSchema2ldifFmserver/serviceConnectionPoint.oa.mjs";
import { id_oc_mS_SQL_OLAPServer } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-OLAPServer.va.mjs";

import { mS_SQL_Name } from "../MSUser/mS-SQL-Name.oa.mjs";
import { mS_SQL_RegisteredOwner } from "../MSUser/mS-SQL-RegisteredOwner.oa.mjs";
import { mS_SQL_Contact } from "../MSUser/mS-SQL-Contact.oa.mjs";
import { mS_SQL_Build } from "../MSUser/mS-SQL-Build.oa.mjs";
import { mS_SQL_ServiceAccount } from "../MSUser/mS-SQL-ServiceAccount.oa.mjs";
import { mS_SQL_Status } from "../MSUser/mS-SQL-Status.oa.mjs";
import { mS_SQL_InformationURL } from "../MSUser/mS-SQL-InformationURL.oa.mjs";
import { mS_SQL_PublicationURL } from "../MSUser/mS-SQL-PublicationURL.oa.mjs";
import { mS_SQL_Version } from "../MSUser/mS-SQL-Version.oa.mjs";
import { mS_SQL_Language } from "../MSUser/mS-SQL-Language.oa.mjs";
import { mS_SQL_Keywords } from "../MSUser/mS-SQL-Keywords.oa.mjs";
/**
 * @summary mS_SQL_OLAPServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-OLAPServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceConnectionPoint }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-RegisteredOwner
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Build
 *                               | mS-SQL-ServiceAccount
 *                               | mS-SQL-Status
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-PublicationURL
 *                               | mS-SQL-Version
 *                               | mS-SQL-Language
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-OLAPServer"}
 *   ID                        id-oc-mS-SQL-OLAPServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_OLAPServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ serviceConnectionPoint, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mS_SQL_Name, mS_SQL_RegisteredOwner, mS_SQL_Contact, mS_SQL_Build, mS_SQL_ServiceAccount, mS_SQL_Status, mS_SQL_InformationURL, mS_SQL_PublicationURL, mS_SQL_Version, mS_SQL_Language, mS_SQL_Keywords, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mS-SQL-OLAPServer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mS_SQL_OLAPServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
