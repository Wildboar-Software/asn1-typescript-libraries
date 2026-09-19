/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MsgProtocolInfoCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MsgProtocolInfoCapability  ::=  ENUMERATED { acp-127(0), acp-123(1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MsgProtocolInfoCapability {
    acp_127 = 0,
    acp_123 = 1,
}

/**
 * @summary MsgProtocolInfoCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MsgProtocolInfoCapability  ::=  ENUMERATED { acp-127(0), acp-123(1) }
 * ```
 * 
 * @enum {number}
 */
export
type MsgProtocolInfoCapability = _enum_for_MsgProtocolInfoCapability;

/**
 * @summary MsgProtocolInfoCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MsgProtocolInfoCapability  ::=  ENUMERATED { acp-127(0), acp-123(1) }
 * ```
 * 
 * @enum {number}
 */
export
const MsgProtocolInfoCapability = _enum_for_MsgProtocolInfoCapability;

/**
 * @summary MsgProtocolInfoCapability_acp_127
 * @constant
 * @type {number}
 */
export
const MsgProtocolInfoCapability_acp_127: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_127; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acp_127
 * @constant
 * @type {number}
 */
export
const acp_127: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_127; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MsgProtocolInfoCapability_acp_123
 * @constant
 * @type {number}
 */
export
const MsgProtocolInfoCapability_acp_123: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_123; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acp_123
 * @constant
 * @type {number}
 */
export
const acp_123: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_123; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MsgProtocolInfoCapability: $.ASN1Decoder<MsgProtocolInfoCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MsgProtocolInfoCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MsgProtocolInfoCapability (el: _Element): MsgProtocolInfoCapability {
    if (!_cached_decoder_for_MsgProtocolInfoCapability) { _cached_decoder_for_MsgProtocolInfoCapability = $._decodeEnumerated; }
    return _cached_decoder_for_MsgProtocolInfoCapability(el);
}

let _cached_encoder_for_MsgProtocolInfoCapability: $.ASN1Encoder<MsgProtocolInfoCapability> | null = null;

/**
 * @summary Encodes a(n) MsgProtocolInfoCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MsgProtocolInfoCapability, encoded as an ASN.1 Element.
 */
export
function _encode_MsgProtocolInfoCapability (value: MsgProtocolInfoCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MsgProtocolInfoCapability) { _cached_encoder_for_MsgProtocolInfoCapability = $._encodeEnumerated; }
    return _cached_encoder_for_MsgProtocolInfoCapability(value, elGetter);
}


/* eslint-enable */
