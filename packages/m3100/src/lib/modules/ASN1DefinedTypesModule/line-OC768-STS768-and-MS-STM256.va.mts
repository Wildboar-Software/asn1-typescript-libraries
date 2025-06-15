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
 * @summary line_OC768_STS768_and_MS_STM256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * line-OC768-STS768-and-MS-STM256 CharacteristicInformation ::= {characteristicInfo  46}
 * ```
 *
 * @constant
 */
export const line_OC768_STS768_and_MS_STM256: CharacteristicInformation = new _OID(
    [46],
    characteristicInfo
);

/* eslint-enable */
