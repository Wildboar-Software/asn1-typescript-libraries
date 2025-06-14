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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
import { id_mr_or_descriptor_elements } from '../IPMSObjectIdentifiers/id-mr-or-descriptor-elements.va.mjs';
/* START_OF_SYMBOL_DEFINITION oRDescriptorElementsMatch */
/**
 * @summary oRDescriptorElementsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oRDescriptorElementsMatch MATCHING-RULE ::= {
 *   SYNTAX  ORDescriptor
 *   ID      id-mr-or-descriptor-elements
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<ORDescriptor>}
 * @implements {MATCHING_RULE<ORDescriptor>}
 */
export const oRDescriptorElementsMatch: MATCHING_RULE<ORDescriptor> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_ORDescriptor,
    },
    encoderFor: {
        '&AssertionType': _encode_ORDescriptor,
    },
    '&id': id_mr_or_descriptor_elements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oRDescriptorElementsMatch */

/* eslint-enable */
