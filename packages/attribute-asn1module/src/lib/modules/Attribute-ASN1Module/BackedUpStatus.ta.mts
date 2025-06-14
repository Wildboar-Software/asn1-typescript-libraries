/* eslint-disable */
import {
    BOOLEAN,
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



/* START_OF_SYMBOL_DEFINITION BackedUpStatus */
/**
 * @summary BackedUpStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BackedUpStatus  ::=  BOOLEAN
 * ```
 */
export
type BackedUpStatus = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackedUpStatus */
let _cached_decoder_for_BackedUpStatus: $.ASN1Decoder<BackedUpStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _decode_BackedUpStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) BackedUpStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackedUpStatus} The decoded data structure.
 */
export
function _decode_BackedUpStatus (el: _Element) {
    if (!_cached_decoder_for_BackedUpStatus) { _cached_decoder_for_BackedUpStatus = $._decodeBoolean; }
    return _cached_decoder_for_BackedUpStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackedUpStatus */
let _cached_encoder_for_BackedUpStatus: $.ASN1Encoder<BackedUpStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _encode_BackedUpStatus */
/**
 * @summary Encodes a(n) BackedUpStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackedUpStatus, encoded as an ASN.1 Element.
 */
export
function _encode_BackedUpStatus (value: BackedUpStatus, elGetter: $.ASN1Encoder<BackedUpStatus>) {
    if (!_cached_encoder_for_BackedUpStatus) { _cached_encoder_for_BackedUpStatus = $._encodeBoolean; }
    return _cached_encoder_for_BackedUpStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackedUpStatus */

/* eslint-enable */
