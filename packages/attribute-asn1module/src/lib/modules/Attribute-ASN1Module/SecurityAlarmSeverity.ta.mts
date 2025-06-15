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
import { PerceivedSeverity, _enum_for_PerceivedSeverity, _decode_PerceivedSeverity, _encode_PerceivedSeverity } from "../Attribute-ASN1Module/PerceivedSeverity.ta.mjs";
/**
 * @summary SecurityAlarmSeverity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityAlarmSeverity  ::= 
 *   PerceivedSeverity(indeterminate | critical | major | minor | warning)
 * ```
 */
export
type SecurityAlarmSeverity = PerceivedSeverity; // DefinedType

let _cached_decoder_for_SecurityAlarmSeverity: $.ASN1Decoder<SecurityAlarmSeverity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAlarmSeverity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAlarmSeverity} The decoded data structure.
 */
export
function _decode_SecurityAlarmSeverity (el: _Element) {
    if (!_cached_decoder_for_SecurityAlarmSeverity) { _cached_decoder_for_SecurityAlarmSeverity = _decode_PerceivedSeverity; }
    return _cached_decoder_for_SecurityAlarmSeverity(el);
}

let _cached_encoder_for_SecurityAlarmSeverity: $.ASN1Encoder<SecurityAlarmSeverity> | null = null;

/**
 * @summary Encodes a(n) SecurityAlarmSeverity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAlarmSeverity, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityAlarmSeverity (value: SecurityAlarmSeverity, elGetter: $.ASN1Encoder<SecurityAlarmSeverity>) {
    if (!_cached_encoder_for_SecurityAlarmSeverity) { _cached_encoder_for_SecurityAlarmSeverity = _encode_PerceivedSeverity; }
    return _cached_encoder_for_SecurityAlarmSeverity(value, elGetter);
}


/* eslint-enable */
