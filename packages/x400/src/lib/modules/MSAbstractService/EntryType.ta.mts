/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION EntryType */
/**
 * @summary EntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryType  ::=  INTEGER {
 *   delivered-message(0), delivered-report(1),
 *   returned-content(2),
 *   -- 1994 extensions
 *   submitted-message(3), submitted-probe(4), draft-message(5),
 *   auto-action-event(6)}
 * ```
 */
export type EntryType = INTEGER;
/* END_OF_SYMBOL_DEFINITION EntryType */

/* START_OF_SYMBOL_DEFINITION EntryType_delivered_message */
/**
 * @summary EntryType_delivered_message
 * @constant
 * @type {number}
 */
export const EntryType_delivered_message: EntryType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryType_delivered_message */

/* START_OF_SYMBOL_DEFINITION delivered_message */
/**
 * @summary EntryType_delivered_message
 * @constant
 * @type {number}
 */
export const delivered_message: EntryType = EntryType_delivered_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delivered_message */

/* START_OF_SYMBOL_DEFINITION EntryType_delivered_report */
/**
 * @summary EntryType_delivered_report
 * @constant
 * @type {number}
 */
export const EntryType_delivered_report: EntryType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryType_delivered_report */

/* START_OF_SYMBOL_DEFINITION delivered_report */
/**
 * @summary EntryType_delivered_report
 * @constant
 * @type {number}
 */
export const delivered_report: EntryType = EntryType_delivered_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delivered_report */

/* START_OF_SYMBOL_DEFINITION EntryType_returned_content */
/**
 * @summary EntryType_returned_content
 * @constant
 * @type {number}
 */
export const EntryType_returned_content: EntryType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryType_returned_content */

/* START_OF_SYMBOL_DEFINITION returned_content */
/**
 * @summary EntryType_returned_content
 * @constant
 * @type {number}
 */
export const returned_content: EntryType = EntryType_returned_content; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returned_content */

/* START_OF_SYMBOL_DEFINITION EntryType_submitted_message */
/**
 * @summary EntryType_submitted_message
 * @constant
 * @type {number}
 */
export const EntryType_submitted_message: EntryType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryType_submitted_message */

/* START_OF_SYMBOL_DEFINITION submitted_message */
/**
 * @summary EntryType_submitted_message
 * @constant
 * @type {number}
 */
export const submitted_message: EntryType = EntryType_submitted_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION submitted_message */

/* START_OF_SYMBOL_DEFINITION EntryType_submitted_probe */
/**
 * @summary EntryType_submitted_probe
 * @constant
 * @type {number}
 */
export const EntryType_submitted_probe: EntryType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryType_submitted_probe */

/* START_OF_SYMBOL_DEFINITION submitted_probe */
/**
 * @summary EntryType_submitted_probe
 * @constant
 * @type {number}
 */
export const submitted_probe: EntryType = EntryType_submitted_probe; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION submitted_probe */

/* START_OF_SYMBOL_DEFINITION EntryType_draft_message */
/**
 * @summary EntryType_draft_message
 * @constant
 * @type {number}
 */
export const EntryType_draft_message: EntryType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryType_draft_message */

/* START_OF_SYMBOL_DEFINITION draft_message */
/**
 * @summary EntryType_draft_message
 * @constant
 * @type {number}
 */
export const draft_message: EntryType = EntryType_draft_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION draft_message */

/* START_OF_SYMBOL_DEFINITION EntryType_auto_action_event */
/**
 * @summary EntryType_auto_action_event
 * @constant
 * @type {number}
 */
export const EntryType_auto_action_event: EntryType = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryType_auto_action_event */

/* START_OF_SYMBOL_DEFINITION auto_action_event */
/**
 * @summary EntryType_auto_action_event
 * @constant
 * @type {number}
 */
export const auto_action_event: EntryType = EntryType_auto_action_event; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_action_event */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryType */
let _cached_decoder_for_EntryType: $.ASN1Decoder<EntryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryType */

/* START_OF_SYMBOL_DEFINITION _decode_EntryType */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryType} The decoded data structure.
 */
export function _decode_EntryType(el: _Element) {
    if (!_cached_decoder_for_EntryType) {
        _cached_decoder_for_EntryType = $._decodeInteger;
    }
    return _cached_decoder_for_EntryType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryType */
let _cached_encoder_for_EntryType: $.ASN1Encoder<EntryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryType */

/* START_OF_SYMBOL_DEFINITION _encode_EntryType */
/**
 * @summary Encodes a(n) EntryType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryType, encoded as an ASN.1 Element.
 */
export function _encode_EntryType(
    value: EntryType,
    elGetter: $.ASN1Encoder<EntryType>
) {
    if (!_cached_encoder_for_EntryType) {
        _cached_encoder_for_EntryType = $._encodeInteger;
    }
    return _cached_encoder_for_EntryType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryType */

/* eslint-enable */
