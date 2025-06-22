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
    G3FacsimileData,
    _decode_G3FacsimileData,
    _encode_G3FacsimileData,
} from '../IPMSInformationObjects/G3FacsimileData.ta.mjs';
import { id_bat_g3_facsimile_data } from '../IPMSObjectIdentifiers/id-bat-g3-facsimile-data.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary g3_facsimile_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g3-facsimile-data X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  G3FacsimileData,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-g3-facsimile-data
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<G3FacsimileData>}
 * @implements {X413ATTRIBUTE<G3FacsimileData>}
 */
export const g3_facsimile_data: X413ATTRIBUTE<G3FacsimileData> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_G3FacsimileData,
    },
    encoderFor: {
        '&Type': _encode_G3FacsimileData,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_g3_facsimile_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
