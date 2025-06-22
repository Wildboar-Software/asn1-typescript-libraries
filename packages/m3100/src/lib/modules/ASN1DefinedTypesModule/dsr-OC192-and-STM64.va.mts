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
 * @summary dsr_OC192_and_STM64
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsr-OC192-and-STM64 CharacteristicInformation ::= {characteristicInfo  41}
 * ```
 *
 * @constant
 */
export const dsr_OC192_and_STM64: CharacteristicInformation = _OID.fromParts(
    [41],
    characteristicInfo
);

/* eslint-enable */
