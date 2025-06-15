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
 * @summary line_OC192_STS192_and_MS_STM64
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * line-OC192-STS192-and-MS-STM64 CharacteristicInformation ::= {characteristicInfo  32}
 * ```
 *
 * @constant
 */
export const line_OC192_STS192_and_MS_STM64: CharacteristicInformation = new _OID(
    [32],
    characteristicInfo
);

/* eslint-enable */
