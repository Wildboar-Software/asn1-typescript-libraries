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
    IA5TextParameters,
    _decode_IA5TextParameters,
    _encode_IA5TextParameters,
} from '../IPMSInformationObjects/IA5TextParameters.ta.mjs';
import { id_ep_ia5_text } from '../IPMSObjectIdentifiers/id-ep-ia5-text.va.mjs';
/**
 * @summary ia5_text_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5-text-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<IA5TextParameters>}
 * @implements {TYPE_IDENTIFIER<IA5TextParameters>}
 */
export const ia5_text_body_part_parameters: TYPE_IDENTIFIER<IA5TextParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_IA5TextParameters,
    },
    encoderFor: {
        '&Type': _encode_IA5TextParameters,
    },
    '&id': id_ep_ia5_text /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
