/* eslint-disable */
import {
    type BOOLEAN,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ServiceFlag
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceFlag  ::=  BOOLEAN
 * ```
 */
export type ServiceFlag = BOOLEAN; // BooleanType


export const _decode_ServiceFlag: $.ASN1Decoder<boolean> = $._decodeBoolean;


export const _encode_ServiceFlag: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */
