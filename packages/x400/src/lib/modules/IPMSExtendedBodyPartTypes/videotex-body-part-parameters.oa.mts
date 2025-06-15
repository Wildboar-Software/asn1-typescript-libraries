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
    VideotexParameters,
    _decode_VideotexParameters,
    _encode_VideotexParameters,
} from '../IPMSInformationObjects/VideotexParameters.ta.mjs';
import { id_ep_videotex } from '../IPMSObjectIdentifiers/id-ep-videotex.va.mjs';
/**
 * @summary videotex_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * videotex-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<VideotexParameters>}
 * @implements {TYPE_IDENTIFIER<VideotexParameters>}
 */
export const videotex_body_part_parameters: TYPE_IDENTIFIER<VideotexParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_VideotexParameters,
    },
    encoderFor: {
        '&Type': _encode_VideotexParameters,
    },
    '&id': id_ep_videotex /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
