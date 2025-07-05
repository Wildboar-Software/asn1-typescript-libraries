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
import { pkcs7_body_part_data } from '../PKCS7BodyPartType/pkcs7-body-part-data.oa.mjs';
import { type EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/**
 * @summary pkcs7_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs7-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   DATA  {ContentInfo
 *          IDENTIFIED BY  id-et-pkcs7}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const pkcs7_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&data': pkcs7_body_part_data /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
