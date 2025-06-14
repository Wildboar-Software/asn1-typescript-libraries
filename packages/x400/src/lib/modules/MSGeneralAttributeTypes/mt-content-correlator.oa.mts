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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    ContentCorrelator,
    _decode_ContentCorrelator,
    _encode_ContentCorrelator,
} from '../MTSAbstractService/ContentCorrelator.ta.mjs';
import { contentCorrelatorMatch } from '../MSMatchingRules/contentCorrelatorMatch.oa.mjs';
import { id_att_content_correlator } from '../MSObjectIdentifiers/id-att-content-correlator.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION mt_content_correlator */
/**
 * @summary mt_content_correlator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-content-correlator X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ContentCorrelator,
 *   EQUALITY MATCHING-RULE  contentCorrelatorMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-content-correlator
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ContentCorrelator>}
 * @implements {X413ATTRIBUTE<ContentCorrelator>}
 */
export const mt_content_correlator: X413ATTRIBUTE<ContentCorrelator> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ContentCorrelator,
    },
    encoderFor: {
        '&Type': _encode_ContentCorrelator,
    },
    '&equalityMatch': contentCorrelatorMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_content_correlator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_content_correlator */

/* eslint-enable */
