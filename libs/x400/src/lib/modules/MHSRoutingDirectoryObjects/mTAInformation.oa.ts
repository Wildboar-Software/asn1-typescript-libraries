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
import * as $ from 'asn1-ts/dist/node/functional';
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { mTAName } from '../MHSRoutingDirectoryObjects/mTAName.oa';
export { mTAName } from '../MHSRoutingDirectoryObjects/mTAName.oa';
import { globalDomainIdentifier } from '../MHSRoutingDirectoryObjects/globalDomainIdentifier.oa';
export { globalDomainIdentifier } from '../MHSRoutingDirectoryObjects/globalDomainIdentifier.oa';
import { mTAPassword } from '../MHSRoutingDirectoryObjects/mTAPassword.oa';
export { mTAPassword } from '../MHSRoutingDirectoryObjects/mTAPassword.oa';
import { specificPasswords } from '../MHSRoutingDirectoryObjects/specificPasswords.oa';
export { specificPasswords } from '../MHSRoutingDirectoryObjects/specificPasswords.oa';
import { callingPSAPs } from '../MHSRoutingDirectoryObjects/callingPSAPs.oa';
export { callingPSAPs } from '../MHSRoutingDirectoryObjects/callingPSAPs.oa';
import { id_oc_mta_information } from '../MHSRoutingObjectIdentifiers/id-oc-mta-information.va';
export { id_oc_mta_information } from '../MHSRoutingObjectIdentifiers/id-oc-mta-information.va';

/* START_OF_SYMBOL_DEFINITION mTAInformation */
/**
 * @summary mTAInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mTAInformation OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {mTAName | globalDomainIdentifier}
 *   MAY CONTAIN   {mTAPassword | specificPasswords | callingPSAPs}
 *   ID            id-oc-mta-information
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mTAInformation: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mTAName,
        globalDomainIdentifier,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        mTAPassword,
        specificPasswords,
        callingPSAPs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mta_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mTAInformation */

/* eslint-enable */
