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
import { nationally_defined_body_part_data } from '../IPMSExtendedBodyPartTypes/nationally-defined-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/**
 * @summary nationally_defined_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nationally-defined-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   DATA  {NationallyDefinedBodyPart
 *          IDENTIFIED BY  id-et-nationally-defined}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const nationally_defined_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&data': nationally_defined_body_part_data /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
