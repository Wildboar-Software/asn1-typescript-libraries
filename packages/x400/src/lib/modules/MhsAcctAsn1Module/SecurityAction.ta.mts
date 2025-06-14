/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION SecurityAction */
/**
 * @summary SecurityAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityAction  ::=  BIT STRING {
 *   unspecified(0), origin-authentication(1), security-label-check(2)}
 * ```
 */
export type SecurityAction = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION SecurityAction */

/* START_OF_SYMBOL_DEFINITION SecurityAction_unspecified */
/**
 * @summary SecurityAction_unspecified
 * @constant
 */
export const SecurityAction_unspecified: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SecurityAction_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary unspecified
 * @constant
 */
export const unspecified: number = SecurityAction_unspecified; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION SecurityAction_origin_authentication */
/**
 * @summary SecurityAction_origin_authentication
 * @constant
 */
export const SecurityAction_origin_authentication: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SecurityAction_origin_authentication */

/* START_OF_SYMBOL_DEFINITION origin_authentication */
/**
 * @summary origin_authentication
 * @constant
 */
export const origin_authentication: number = SecurityAction_origin_authentication; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION origin_authentication */

/* START_OF_SYMBOL_DEFINITION SecurityAction_security_label_check */
/**
 * @summary SecurityAction_security_label_check
 * @constant
 */
export const SecurityAction_security_label_check: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SecurityAction_security_label_check */

/* START_OF_SYMBOL_DEFINITION security_label_check */
/**
 * @summary security_label_check
 * @constant
 */
export const security_label_check: number = SecurityAction_security_label_check; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION security_label_check */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAction */
let _cached_decoder_for_SecurityAction: $.ASN1Decoder<SecurityAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAction */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityAction */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAction} The decoded data structure.
 */
export function _decode_SecurityAction(el: _Element) {
    if (!_cached_decoder_for_SecurityAction) {
        _cached_decoder_for_SecurityAction = $._decodeBitString;
    }
    return _cached_decoder_for_SecurityAction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAction */
let _cached_encoder_for_SecurityAction: $.ASN1Encoder<SecurityAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAction */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityAction */
/**
 * @summary Encodes a(n) SecurityAction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAction, encoded as an ASN.1 Element.
 */
export function _encode_SecurityAction(
    value: SecurityAction,
    elGetter: $.ASN1Encoder<SecurityAction>
) {
    if (!_cached_encoder_for_SecurityAction) {
        _cached_encoder_for_SecurityAction = $._encodeBitString;
    }
    return _cached_encoder_for_SecurityAction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityAction */

/* eslint-enable */
