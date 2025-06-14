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
import { bilaterally_defined_body_part_data } from '../IPMSExtendedBodyPartTypes/bilaterally-defined-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION bilaterally_defined_body_part */
/**
 * @summary bilaterally_defined_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bilaterally-defined-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   DATA  {BilaterallyDefinedBodyPart
 *          IDENTIFIED BY  id-et-bilaterally-defined}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const bilaterally_defined_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&data': bilaterally_defined_body_part_data /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION bilaterally_defined_body_part */

/* eslint-enable */
