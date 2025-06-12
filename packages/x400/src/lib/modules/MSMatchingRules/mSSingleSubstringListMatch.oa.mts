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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca.mjs';
export { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca.mjs';
import {
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta.mjs';
export {
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta.mjs';
import { ub_msstring_match } from '../MSUpperBounds/ub-msstring-match.va.mjs';
export { ub_msstring_match } from '../MSUpperBounds/ub-msstring-match.va.mjs';
import { id_mr_ms_single_substring_list_match } from '../MSObjectIdentifiers/id-mr-ms-single-substring-list-match.va.mjs';
export { id_mr_ms_single_substring_list_match } from '../MSObjectIdentifiers/id-mr-ms-single-substring-list-match.va.mjs';

/* START_OF_SYMBOL_DEFINITION mSSingleSubstringListMatch */
/**
 * @summary mSSingleSubstringListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mSSingleSubstringListMatch MATCHING-RULE ::= {
 *   SYNTAX  SEQUENCE OF MSString{ub-msstring-match}
 *   ID      id-mr-ms-single-substring-list-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<MSString[]>}
 * @implements {MATCHING_RULE<MSString[]>}
 */
export const mSSingleSubstringListMatch: MATCHING_RULE<MSString[]> = {
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
    '&id': id_mr_ms_single_substring_list_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mSSingleSubstringListMatch */

/* eslint-enable */
