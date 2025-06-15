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
 * @summary sts192c_and_VC4_64c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sts192c-and-VC4-64c CharacteristicInformation ::= {characteristicInfo  28}
 * ```
 *
 * @constant
 */
export const sts192c_and_VC4_64c: CharacteristicInformation = new _OID(
    [28],
    characteristicInfo
);

/* eslint-enable */
