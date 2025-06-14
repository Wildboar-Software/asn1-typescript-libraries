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
/* START_OF_SYMBOL_DEFINITION line_OC24_STS24_and_MS_STM8 */
/**
 * @summary line_OC24_STS24_and_MS_STM8
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * line-OC24-STS24-and-MS-STM8 CharacteristicInformation ::= {characteristicInfo  44}
 * ```
 *
 * @constant
 */
export const line_OC24_STS24_and_MS_STM8: CharacteristicInformation = new _OID(
    [44],
    characteristicInfo
);
/* END_OF_SYMBOL_DEFINITION line_OC24_STS24_and_MS_STM8 */

/* eslint-enable */
