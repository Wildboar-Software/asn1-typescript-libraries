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
 * @summary section_OC768_STS768_and_RS_STM256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * section-OC768-STS768-and-RS-STM256 CharacteristicInformation ::= {characteristicInfo  45}
 * ```
 *
 * @constant
 */
export const section_OC768_STS768_and_RS_STM256: CharacteristicInformation = _OID.fromParts(
    [45],
    characteristicInfo
);

/* eslint-enable */
