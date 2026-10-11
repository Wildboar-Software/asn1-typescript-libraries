/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MsgProtocolInfoCapability
 * @description
 *
 * Messaging protocol the mailbox for this entry
 * supports: ACP 127, or ACP 123 (military message
 * handling). ACP 133 (June 1998), paragraph 101,
 * defines the directory in support of both.
 * ACP 133 SUPP-1(A) assigns the two integers.
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
const _enum_for_MsgProtocolInfoCapability = {
    acp_127: 0,
    acp_123: 1,
} as const;

export
type _enum_for_MsgProtocolInfoCapability =
    (typeof _enum_for_MsgProtocolInfoCapability)[keyof typeof _enum_for_MsgProtocolInfoCapability];

/**
 * @summary MsgProtocolInfoCapability
 * @description
 *
 * Messaging protocol the mailbox for this entry
 * supports: ACP 127, or ACP 123 (military message
 * handling). ACP 133 (June 1998), paragraph 101,
 * defines the directory in support of both.
 * ACP 133 SUPP-1(A) assigns the two integers.
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
 * Messaging protocol the mailbox for this entry
 * supports: ACP 127, or ACP 123 (military message
 * handling). ACP 133 (June 1998), paragraph 101,
 * defines the directory in support of both.
 * ACP 133 SUPP-1(A) assigns the two integers.
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
 * The mailbox supports ACP 127.
 * @summary MsgProtocolInfoCapability_acp_127
 * @constant
 * @type {number}
 */
export
const MsgProtocolInfoCapability_acp_127: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_127; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link MsgProtocolInfoCapability_acp_127}.
 * @summary acp_127
 * @constant
 * @type {number}
 */
export
const acp_127: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_127; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * The mailbox supports ACP 123.
 * @summary MsgProtocolInfoCapability_acp_123
 * @constant
 * @type {number}
 */
export
const MsgProtocolInfoCapability_acp_123: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_123; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link MsgProtocolInfoCapability_acp_123}.
 * @summary acp_123
 * @constant
 * @type {number}
 */
export
const acp_123: MsgProtocolInfoCapability = MsgProtocolInfoCapability.acp_123; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MsgProtocolInfoCapability: $.ASN1Decoder<MsgProtocolInfoCapability> =
    $._decodeEnumerated as $.ASN1Decoder<MsgProtocolInfoCapability>;
export const _encode_MsgProtocolInfoCapability: $.ASN1Encoder<MsgProtocolInfoCapability> =
    $._encodeEnumerated as $.ASN1Encoder<MsgProtocolInfoCapability>;


/* eslint-enable */
