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
    TeletexBodyPart,
    _decode_TeletexBodyPart,
    _encode_TeletexBodyPart,
} from '../IPMSInformationObjects/TeletexBodyPart.ta.mjs';
import { id_bat_teletex_body_parts } from '../IPMSObjectIdentifiers/id-bat-teletex-body-parts.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION teletex_body_parts */
/**
 * @summary teletex_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  TeletexBodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-teletex-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<TeletexBodyPart>}
 * @implements {X413ATTRIBUTE<TeletexBodyPart>}
 */
export const teletex_body_parts: X413ATTRIBUTE<TeletexBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TeletexBodyPart,
    },
    encoderFor: {
        '&Type': _encode_TeletexBodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_teletex_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION teletex_body_parts */

/* eslint-enable */
