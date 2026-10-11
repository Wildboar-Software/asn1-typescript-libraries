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
export const _decode_MsgProtocolInfoCapability = $._decodeEnumerated;
export const _encode_MsgProtocolInfoCapability = $._encodeEnumerated;


/* eslint-enable */
