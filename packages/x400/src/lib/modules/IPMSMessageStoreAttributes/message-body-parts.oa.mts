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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import { id_bat_message_body_parts } from '../IPMSObjectIdentifiers/id-bat-message-body-parts.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary message_body_parts
 * @description
 *
 * Information object `message_body_parts`. The IPM Body Part Table information object
 * set has as its members the types of body part that may appear in the Body of an IPM:
 * IPMBodyPartTable EXTENDED-BODY-PART-TYPE ::= { StandardBodyParts |
 * ApplicationSpecificBodyParts } The Standard Body Parts information object set has as
 * its members the types of body part defined in this Specification: StandardBodyParts
 * EXTENDED-BODY-PART-TYPE ::= { ia5-text-body-part |… See ITU-T X.420 (1999), §7.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  SequenceNumber,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-message-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SequenceNumber>}
 * @implements {X413ATTRIBUTE<SequenceNumber>}
 */
export const message_body_parts: X413ATTRIBUTE<SequenceNumber> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SequenceNumber,
    },
    encoderFor: {
        '&Type': _encode_SequenceNumber,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_message_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
