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
/* START_OF_SYMBOL_DEFINITION sts12c_and_VC4_4c */
/**
 * @summary sts12c_and_VC4_4c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sts12c-and-VC4-4c CharacteristicInformation ::= {characteristicInfo  26}
 * ```
 *
 * @constant
 */
export const sts12c_and_VC4_4c: CharacteristicInformation = new _OID(
    [26],
    characteristicInfo
);
/* END_OF_SYMBOL_DEFINITION sts12c_and_VC4_4c */

/* eslint-enable */
