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
    VideotexParameters,
    _decode_VideotexParameters,
    _encode_VideotexParameters,
} from '../IPMSInformationObjects/VideotexParameters.ta.mjs';
import { id_bat_videotex_parameters } from '../IPMSObjectIdentifiers/id-bat-videotex-parameters.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary videotex_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * videotex-parameters X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  VideotexParameters,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-videotex-parameters
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<VideotexParameters>}
 * @implements {X413ATTRIBUTE<VideotexParameters>}
 */
export const videotex_parameters: X413ATTRIBUTE<VideotexParameters> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_VideotexParameters,
    },
    encoderFor: {
        '&Type': _encode_VideotexParameters,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_videotex_parameters /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
