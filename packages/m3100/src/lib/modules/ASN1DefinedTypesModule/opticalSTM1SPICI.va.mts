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
import {
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.mjs';
import { characteristicInfo } from '../ASN1DefinedTypesModule/characteristicInfo.va.mjs';

/**
 * @summary opticalSTM1SPICI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * opticalSTM1SPICI CharacteristicInformation ::= {characteristicInfo  1}
 * ```
 *
 * @constant
 */
export const opticalSTM1SPICI: CharacteristicInformation = _OID.fromParts(
    [1],
    characteristicInfo
);

/* eslint-enable */
