/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary HoldingTimerMultiplierPermitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldingTimerMultiplierPermitted  ::=  INTEGER(2..63)
 * ```
 */
export type HoldingTimerMultiplierPermitted = INTEGER;




export const _decode_HoldingTimerMultiplierPermitted = $._decodeInteger;




export const _encode_HoldingTimerMultiplierPermitted = $._encodeInteger;


/* eslint-enable */
