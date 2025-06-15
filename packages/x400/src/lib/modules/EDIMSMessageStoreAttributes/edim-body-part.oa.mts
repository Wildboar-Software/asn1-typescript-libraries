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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import { id_bat_edim_body_part } from '../EDIMSObjectIdentifiers/id-bat-edim-body-part.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edim_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edim-body-part X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX
 *     SequenceNumber, -- sequence number of the forwarded EDIM entry
 *
 *   NUMERATION             single-valued,
 *   ID                     id-bat-edim-body-part
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SequenceNumber>}
 * @implements {X413ATTRIBUTE<SequenceNumber>}
 */
export const edim_body_part: X413ATTRIBUTE<SequenceNumber> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SequenceNumber,
    },
    encoderFor: {
        '&Type': _encode_SequenceNumber,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_edim_body_part /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
