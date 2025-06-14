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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION _enum_for_AttributeStatus */
/**
 * @summary AttributeStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2) }
 * ```@enum {number}
 */
export
enum _enum_for_AttributeStatus {
    added = 0,
    modified = 1,
    removed = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AttributeStatus */

/* START_OF_SYMBOL_DEFINITION AttributeStatus */
/**
 * @summary AttributeStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2) }
 * ```@enum {number}
 */
export
type AttributeStatus = _enum_for_AttributeStatus;
/* END_OF_SYMBOL_DEFINITION AttributeStatus */

/* START_OF_SYMBOL_DEFINITION AttributeStatus */
/**
 * @summary AttributeStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeStatus  ::=  ENUMERATED {
 *     added (0),
 *     modified (1),
 *     removed (2) }
 * ```@enum {number}
 */
export
const AttributeStatus = _enum_for_AttributeStatus;
/* END_OF_SYMBOL_DEFINITION AttributeStatus */

/* START_OF_SYMBOL_DEFINITION AttributeStatus_added */
/**
 * @summary AttributeStatus_added
 * @constant
 * @type {number}
 */
export
const AttributeStatus_added: AttributeStatus = AttributeStatus.added; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeStatus_added */

/* START_OF_SYMBOL_DEFINITION added */
/**
 * @summary added
 * @constant
 * @type {number}
 */
export
const added: AttributeStatus = AttributeStatus.added; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION added */

/* START_OF_SYMBOL_DEFINITION AttributeStatus_modified */
/**
 * @summary AttributeStatus_modified
 * @constant
 * @type {number}
 */
export
const AttributeStatus_modified: AttributeStatus = AttributeStatus.modified; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeStatus_modified */

/* START_OF_SYMBOL_DEFINITION modified */
/**
 * @summary modified
 * @constant
 * @type {number}
 */
export
const modified: AttributeStatus = AttributeStatus.modified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION modified */

/* START_OF_SYMBOL_DEFINITION AttributeStatus_removed */
/**
 * @summary AttributeStatus_removed
 * @constant
 * @type {number}
 */
export
const AttributeStatus_removed: AttributeStatus = AttributeStatus.removed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeStatus_removed */

/* START_OF_SYMBOL_DEFINITION removed */
/**
 * @summary removed
 * @constant
 * @type {number}
 */
export
const removed: AttributeStatus = AttributeStatus.removed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION removed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeStatus */
let _cached_decoder_for_AttributeStatus: $.ASN1Decoder<AttributeStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeStatus */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeStatus} The decoded data structure.
 */
export
function _decode_AttributeStatus (el: _Element) {
    if (!_cached_decoder_for_AttributeStatus) { _cached_decoder_for_AttributeStatus = $._decodeEnumerated; }
    return _cached_decoder_for_AttributeStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeStatus */
let _cached_encoder_for_AttributeStatus: $.ASN1Encoder<AttributeStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeStatus */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeStatus */
/**
 * @summary Encodes a(n) AttributeStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeStatus, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeStatus (value: AttributeStatus, elGetter: $.ASN1Encoder<AttributeStatus>) {
    if (!_cached_encoder_for_AttributeStatus) { _cached_encoder_for_AttributeStatus = $._encodeEnumerated; }
    return _cached_encoder_for_AttributeStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeStatus */

/* eslint-enable */
