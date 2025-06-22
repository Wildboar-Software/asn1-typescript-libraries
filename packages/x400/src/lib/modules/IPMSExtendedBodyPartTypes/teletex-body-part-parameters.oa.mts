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
    TeletexParameters,
    _decode_TeletexParameters,
    _encode_TeletexParameters,
} from '../IPMSInformationObjects/TeletexParameters.ta.mjs';
import { id_ep_teletex } from '../IPMSObjectIdentifiers/id-ep-teletex.va.mjs';
/**
 * @summary teletex_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<TeletexParameters>}
 * @implements {TYPE_IDENTIFIER<TeletexParameters>}
 */
export const teletex_body_part_parameters: TYPE_IDENTIFIER<TeletexParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_TeletexParameters,
    },
    encoderFor: {
        '&Type': _encode_TeletexParameters,
    },
    '&id': id_ep_teletex /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
