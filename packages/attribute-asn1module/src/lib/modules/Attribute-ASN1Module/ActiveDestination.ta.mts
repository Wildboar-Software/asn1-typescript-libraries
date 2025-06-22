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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Destination, _decode_Destination, _encode_Destination } from "../Attribute-ASN1Module/Destination.ta.mjs";
/**
 * @summary ActiveDestination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActiveDestination  ::= 
 *   Destination(WITH COMPONENTS {
 *                 single    PRESENT,
 *                 multiple  ABSENT
 *               })
 * ```
 */
export
type ActiveDestination = Destination; // DefinedType

let _cached_decoder_for_ActiveDestination: $.ASN1Decoder<ActiveDestination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActiveDestination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActiveDestination} The decoded data structure.
 */
export
function _decode_ActiveDestination (el: _Element) {
    if (!_cached_decoder_for_ActiveDestination) { _cached_decoder_for_ActiveDestination = _decode_Destination; }
    return _cached_decoder_for_ActiveDestination(el);
}

let _cached_encoder_for_ActiveDestination: $.ASN1Encoder<ActiveDestination> | null = null;

/**
 * @summary Encodes a(n) ActiveDestination into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActiveDestination, encoded as an ASN.1 Element.
 */
export
function _encode_ActiveDestination (value: ActiveDestination, elGetter: $.ASN1Encoder<ActiveDestination>) {
    if (!_cached_encoder_for_ActiveDestination) { _cached_encoder_for_ActiveDestination = _encode_Destination; }
    return _cached_encoder_for_ActiveDestination(value, elGetter);
}


/* eslint-enable */
