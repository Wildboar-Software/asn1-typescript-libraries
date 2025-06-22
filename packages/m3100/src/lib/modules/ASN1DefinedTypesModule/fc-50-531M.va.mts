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
 * @summary fc_50_531M
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fc-50-531M CharacteristicInformation ::= {characteristicInfo  35}
 * ```
 *
 * @constant
 */
export const fc_50_531M: CharacteristicInformation = _OID.fromParts(
    [35],
    characteristicInfo
);

/* eslint-enable */
