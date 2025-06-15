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
    BilaterallyDefinedBodyPart,
    _decode_BilaterallyDefinedBodyPart,
    _encode_BilaterallyDefinedBodyPart,
} from '../IPMSInformationObjects/BilaterallyDefinedBodyPart.ta.mjs';
import { id_et_bilaterally_defined } from '../IPMSObjectIdentifiers/id-et-bilaterally-defined.va.mjs';
/**
 * @summary bilaterally_defined_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bilaterally-defined-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<BilaterallyDefinedBodyPart>}
 * @implements {TYPE_IDENTIFIER<BilaterallyDefinedBodyPart>}
 */
export const bilaterally_defined_body_part_data: TYPE_IDENTIFIER<BilaterallyDefinedBodyPart> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_BilaterallyDefinedBodyPart,
    },
    encoderFor: {
        '&Type': _encode_BilaterallyDefinedBodyPart,
    },
    '&id': id_et_bilaterally_defined /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
