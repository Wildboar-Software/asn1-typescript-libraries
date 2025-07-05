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
} from '@wildboar/asn1';
import { type MATCHING_RULE } from '@wildboar/x500/InformationFramework';
import {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
import { id_mr_or_descriptor } from '../IPMSObjectIdentifiers/id-mr-or-descriptor.va.mjs';
/**
 * @summary oRDescriptorMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oRDescriptorMatch MATCHING-RULE ::= {
 *   SYNTAX  ORDescriptor
 *   ID      id-mr-or-descriptor
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<ORDescriptor>}
 * @implements {MATCHING_RULE<ORDescriptor>}
 */
export const oRDescriptorMatch: MATCHING_RULE<ORDescriptor> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_ORDescriptor,
    },
    encoderFor: {
        '&AssertionType': _encode_ORDescriptor,
    },
    '&id': id_mr_or_descriptor /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
