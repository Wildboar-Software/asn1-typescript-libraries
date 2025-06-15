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
import {
    TroubleFound,
    _decode_TroubleFound,
    _encode_TroubleFound,
} from '../X790ASN1Module/TroubleFound.ta.mjs';

/**
 * @summary troubleFoundTroubleFoundInitial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * troubleFoundTroubleFoundInitial TroubleFound ::= number:0
 * ```
 *
 * @constant
 */
export const troubleFoundTroubleFoundInitial: TroubleFound = { number_: 0 };

/* eslint-enable */
