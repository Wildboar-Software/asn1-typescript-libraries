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
 * @summary section_OC24_STS24_and_RS_STM8
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * section-OC24-STS24-and-RS-STM8 CharacteristicInformation ::= {characteristicInfo  43}
 * ```
 *
 * @constant
 */
export const section_OC24_STS24_and_RS_STM8: CharacteristicInformation = _OID.fromParts(
    [43],
    characteristicInfo
);

/* eslint-enable */
