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
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
export { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
import { routingCollectiveName } from '../MHSRoutingDirectoryObjects/routingCollectiveName.oa';
export { routingCollectiveName } from '../MHSRoutingDirectoryObjects/routingCollectiveName.oa';
import { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa';
export { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa';
import { entryConnectionGroupName } from '../MHSRoutingDirectoryObjects/entryConnectionGroupName.oa';
export { entryConnectionGroupName } from '../MHSRoutingDirectoryObjects/entryConnectionGroupName.oa';
import { localExitConnectionGroupName } from '../MHSRoutingDirectoryObjects/localExitConnectionGroupName.oa';
export { localExitConnectionGroupName } from '../MHSRoutingDirectoryObjects/localExitConnectionGroupName.oa';
import { transitExitConnectionGroupName } from '../MHSRoutingDirectoryObjects/transitExitConnectionGroupName.oa';
export { transitExitConnectionGroupName } from '../MHSRoutingDirectoryObjects/transitExitConnectionGroupName.oa';
import { id_oc_routing_collective } from '../MHSRoutingObjectIdentifiers/id-oc-routing-collective.va';
export { id_oc_routing_collective } from '../MHSRoutingObjectIdentifiers/id-oc-routing-collective.va';

/* START_OF_SYMBOL_DEFINITION routingCollective */
/**
 * @summary routingCollective
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * routingCollective OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {routingCollectiveName}
 *   MAY CONTAIN
 *     {description | entryConnectionGroupName | localExitConnectionGroupName |
 *       transitExitConnectionGroupName}
 *   --at least one entry-CG and exit-CG should be present
 *   ID            id-oc-routing-collective
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const routingCollective: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [routingCollectiveName] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        description,
        entryConnectionGroupName,
        localExitConnectionGroupName,
        transitExitConnectionGroupName,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_routing_collective /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION routingCollective */

/* eslint-enable */
