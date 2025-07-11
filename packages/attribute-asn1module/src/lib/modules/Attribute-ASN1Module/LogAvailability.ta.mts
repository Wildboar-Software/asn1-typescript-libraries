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
import { AvailabilityStatus, _decode_AvailabilityStatus, _encode_AvailabilityStatus } from "../Attribute-ASN1Module/AvailabilityStatus.ta.mjs";
/**
 * @summary LogAvailability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogAvailability  ::=  AvailabilityStatus(WITH COMPONENT (logFull | offDuty))
 * ```
 */
export
type LogAvailability = AvailabilityStatus; // DefinedType

let _cached_decoder_for_LogAvailability: $.ASN1Decoder<LogAvailability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogAvailability} The decoded data structure.
 */
export
function _decode_LogAvailability (el: _Element): LogAvailability {
    if (!_cached_decoder_for_LogAvailability) { _cached_decoder_for_LogAvailability = _decode_AvailabilityStatus; }
    return _cached_decoder_for_LogAvailability(el);
}

let _cached_encoder_for_LogAvailability: $.ASN1Encoder<LogAvailability> | null = null;

/**
 * @summary Encodes a(n) LogAvailability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogAvailability, encoded as an ASN.1 Element.
 */
export
function _encode_LogAvailability (value: LogAvailability, elGetter: $.ASN1Encoder<LogAvailability>): _Element {
    if (!_cached_encoder_for_LogAvailability) { _cached_encoder_for_LogAvailability = _encode_AvailabilityStatus; }
    return _cached_encoder_for_LogAvailability(value, elGetter);
}


/* eslint-enable */
