/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    EDIUserCapability,
    _decode_EDIUserCapability,
    _encode_EDIUserCapability,
} from '../EDIMUseOfDirectory/EDIUserCapability.ta.mjs';
import { objectIdentifierFirstComponentMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs';
import { id_dat_edi_capabilities } from '../EDIMUseOfDirectory/id-dat-edi-capabilities.va.mjs';
/* START_OF_SYMBOL_DEFINITION edi_capabilities */
/**
 * @summary edi_capabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-capabilities ATTRIBUTE ::= {
 *   WITH SYNTAX             EDIUserCapability
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   ID                      id-dat-edi-capabilities
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<EDIUserCapability>}
 * @implements {ATTRIBUTE<EDIUserCapability>}
 */
export const edi_capabilities: ATTRIBUTE<EDIUserCapability> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIUserCapability,
    },
    encoderFor: {
        '&Type': _encode_EDIUserCapability,
    },
    '&equality-match': objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_dat_edi_capabilities /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_capabilities */

/* eslint-enable */
