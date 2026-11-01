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
import { id_oc_gLUE2DataStore } from "../LdapGlue708DataStore/id-oc-gLUE2DataStore.va.mjs";
import { gLUE2DataStoreType } from "../LdapGlue708DataStore/gLUE2DataStoreType.oa.mjs";
import { gLUE2DataStoreLatency } from "../LdapGlue708DataStore/gLUE2DataStoreLatency.oa.mjs";
import { gLUE2DataStoreTotalSize } from "../LdapGlue708DataStore/gLUE2DataStoreTotalSize.oa.mjs";
import { gLUE2DataStoreFreeSize } from "../LdapGlue708DataStore/gLUE2DataStoreFreeSize.oa.mjs";
import { gLUE2DataStoreUsedSize } from "../LdapGlue708DataStore/gLUE2DataStoreUsedSize.oa.mjs";
import { gLUE2DataStoreStorageManagerForeignKey } from "../LdapGlue708DataStore/gLUE2DataStoreStorageManagerForeignKey.oa.mjs";
// export { id_oc_gLUE2DataStore } from "../LdapGlue708DataStore/id-oc-gLUE2DataStore.va.mjs";


/**
 * @summary gLUE2DataStore
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2DataStore OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2DataStoreType
 *                               | gLUE2DataStoreLatency }
 *   MAY CONTAIN               { gLUE2DataStoreTotalSize
 *                               | gLUE2DataStoreFreeSize
 *                               | gLUE2DataStoreUsedSize
 *                               | gLUE2DataStoreStorageManagerForeignKey }
 *   LDAP-NAME                 {"GLUE2DataStore"}
 *   LDAP-DESC                 "Abstraction of a sufficiently homogeneous storage device providing a storage capacity, managed by a local software component (storage manager), part of a storage service, reachable via one or more endpoints and having one or more shares defined on it. A storage resource refers to a category with summary information on the capacity"
 *   ID                        id-oc-gLUE2DataStore }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2DataStore: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2DataStoreType, gLUE2DataStoreLatency, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2DataStoreTotalSize, gLUE2DataStoreFreeSize, gLUE2DataStoreUsedSize, gLUE2DataStoreStorageManagerForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2DataStore" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a sufficiently homogeneous storage device providing a storage capacity, managed by a local software component (storage manager), part of a storage service, reachable via one or more endpoints and having one or more shares defined on it. A storage resource refers to a category with summary information on the capacity" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2DataStore /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
