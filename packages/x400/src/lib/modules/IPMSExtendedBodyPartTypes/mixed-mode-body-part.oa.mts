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
import { mixed_mode_body_part_data } from '../IPMSExtendedBodyPartTypes/mixed-mode-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/**
 * @summary mixed_mode_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mixed-mode-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   DATA  {MixedModeBodyPart
 *          IDENTIFIED BY  id-et-mixed-mode}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const mixed_mode_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&data': mixed_mode_body_part_data /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
