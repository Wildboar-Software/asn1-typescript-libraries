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
 * @summary line_OC1_STS1_and_MS_STM0
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * line-OC1-STS1-and-MS-STM0 CharacteristicInformation ::= {characteristicInfo  31}
 * ```
 *
 * @constant
 */
export const line_OC1_STS1_and_MS_STM0: CharacteristicInformation = _OID.fromParts(
    [31],
    characteristicInfo
);

/* eslint-enable */
