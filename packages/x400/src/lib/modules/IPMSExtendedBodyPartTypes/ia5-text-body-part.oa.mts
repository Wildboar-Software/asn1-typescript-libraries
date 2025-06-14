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
} from 'asn1-ts';
import { ia5_text_body_part_parameters } from '../IPMSExtendedBodyPartTypes/ia5-text-body-part-parameters.oa.mjs';
import { ia5_text_body_part_data } from '../IPMSExtendedBodyPartTypes/ia5-text-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION ia5_text_body_part */
/**
 * @summary ia5_text_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5-text-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   PARAMETERS  {IA5TextParameters
 *                IDENTIFIED BY  id-ep-ia5-text},
 *   DATA        {IA5TextData
 *                IDENTIFIED BY  id-et-ia5-text}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const ia5_text_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&parameters': ia5_text_body_part_parameters /* OBJECT_FIELD_SETTING */,
    '&data': ia5_text_body_part_data /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ia5_text_body_part */

/* eslint-enable */
