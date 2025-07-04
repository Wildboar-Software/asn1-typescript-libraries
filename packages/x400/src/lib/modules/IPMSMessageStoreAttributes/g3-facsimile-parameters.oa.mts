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
    G3FacsimileParameters,
    _decode_G3FacsimileParameters,
    _encode_G3FacsimileParameters,
} from '../IPMSInformationObjects/G3FacsimileParameters.ta.mjs';
import { id_bat_g3_facsimile_parameters } from '../IPMSObjectIdentifiers/id-bat-g3-facsimile-parameters.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary g3_facsimile_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g3-facsimile-parameters X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  G3FacsimileParameters,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-g3-facsimile-parameters
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<G3FacsimileParameters>}
 * @implements {X413ATTRIBUTE<G3FacsimileParameters>}
 */
export const g3_facsimile_parameters: X413ATTRIBUTE<G3FacsimileParameters> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_G3FacsimileParameters,
    },
    encoderFor: {
        '&Type': _encode_G3FacsimileParameters,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_g3_facsimile_parameters /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
