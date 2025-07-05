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
} from '@wildboar/asn1';
import { teletex_body_part_parameters } from '../IPMSExtendedBodyPartTypes/teletex-body-part-parameters.oa.mjs';
import { teletex_body_part_data } from '../IPMSExtendedBodyPartTypes/teletex-body-part-data.oa.mjs';
import { type EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/**
 * @summary teletex_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   PARAMETERS  {TeletexParameters
 *                IDENTIFIED BY  id-ep-teletex},
 *   DATA        {TeletexData
 *                IDENTIFIED BY  id-et-teletex}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const teletex_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&parameters': teletex_body_part_parameters /* OBJECT_FIELD_SETTING */,
    '&data': teletex_body_part_data /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
