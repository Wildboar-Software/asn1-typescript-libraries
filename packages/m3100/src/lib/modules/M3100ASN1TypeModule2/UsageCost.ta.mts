/* eslint-disable */
import {
    type INTEGER,
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
 * @summary UsageCost
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageCost  ::=  INTEGER(0..255)
 * ```
 */
export type UsageCost = INTEGER;




export const _decode_UsageCost: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_UsageCost: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
