/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ProtocolVersion {
    v3 = 3,
    v4 = 4,
}

/**
 * @summary ProtocolVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolVersion  ::=  ENUMERATED {
 *     -- Versions IO1 and IO2 do not support protocol versioning.
 *     v3(3), -- Version supporting PacketCable Electronic Surveillance
 *     -- Specification I03
 *     v4(4), -- Version supporting PacketCable Electronic Surveillance
 *     -- Specification I04
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProtocolVersion = _enum_for_ProtocolVersion | ENUMERATED;

/**
 * @summary ProtocolVersion_v3
 * @constant
 * @type {number}
 */
export
const ProtocolVersion_v3: ProtocolVersion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v3
 * @constant
 * @type {number}
 */
export
const v3: ProtocolVersion = ProtocolVersion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolVersion_v4
 * @constant
 * @type {number}
 */
export
const ProtocolVersion_v4: ProtocolVersion = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v4
 * @constant
 * @type {number}
 */
export
const v4: ProtocolVersion = ProtocolVersion_v4; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ProtocolVersion: $.ASN1Decoder<ProtocolVersion> = $._decodeEnumerated;
export const _encode_ProtocolVersion: $.ASN1Encoder<ProtocolVersion> = $._encodeEnumerated;


/* eslint-enable */
