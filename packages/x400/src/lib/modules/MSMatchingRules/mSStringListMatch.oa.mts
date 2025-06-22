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
import * as $ from '@wildboar/asn1/functional';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta.mjs';
import { id_mr_msstring_list_match } from '../MSObjectIdentifiers/id-mr-msstring-list-match.va.mjs';
/**
 * @summary mSStringListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mSStringListMatch MATCHING-RULE ::= {
 *   SYNTAX  SEQUENCE OF MSString{ub-msstring-match}
 *   ID      id-mr-msstring-list-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<MSString[]>}
 * @implements {MATCHING_RULE<MSString[]>}
 */
export const mSStringListMatch: MATCHING_RULE<MSString[]> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': $._decodeSequenceOf<MSString>(() => _decode_MSString),
    },
    encoderFor: {
        '&AssertionType': $._encodeSequenceOf<MSString>(
            () => _encode_MSString,
            $.BER
        ),
    },
    '&id': id_mr_msstring_list_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
