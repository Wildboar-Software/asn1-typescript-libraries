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
 * @summary CharacterSetRegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterSetRegistration  ::=  INTEGER(1..32767)
 * ```
 */
export type CharacterSetRegistration = INTEGER;


export const _decode_CharacterSetRegistration = $._decodeInteger;


export const _encode_CharacterSetRegistration = $._encodeInteger;


/* eslint-enable */
