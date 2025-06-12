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
import { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa.mjs';
export { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa.mjs';
import { enumeratedFlag } from '../MHSRoutingDirectoryObjects/enumeratedFlag.oa.mjs';
export { enumeratedFlag } from '../MHSRoutingDirectoryObjects/enumeratedFlag.oa.mjs';
import { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa.mjs';
export { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa.mjs';
import { connectionType } from '../MHSRoutingDirectoryObjects/connectionType.oa.mjs';
export { connectionType } from '../MHSRoutingDirectoryObjects/connectionType.oa.mjs';
import { groupMTAPassword } from '../MHSRoutingDirectoryObjects/groupMTAPassword.oa.mjs';
export { groupMTAPassword } from '../MHSRoutingDirectoryObjects/groupMTAPassword.oa.mjs';
import { memberMTA } from '../MHSRoutingDirectoryObjects/memberMTA.oa.mjs';
export { memberMTA } from '../MHSRoutingDirectoryObjects/memberMTA.oa.mjs';
import { securityContext } from '../MHSRoutingDirectoryObjects/securityContext.oa.mjs';
export { securityContext } from '../MHSRoutingDirectoryObjects/securityContext.oa.mjs';
import { id_oc_connection_group } from '../MHSRoutingObjectIdentifiers/id-oc-connection-group.va.mjs';
export { id_oc_connection_group } from '../MHSRoutingObjectIdentifiers/id-oc-connection-group.va.mjs';

/* START_OF_SYMBOL_DEFINITION connectionGroup */
/**
 * @summary connectionGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectionGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName | enumeratedFlag}
 *   MAY CONTAIN
 *     {description | connectionType | groupMTAPassword | memberMTA |
 *       securityContext}
 *   ID            id-oc-connection-group
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const connectionGroup: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        commonName,
        enumeratedFlag,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        description,
        connectionType,
        groupMTAPassword,
        memberMTA,
        securityContext,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_connection_group /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION connectionGroup */

/* eslint-enable */
