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
 * @summary tu12VC12CI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tu12VC12CI CharacteristicInformation ::= {characteristicInfo  14}
 * ```
 *
 * @constant
 */
export const tu12VC12CI: CharacteristicInformation = _OID.fromParts(
    [14],
    characteristicInfo
);

/* eslint-enable */
