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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary HoldingTimerMultiplierRequired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldingTimerMultiplierRequired  ::=  INTEGER(3)
 * ```
 */
export type HoldingTimerMultiplierRequired = INTEGER;




export const _decode_HoldingTimerMultiplierRequired = $._decodeInteger;




export const _encode_HoldingTimerMultiplierRequired = $._encodeInteger;


/* eslint-enable */
