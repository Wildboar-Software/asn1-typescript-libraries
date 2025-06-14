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
    GeneralTextParameters,
    _decode_GeneralTextParameters,
    _encode_GeneralTextParameters,
} from '../IPMSExtendedBodyPartTypes2/GeneralTextParameters.ta.mjs';
import { id_ep_general_text } from '../IPMSObjectIdentifiers/id-ep-general-text.va.mjs';
/* START_OF_SYMBOL_DEFINITION general_text_body_part_parameters */
/**
 * @summary general_text_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * general-text-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<GeneralTextParameters>}
 * @implements {TYPE_IDENTIFIER<GeneralTextParameters>}
 */
export const general_text_body_part_parameters: TYPE_IDENTIFIER<GeneralTextParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_GeneralTextParameters,
    },
    encoderFor: {
        '&Type': _encode_GeneralTextParameters,
    },
    '&id': id_ep_general_text /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION general_text_body_part_parameters */

/* eslint-enable */
