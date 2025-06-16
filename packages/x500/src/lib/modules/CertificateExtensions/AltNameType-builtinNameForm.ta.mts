/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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

/**
 * @summary AltNameType_builtinNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltNameType-builtinNameForm ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type AltNameType_builtinNameForm =
    | _enum_for_AltNameType_builtinNameForm
    | ENUMERATED;

/**
 * @summary AltNameType_builtinNameForm_rfc822Name
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_rfc822Name: AltNameType_builtinNameForm = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfc822Name
 * @constant
 * @type {number}
 */
export const rfc822Name: AltNameType_builtinNameForm = AltNameType_builtinNameForm_rfc822Name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_dNSName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_dNSName: AltNameType_builtinNameForm = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNSName
 * @constant
 * @type {number}
 */
export const dNSName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_dNSName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_x400Address
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_x400Address: AltNameType_builtinNameForm = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary x400Address
 * @constant
 * @type {number}
 */
export const x400Address: AltNameType_builtinNameForm = AltNameType_builtinNameForm_x400Address; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_directoryName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_directoryName: AltNameType_builtinNameForm = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryName
 * @constant
 * @type {number}
 */
export const directoryName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_directoryName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_ediPartyName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_ediPartyName: AltNameType_builtinNameForm = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ediPartyName
 * @constant
 * @type {number}
 */
export const ediPartyName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_ediPartyName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_uniformResourceIdentifier: AltNameType_builtinNameForm = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export const uniformResourceIdentifier: AltNameType_builtinNameForm = AltNameType_builtinNameForm_uniformResourceIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_iPAddress
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_iPAddress: AltNameType_builtinNameForm = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPAddress
 * @constant
 * @type {number}
 */
export const iPAddress: AltNameType_builtinNameForm = AltNameType_builtinNameForm_iPAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_registeredId
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_registeredId: AltNameType_builtinNameForm = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registeredId
 * @constant
 * @type {number}
 */
export const registeredId: AltNameType_builtinNameForm = AltNameType_builtinNameForm_registeredId; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AltNameType_builtinNameForm = $._decodeEnumerated;


export const _encode_AltNameType_builtinNameForm = $._encodeEnumerated;


/* eslint-enable */
