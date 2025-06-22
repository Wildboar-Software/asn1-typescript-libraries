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
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.mjs';
import { characteristicInfo } from '../ASN1DefinedTypesModule/characteristicInfo.va.mjs';

/**
 * @summary rsSTM1SPICI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsSTM1SPICI CharacteristicInformation ::= {characteristicInfo  5}
 * ```
 *
 * @constant
 */
export const rsSTM1SPICI: CharacteristicInformation = _OID.fromParts(
    [5],
    characteristicInfo
);

/* eslint-enable */
