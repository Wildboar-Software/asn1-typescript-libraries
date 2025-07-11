/* eslint-disable */
import {
    INTEGER,
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
import { type MATCHING_RULE } from '@wildboar/x500/InformationFramework';
import { id_mr_value_count_match } from '../MSObjectIdentifiers/id-mr-value-count-match.va.mjs';
/**
 * @summary valueCountMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * valueCountMatch MATCHING-RULE ::= {
 *   SYNTAX  INTEGER(1..ub-attribute-values)
 *   ID      id-mr-value-count-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<INTEGER>}
 * @implements {MATCHING_RULE<INTEGER>}
 */
export const valueCountMatch: MATCHING_RULE<INTEGER> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': $._decodeInteger,
    },
    encoderFor: {
        '&AssertionType': $._encodeInteger,
    },
    '&id': id_mr_value_count_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
