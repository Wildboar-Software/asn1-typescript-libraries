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
    G3FacsimileData,
    _decode_G3FacsimileData,
    _encode_G3FacsimileData,
} from '../IPMSInformationObjects/G3FacsimileData.ta.mjs';
import { id_et_g3_facsimile } from '../IPMSObjectIdentifiers/id-et-g3-facsimile.va.mjs';
/**
 * @summary g3_facsimile_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g3-facsimile-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<G3FacsimileData>}
 * @implements {TYPE_IDENTIFIER<G3FacsimileData>}
 */
export const g3_facsimile_body_part_data: TYPE_IDENTIFIER<G3FacsimileData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_G3FacsimileData,
    },
    encoderFor: {
        '&Type': _encode_G3FacsimileData,
    },
    '&id': id_et_g3_facsimile /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
