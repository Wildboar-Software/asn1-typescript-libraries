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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import { id_mr_ipm_location } from '../IPMSObjectIdentifiers/id-mr-ipm-location.va.mjs';
/**
 * @summary iPMLocationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iPMLocationMatch MATCHING-RULE ::= {
 *   SYNTAX  SequenceNumber
 *   ID      id-mr-ipm-location
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SequenceNumber>}
 * @implements {MATCHING_RULE<SequenceNumber>}
 */
export const iPMLocationMatch: MATCHING_RULE<SequenceNumber> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_SequenceNumber,
    },
    encoderFor: {
        '&AssertionType': _encode_SequenceNumber,
    },
    '&id': id_mr_ipm_location /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
