/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_AltNameType_builtinNameForm */
export enum _enum_for_AltNameType_builtinNameForm {
    rfc822Name = 1,
    dNSName = 2,
    x400Address = 3,
    directoryName = 4,
    ediPartyName = 5,
    uniformResourceIdentifier = 6,
    iPAddress = 7,
    registeredId = 8,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AltNameType_builtinNameForm */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm */
/**
 * @summary AltNameType_builtinNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltNameType-builtinNameForm ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type AltNameType_builtinNameForm =
    | _enum_for_AltNameType_builtinNameForm
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_rfc822Name */
/**
 * @summary AltNameType_builtinNameForm_rfc822Name
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_rfc822Name: AltNameType_builtinNameForm = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_rfc822Name */

/* START_OF_SYMBOL_DEFINITION rfc822Name */
/**
 * @summary rfc822Name
 * @constant
 * @type {number}
 */
export const rfc822Name: AltNameType_builtinNameForm = AltNameType_builtinNameForm_rfc822Name; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION rfc822Name */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_dNSName */
/**
 * @summary AltNameType_builtinNameForm_dNSName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_dNSName: AltNameType_builtinNameForm = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_dNSName */

/* START_OF_SYMBOL_DEFINITION dNSName */
/**
 * @summary dNSName
 * @constant
 * @type {number}
 */
export const dNSName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_dNSName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dNSName */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_x400Address */
/**
 * @summary AltNameType_builtinNameForm_x400Address
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_x400Address: AltNameType_builtinNameForm = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_x400Address */

/* START_OF_SYMBOL_DEFINITION x400Address */
/**
 * @summary x400Address
 * @constant
 * @type {number}
 */
export const x400Address: AltNameType_builtinNameForm = AltNameType_builtinNameForm_x400Address; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION x400Address */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_directoryName */
/**
 * @summary AltNameType_builtinNameForm_directoryName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_directoryName: AltNameType_builtinNameForm = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_directoryName */

/* START_OF_SYMBOL_DEFINITION directoryName */
/**
 * @summary directoryName
 * @constant
 * @type {number}
 */
export const directoryName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_directoryName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION directoryName */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_ediPartyName */
/**
 * @summary AltNameType_builtinNameForm_ediPartyName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_ediPartyName: AltNameType_builtinNameForm = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_ediPartyName */

/* START_OF_SYMBOL_DEFINITION ediPartyName */
/**
 * @summary ediPartyName
 * @constant
 * @type {number}
 */
export const ediPartyName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_ediPartyName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ediPartyName */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_uniformResourceIdentifier */
/**
 * @summary AltNameType_builtinNameForm_uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_uniformResourceIdentifier: AltNameType_builtinNameForm = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_uniformResourceIdentifier */

/* START_OF_SYMBOL_DEFINITION uniformResourceIdentifier */
/**
 * @summary uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export const uniformResourceIdentifier: AltNameType_builtinNameForm = AltNameType_builtinNameForm_uniformResourceIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION uniformResourceIdentifier */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_iPAddress */
/**
 * @summary AltNameType_builtinNameForm_iPAddress
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_iPAddress: AltNameType_builtinNameForm = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_iPAddress */

/* START_OF_SYMBOL_DEFINITION iPAddress */
/**
 * @summary iPAddress
 * @constant
 * @type {number}
 */
export const iPAddress: AltNameType_builtinNameForm = AltNameType_builtinNameForm_iPAddress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION iPAddress */

/* START_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_registeredId */
/**
 * @summary AltNameType_builtinNameForm_registeredId
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_registeredId: AltNameType_builtinNameForm = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AltNameType_builtinNameForm_registeredId */

/* START_OF_SYMBOL_DEFINITION registeredId */
/**
 * @summary registeredId
 * @constant
 * @type {number}
 */
export const registeredId: AltNameType_builtinNameForm = AltNameType_builtinNameForm_registeredId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION registeredId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AltNameType_builtinNameForm */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AltNameType_builtinNameForm */

/* START_OF_SYMBOL_DEFINITION _decode_AltNameType_builtinNameForm */
export const _decode_AltNameType_builtinNameForm = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AltNameType_builtinNameForm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AltNameType_builtinNameForm */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AltNameType_builtinNameForm */

/* START_OF_SYMBOL_DEFINITION _encode_AltNameType_builtinNameForm */
export const _encode_AltNameType_builtinNameForm = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AltNameType_builtinNameForm */

/* eslint-enable */
