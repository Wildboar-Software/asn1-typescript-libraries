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
    NationallyDefinedBodyPart,
    _decode_NationallyDefinedBodyPart,
    _encode_NationallyDefinedBodyPart,
} from '../IPMSInformationObjects/NationallyDefinedBodyPart.ta.mjs';
import { id_et_nationally_defined } from '../IPMSObjectIdentifiers/id-et-nationally-defined.va.mjs';
/* START_OF_SYMBOL_DEFINITION nationally_defined_body_part_data */
/**
 * @summary nationally_defined_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nationally-defined-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<NationallyDefinedBodyPart>}
 * @implements {TYPE_IDENTIFIER<NationallyDefinedBodyPart>}
 */
export const nationally_defined_body_part_data: TYPE_IDENTIFIER<NationallyDefinedBodyPart> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_NationallyDefinedBodyPart,
    },
    encoderFor: {
        '&Type': _encode_NationallyDefinedBodyPart,
    },
    '&id': id_et_nationally_defined /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nationally_defined_body_part_data */

/* eslint-enable */
