/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuditDescriptor_auditToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditDescriptor-auditToken ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AuditDescriptor_auditToken = BIT_STRING;

/**
 * @summary AuditDescriptor_auditToken_muxToken
 * @constant
 */
export
const AuditDescriptor_auditToken_muxToken: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary muxToken
 * @constant
 */
export
const muxToken: number = AuditDescriptor_auditToken_muxToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_modemToken
 * @constant
 */
export
const AuditDescriptor_auditToken_modemToken: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary modemToken
 * @constant
 */
export
const modemToken: number = AuditDescriptor_auditToken_modemToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_mediaToken
 * @constant
 */
export
const AuditDescriptor_auditToken_mediaToken: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaToken
 * @constant
 */
export
const mediaToken: number = AuditDescriptor_auditToken_mediaToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_eventsToken
 * @constant
 */
export
const AuditDescriptor_auditToken_eventsToken: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary eventsToken
 * @constant
 */
export
const eventsToken: number = AuditDescriptor_auditToken_eventsToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_signalsToken
 * @constant
 */
export
const AuditDescriptor_auditToken_signalsToken: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary signalsToken
 * @constant
 */
export
const signalsToken: number = AuditDescriptor_auditToken_signalsToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_digitMapToken
 * @constant
 */
export
const AuditDescriptor_auditToken_digitMapToken: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary digitMapToken
 * @constant
 */
export
const digitMapToken: number = AuditDescriptor_auditToken_digitMapToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_statsToken
 * @constant
 */
export
const AuditDescriptor_auditToken_statsToken: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary statsToken
 * @constant
 */
export
const statsToken: number = AuditDescriptor_auditToken_statsToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_observedEventsToken
 * @constant
 */
export
const AuditDescriptor_auditToken_observedEventsToken: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary observedEventsToken
 * @constant
 */
export
const observedEventsToken: number = AuditDescriptor_auditToken_observedEventsToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_packagesToken
 * @constant
 */
export
const AuditDescriptor_auditToken_packagesToken: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary packagesToken
 * @constant
 */
export
const packagesToken: number = AuditDescriptor_auditToken_packagesToken; /* SHORT_NAMED_BIT */

/**
 * @summary AuditDescriptor_auditToken_eventBufferToken
 * @constant
 */
export
const AuditDescriptor_auditToken_eventBufferToken: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary eventBufferToken
 * @constant
 */
export
const eventBufferToken: number = AuditDescriptor_auditToken_eventBufferToken; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AuditDescriptor_auditToken: $.ASN1Decoder<AuditDescriptor_auditToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditDescriptor_auditToken
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditDescriptor_auditToken (el: _Element): AuditDescriptor_auditToken {
    if (!_cached_decoder_for_AuditDescriptor_auditToken) { _cached_decoder_for_AuditDescriptor_auditToken = $._decodeBitString; }
    return _cached_decoder_for_AuditDescriptor_auditToken(el);
}

let _cached_encoder_for_AuditDescriptor_auditToken: $.ASN1Encoder<AuditDescriptor_auditToken> | null = null;

/**
 * @summary Encodes a(n) AuditDescriptor_auditToken into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditDescriptor_auditToken, encoded as an ASN.1 Element.
 */
export
function _encode_AuditDescriptor_auditToken (value: AuditDescriptor_auditToken, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditDescriptor_auditToken) { _cached_encoder_for_AuditDescriptor_auditToken = $._encodeBitString; }
    return _cached_encoder_for_AuditDescriptor_auditToken(value, elGetter);
}


/* eslint-enable */
