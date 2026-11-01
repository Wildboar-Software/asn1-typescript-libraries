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
import { serviceConnectionPoint } from "../LdapSchema2ldifFmserver/serviceConnectionPoint.oa.mjs";
// export { serviceConnectionPoint } from "../LdapSchema2ldifFmserver/serviceConnectionPoint.oa.mjs";
import { id_oc_mS_SQL_SQLServer } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLServer.va.mjs";
// export { id_oc_mS_SQL_SQLServer } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLServer.va.mjs";


import { mS_SQL_Name } from "../MSUser/mS-SQL-Name.oa.mjs";
import { mS_SQL_RegisteredOwner } from "../MSUser/mS-SQL-RegisteredOwner.oa.mjs";
import { mS_SQL_Contact } from "../MSUser/mS-SQL-Contact.oa.mjs";
import { mS_SQL_Location } from "../MSUser/mS-SQL-Location.oa.mjs";
import { mS_SQL_Memory } from "../MSUser/mS-SQL-Memory.oa.mjs";
import { mS_SQL_Build } from "../MSUser/mS-SQL-Build.oa.mjs";
import { mS_SQL_ServiceAccount } from "../MSUser/mS-SQL-ServiceAccount.oa.mjs";
import { mS_SQL_CharacterSet } from "../MSUser/mS-SQL-CharacterSet.oa.mjs";
import { mS_SQL_SortOrder } from "../MSUser/mS-SQL-SortOrder.oa.mjs";
import { mS_SQL_UnicodeSortOrder } from "../MSUser/mS-SQL-UnicodeSortOrder.oa.mjs";
import { mS_SQL_Clustered } from "../MSUser/mS-SQL-Clustered.oa.mjs";
import { mS_SQL_NamedPipe } from "../MSUser/mS-SQL-NamedPipe.oa.mjs";
import { mS_SQL_MultiProtocol } from "../MSUser/mS-SQL-MultiProtocol.oa.mjs";
import { mS_SQL_SPX } from "../MSUser/mS-SQL-SPX.oa.mjs";
import { mS_SQL_TCPIP } from "../MSUser/mS-SQL-TCPIP.oa.mjs";
import { mS_SQL_AppleTalk } from "../MSUser/mS-SQL-AppleTalk.oa.mjs";
import { mS_SQL_Vines } from "../MSUser/mS-SQL-Vines.oa.mjs";
import { mS_SQL_Status } from "../MSUser/mS-SQL-Status.oa.mjs";
import { mS_SQL_LastUpdatedDate } from "../MSUser/mS-SQL-LastUpdatedDate.oa.mjs";
import { mS_SQL_InformationURL } from "../MSUser/mS-SQL-InformationURL.oa.mjs";
import { mS_SQL_GPSLatitude } from "../MSUser/mS-SQL-GPSLatitude.oa.mjs";
import { mS_SQL_GPSLongitude } from "../MSUser/mS-SQL-GPSLongitude.oa.mjs";
import { mS_SQL_GPSHeight } from "../MSUser/mS-SQL-GPSHeight.oa.mjs";
import { mS_SQL_Keywords } from "../MSUser/mS-SQL-Keywords.oa.mjs";
/**
 * @summary mS_SQL_SQLServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-SQLServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceConnectionPoint }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-RegisteredOwner
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Location
 *                               | mS-SQL-Memory
 *                               | mS-SQL-Build
 *                               | mS-SQL-ServiceAccount
 *                               | mS-SQL-CharacterSet
 *                               | mS-SQL-SortOrder
 *                               | mS-SQL-UnicodeSortOrder
 *                               | mS-SQL-Clustered
 *                               | mS-SQL-NamedPipe
 *                               | mS-SQL-MultiProtocol
 *                               | mS-SQL-SPX
 *                               | mS-SQL-TCPIP
 *                               | mS-SQL-AppleTalk
 *                               | mS-SQL-Vines
 *                               | mS-SQL-Status
 *                               | mS-SQL-LastUpdatedDate
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-GPSLatitude
 *                               | mS-SQL-GPSLongitude
 *                               | mS-SQL-GPSHeight
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-SQLServer"}
 *   ID                        id-oc-mS-SQL-SQLServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_SQLServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ serviceConnectionPoint, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mS_SQL_Name, mS_SQL_RegisteredOwner, mS_SQL_Contact, mS_SQL_Location, mS_SQL_Memory, mS_SQL_Build, mS_SQL_ServiceAccount, mS_SQL_CharacterSet, mS_SQL_SortOrder, mS_SQL_UnicodeSortOrder, mS_SQL_Clustered, mS_SQL_NamedPipe, mS_SQL_MultiProtocol, mS_SQL_SPX, mS_SQL_TCPIP, mS_SQL_AppleTalk, mS_SQL_Vines, mS_SQL_Status, mS_SQL_LastUpdatedDate, mS_SQL_InformationURL, mS_SQL_GPSLatitude, mS_SQL_GPSLongitude, mS_SQL_GPSHeight, mS_SQL_Keywords, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mS-SQL-SQLServer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mS_SQL_SQLServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
