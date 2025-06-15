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
import { videotex_body_part_parameters } from '../IPMSExtendedBodyPartTypes/videotex-body-part-parameters.oa.mjs';
import { videotex_body_part_data } from '../IPMSExtendedBodyPartTypes/videotex-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/**
 * @summary videotex_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * videotex-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   PARAMETERS  {VideotexParameters
 *                IDENTIFIED BY  id-ep-videotex},
 *   DATA        {VideotexData
 *                IDENTIFIED BY  id-et-videotex}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const videotex_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&parameters': videotex_body_part_parameters /* OBJECT_FIELD_SETTING */,
    '&data': videotex_body_part_data /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
