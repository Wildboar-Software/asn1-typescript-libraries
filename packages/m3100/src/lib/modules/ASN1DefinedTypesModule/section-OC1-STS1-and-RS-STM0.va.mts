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
 * @summary section_OC1_STS1_and_RS_STM0
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * section-OC1-STS1-and-RS-STM0 CharacteristicInformation ::= {characteristicInfo  29}
 * ```
 *
 * @constant
 */
export const section_OC1_STS1_and_RS_STM0: CharacteristicInformation = _OID.fromParts(
    [29],
    characteristicInfo
);

/* eslint-enable */
