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
    VideotexBodyPart,
    _decode_VideotexBodyPart,
    _encode_VideotexBodyPart,
} from '../IPMSInformationObjects/VideotexBodyPart.ta.mjs';
import { id_bat_videotex_body_parts } from '../IPMSObjectIdentifiers/id-bat-videotex-body-parts.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary videotex_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * videotex-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  VideotexBodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-videotex-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<VideotexBodyPart>}
 * @implements {X413ATTRIBUTE<VideotexBodyPart>}
 */
export const videotex_body_parts: X413ATTRIBUTE<VideotexBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_VideotexBodyPart,
    },
    encoderFor: {
        '&Type': _encode_VideotexBodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_videotex_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
