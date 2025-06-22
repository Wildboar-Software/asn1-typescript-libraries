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
import { g3_facsimile_body_part_parameters } from '../IPMSExtendedBodyPartTypes/g3-facsimile-body-part-parameters.oa.mjs';
import { g3_facsimile_body_part_data } from '../IPMSExtendedBodyPartTypes/g3-facsimile-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/**
 * @summary g3_facsimile_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g3-facsimile-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   PARAMETERS  {G3FacsimileParameters
 *                IDENTIFIED BY  id-ep-g3-facsimile},
 *   DATA        {G3FacsimileData
 *                IDENTIFIED BY  id-et-g3-facsimile}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const g3_facsimile_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&parameters': g3_facsimile_body_part_parameters /* OBJECT_FIELD_SETTING */,
    '&data': g3_facsimile_body_part_data /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
