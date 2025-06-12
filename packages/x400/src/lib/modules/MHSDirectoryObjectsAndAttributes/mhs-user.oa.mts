/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    ObjectClassKind,
    _enum_for_ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
export {
    ObjectClassKind,
    _enum_for_ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs';
export { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs';
import { mhs_or_addresses } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses.oa.mjs';
export { mhs_or_addresses } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses.oa.mjs';
import { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa.mjs';
export { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa.mjs';
import { mhs_deliverable_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-deliverable-content-types.oa.mjs';
export { mhs_deliverable_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-deliverable-content-types.oa.mjs';
import { mhs_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-acceptable-eits.oa.mjs';
export { mhs_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-acceptable-eits.oa.mjs';
import { mhs_exclusively_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-exclusively-acceptable-eits.oa.mjs';
export { mhs_exclusively_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-exclusively-acceptable-eits.oa.mjs';
import { mhs_unacceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-unacceptable-eits.oa.mjs';
export { mhs_unacceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-unacceptable-eits.oa.mjs';
import { mhs_or_addresses_with_capabilities } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses-with-capabilities.oa.mjs';
export { mhs_or_addresses_with_capabilities } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses-with-capabilities.oa.mjs';
import { mhs_message_store_dn } from '../MHSDirectoryObjectsAndAttributes/mhs-message-store-dn.oa.mjs';
export { mhs_message_store_dn } from '../MHSDirectoryObjectsAndAttributes/mhs-message-store-dn.oa.mjs';
import { id_oc_mhs_user } from '../MHSObjectIdentifiers/id-oc-mhs-user.va.mjs';
export { id_oc_mhs_user } from '../MHSObjectIdentifiers/id-oc-mhs-user.va.mjs';

/* START_OF_SYMBOL_DEFINITION mhs_user */
/**
 * @summary mhs_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-user OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {mhs-or-addresses}
 *   MAY CONTAIN
 *     {mhs-maximum-content-length | mhs-deliverable-content-types |
 *       mhs-acceptable-eits | mhs-exclusively-acceptable-eits |
 *       mhs-unacceptable-eits | mhs-or-addresses-with-capabilities |
 *       mhs-message-store-dn}
 *   ID            id-oc-mhs-user
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mhs_user: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [mhs_or_addresses] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        mhs_maximum_content_length,
        mhs_deliverable_content_types,
        mhs_acceptable_eits,
        mhs_exclusively_acceptable_eits,
        mhs_unacceptable_eits,
        mhs_or_addresses_with_capabilities,
        mhs_message_store_dn,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mhs_user */

/* eslint-enable */
