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
/* START_OF_SYMBOL_DEFINITION fc_25_266M */
/**
 * @summary fc_25_266M
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fc-25-266M CharacteristicInformation ::= {characteristicInfo  34}
 * ```
 *
 * @constant
 */
export const fc_25_266M: CharacteristicInformation = new _OID(
    [34],
    characteristicInfo
);
/* END_OF_SYMBOL_DEFINITION fc_25_266M */

/* eslint-enable */
