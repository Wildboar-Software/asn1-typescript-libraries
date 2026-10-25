/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
 * Built-in GeneralName form discriminator for matching (values 1..8). Does not
 * include `otherName` (0) — that uses `otherNameForm` with an OID. Matching
 * tests presence of that form in SAN, not the encoding of the name itself.
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
export const AltNameType_builtinNameForm_rfc822Name = _enum_for_AltNameType_builtinNameForm.rfc822Name; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfc822Name
 * @constant
 * @type {number}
 */
export const rfc822Name = AltNameType_builtinNameForm_rfc822Name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_dNSName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_dNSName = _enum_for_AltNameType_builtinNameForm.dNSName; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNSName
 * @constant
 * @type {number}
 */
export const dNSName = AltNameType_builtinNameForm_dNSName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_x400Address
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_x400Address = _enum_for_AltNameType_builtinNameForm.x400Address; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary x400Address
 * @constant
 * @type {number}
 */
export const x400Address = AltNameType_builtinNameForm_x400Address; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_directoryName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_directoryName = _enum_for_AltNameType_builtinNameForm.directoryName; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryName
 * @constant
 * @type {number}
 */
export const directoryName = AltNameType_builtinNameForm_directoryName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_ediPartyName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_ediPartyName = _enum_for_AltNameType_builtinNameForm.ediPartyName; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ediPartyName
 * @constant
 * @type {number}
 */
export const ediPartyName = AltNameType_builtinNameForm_ediPartyName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_uniformResourceIdentifier = _enum_for_AltNameType_builtinNameForm.uniformResourceIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export const uniformResourceIdentifier = AltNameType_builtinNameForm_uniformResourceIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_iPAddress
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_iPAddress = _enum_for_AltNameType_builtinNameForm.iPAddress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPAddress
 * @constant
 * @type {number}
 */
export const iPAddress = AltNameType_builtinNameForm_iPAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_registeredId
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_registeredId = _enum_for_AltNameType_builtinNameForm.registeredId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registeredId
 * @constant
 * @type {number}
 */
export const registeredId = AltNameType_builtinNameForm_registeredId; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AltNameType_builtinNameForm = $._decodeEnumerated;


export const _encode_AltNameType_builtinNameForm = $._encodeEnumerated;


/* eslint-enable */
