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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_EnforcementAction */
/**
 * @summary EnforcementAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnforcementAction  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3), allow(4)}
 * ```@enum {number}
 */
export enum _enum_for_EnforcementAction {
    denyWithResponse = 0,
    denyWithoutResponse = 1,
    abortAssociation = 2,
    denyWithFalseResponse = 3,
    allow = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EnforcementAction */

/* START_OF_SYMBOL_DEFINITION EnforcementAction */
/**
 * @summary EnforcementAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnforcementAction  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3), allow(4)}
 * ```@enum {number}
 */
export type EnforcementAction = _enum_for_EnforcementAction;
/* END_OF_SYMBOL_DEFINITION EnforcementAction */

/* START_OF_SYMBOL_DEFINITION EnforcementAction */
/**
 * @summary EnforcementAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnforcementAction  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3), allow(4)}
 * ```@enum {number}
 */
export const EnforcementAction = _enum_for_EnforcementAction;
/* END_OF_SYMBOL_DEFINITION EnforcementAction */

/* START_OF_SYMBOL_DEFINITION EnforcementAction_denyWithResponse */
/**
 * @summary EnforcementAction_denyWithResponse
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithResponse: EnforcementAction =
    EnforcementAction.denyWithResponse; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EnforcementAction_denyWithResponse */

/* START_OF_SYMBOL_DEFINITION denyWithResponse */
/**
 * @summary denyWithResponse
 * @constant
 * @type {number}
 */
export const denyWithResponse: EnforcementAction =
    EnforcementAction.denyWithResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denyWithResponse */

/* START_OF_SYMBOL_DEFINITION EnforcementAction_denyWithoutResponse */
/**
 * @summary EnforcementAction_denyWithoutResponse
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithoutResponse: EnforcementAction =
    EnforcementAction.denyWithoutResponse; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EnforcementAction_denyWithoutResponse */

/* START_OF_SYMBOL_DEFINITION denyWithoutResponse */
/**
 * @summary denyWithoutResponse
 * @constant
 * @type {number}
 */
export const denyWithoutResponse: EnforcementAction =
    EnforcementAction.denyWithoutResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denyWithoutResponse */

/* START_OF_SYMBOL_DEFINITION EnforcementAction_abortAssociation */
/**
 * @summary EnforcementAction_abortAssociation
 * @constant
 * @type {number}
 */
export const EnforcementAction_abortAssociation: EnforcementAction =
    EnforcementAction.abortAssociation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EnforcementAction_abortAssociation */

/* START_OF_SYMBOL_DEFINITION abortAssociation */
/**
 * @summary abortAssociation
 * @constant
 * @type {number}
 */
export const abortAssociation: EnforcementAction =
    EnforcementAction.abortAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION abortAssociation */

/* START_OF_SYMBOL_DEFINITION EnforcementAction_denyWithFalseResponse */
/**
 * @summary EnforcementAction_denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithFalseResponse: EnforcementAction =
    EnforcementAction.denyWithFalseResponse; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EnforcementAction_denyWithFalseResponse */

/* START_OF_SYMBOL_DEFINITION denyWithFalseResponse */
/**
 * @summary denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const denyWithFalseResponse: EnforcementAction =
    EnforcementAction.denyWithFalseResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denyWithFalseResponse */

/* START_OF_SYMBOL_DEFINITION EnforcementAction_allow */
/**
 * @summary EnforcementAction_allow
 * @constant
 * @type {number}
 */
export const EnforcementAction_allow: EnforcementAction =
    EnforcementAction.allow; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EnforcementAction_allow */

/* START_OF_SYMBOL_DEFINITION allow */
/**
 * @summary allow
 * @constant
 * @type {number}
 */
export const allow: EnforcementAction =
    EnforcementAction.allow; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION allow */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnforcementAction */
let _cached_decoder_for_EnforcementAction: $.ASN1Decoder<EnforcementAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnforcementAction */

/* START_OF_SYMBOL_DEFINITION _decode_EnforcementAction */
/**
 * @summary Decodes an ASN.1 element into a(n) EnforcementAction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnforcementAction} The decoded data structure.
 */
export function _decode_EnforcementAction(el: _Element) {
    if (!_cached_decoder_for_EnforcementAction) {
        _cached_decoder_for_EnforcementAction = $._decodeEnumerated;
    }
    return _cached_decoder_for_EnforcementAction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnforcementAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnforcementAction */
let _cached_encoder_for_EnforcementAction: $.ASN1Encoder<EnforcementAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnforcementAction */

/* START_OF_SYMBOL_DEFINITION _encode_EnforcementAction */
/**
 * @summary Encodes a(n) EnforcementAction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnforcementAction, encoded as an ASN.1 Element.
 */
export function _encode_EnforcementAction(
    value: EnforcementAction,
    elGetter: $.ASN1Encoder<EnforcementAction>
) {
    if (!_cached_encoder_for_EnforcementAction) {
        _cached_encoder_for_EnforcementAction = $._encodeEnumerated;
    }
    return _cached_encoder_for_EnforcementAction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnforcementAction */

/* eslint-enable */
