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
} from '@wildboar/asn1';
import {
    MixedModeBodyPart,
    _decode_MixedModeBodyPart,
    _encode_MixedModeBodyPart,
} from '../IPMSInformationObjects/MixedModeBodyPart.ta.mjs';
import { id_et_mixed_mode } from '../IPMSObjectIdentifiers/id-et-mixed-mode.va.mjs';
/**
 * @summary mixed_mode_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mixed-mode-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<MixedModeBodyPart>}
 * @implements {TYPE_IDENTIFIER<MixedModeBodyPart>}
 */
export const mixed_mode_body_part_data: TYPE_IDENTIFIER<MixedModeBodyPart> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_MixedModeBodyPart,
    },
    encoderFor: {
        '&Type': _encode_MixedModeBodyPart,
    },
    '&id': id_et_mixed_mode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
