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
    Boolean,
    _decode_Boolean,
    _encode_Boolean,
} from '../SDHProtASN1/Boolean.ta.mjs';

/**
 * @summary booleanTrueDefault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * booleanTrueDefault Boolean ::= TRUE
 * ```
 *
 * @constant
 */
export const booleanTrueDefault: Boolean = false;

/* eslint-enable */
