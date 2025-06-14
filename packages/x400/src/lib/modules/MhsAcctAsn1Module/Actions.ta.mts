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

/* START_OF_SYMBOL_DEFINITION Actions */
/**
 * @summary Actions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Actions  ::=  BIT STRING {
 *   owner-report(0), originator-on-previous-dl(1), secure-dl-operation(2)
 * }
 * ```
 */
export type Actions = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Actions */

/* START_OF_SYMBOL_DEFINITION Actions_owner_report */
/**
 * @summary Actions_owner_report
 * @constant
 */
export const Actions_owner_report: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Actions_owner_report */

/* START_OF_SYMBOL_DEFINITION owner_report */
/**
 * @summary owner_report
 * @constant
 */
export const owner_report: number = Actions_owner_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION owner_report */

/* START_OF_SYMBOL_DEFINITION Actions_originator_on_previous_dl */
/**
 * @summary Actions_originator_on_previous_dl
 * @constant
 */
export const Actions_originator_on_previous_dl: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Actions_originator_on_previous_dl */

/* START_OF_SYMBOL_DEFINITION originator_on_previous_dl */
/**
 * @summary originator_on_previous_dl
 * @constant
 */
export const originator_on_previous_dl: number = Actions_originator_on_previous_dl; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION originator_on_previous_dl */

/* START_OF_SYMBOL_DEFINITION Actions_secure_dl_operation */
/**
 * @summary Actions_secure_dl_operation
 * @constant
 */
export const Actions_secure_dl_operation: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Actions_secure_dl_operation */

/* START_OF_SYMBOL_DEFINITION secure_dl_operation */
/**
 * @summary secure_dl_operation
 * @constant
 */
export const secure_dl_operation: number = Actions_secure_dl_operation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION secure_dl_operation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Actions */
let _cached_decoder_for_Actions: $.ASN1Decoder<Actions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Actions */

/* START_OF_SYMBOL_DEFINITION _decode_Actions */
/**
 * @summary Decodes an ASN.1 element into a(n) Actions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Actions} The decoded data structure.
 */
export function _decode_Actions(el: _Element) {
    if (!_cached_decoder_for_Actions) {
        _cached_decoder_for_Actions = $._decodeBitString;
    }
    return _cached_decoder_for_Actions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Actions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Actions */
let _cached_encoder_for_Actions: $.ASN1Encoder<Actions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Actions */

/* START_OF_SYMBOL_DEFINITION _encode_Actions */
/**
 * @summary Encodes a(n) Actions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Actions, encoded as an ASN.1 Element.
 */
export function _encode_Actions(
    value: Actions,
    elGetter: $.ASN1Encoder<Actions>
) {
    if (!_cached_encoder_for_Actions) {
        _cached_encoder_for_Actions = $._encodeBitString;
    }
    return _cached_encoder_for_Actions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Actions */

/* eslint-enable */
