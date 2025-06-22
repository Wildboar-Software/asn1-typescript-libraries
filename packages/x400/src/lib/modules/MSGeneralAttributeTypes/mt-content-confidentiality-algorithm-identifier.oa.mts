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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import { id_att_content_confidentiality_algorithm_identifier } from '../MSObjectIdentifiers/id-att-content-confidentiality-algorithm-identifier.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_content_confidentiality_algorithm_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-content-confidentiality-algorithm-identifier X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  AlgorithmIdentifier,
 *   NUMERATION             single-valued,
 *   ID                     id-att-content-confidentiality-algorithm-identifier
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AlgorithmIdentifier>}
 * @implements {X413ATTRIBUTE<AlgorithmIdentifier>}
 */
export const mt_content_confidentiality_algorithm_identifier: X413ATTRIBUTE<AlgorithmIdentifier> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        '&Type': _encode_AlgorithmIdentifier,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_content_confidentiality_algorithm_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
