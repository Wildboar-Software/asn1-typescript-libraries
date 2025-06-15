/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
    VideotexData,
    _decode_VideotexData,
    _encode_VideotexData,
} from '../IPMSInformationObjects/VideotexData.ta.mjs';
import { id_et_videotex } from '../IPMSObjectIdentifiers/id-et-videotex.va.mjs';
/**
 * @summary videotex_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * videotex-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<VideotexData>}
 * @implements {TYPE_IDENTIFIER<VideotexData>}
 */
export const videotex_body_part_data: TYPE_IDENTIFIER<VideotexData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_VideotexData,
    },
    encoderFor: {
        '&Type': _encode_VideotexData,
    },
    '&id': id_et_videotex /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
