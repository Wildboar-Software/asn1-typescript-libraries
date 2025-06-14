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
/* START_OF_SYMBOL_DEFINITION isdn_BRI */
/**
 * @summary isdn_BRI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isdn-BRI CharacteristicInformation ::= {characteristicInfo  40}
 * ```
 *
 * @constant
 */
export const isdn_BRI: CharacteristicInformation = new _OID(
    [40],
    characteristicInfo
);
/* END_OF_SYMBOL_DEFINITION isdn_BRI */

/* eslint-enable */
