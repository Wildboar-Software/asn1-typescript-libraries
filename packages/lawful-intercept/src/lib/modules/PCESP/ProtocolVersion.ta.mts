/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_ProtocolVersion
 * @description
 *
 * Which PacketCable Electronic Surveillance Specification the PDU
 * follows. The module comment says versions IO1 and IO2 do not support
 * protocol versioning, so the lowest named value is `v3`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_ProtocolVersion {
    /**
     * PacketCable Electronic Surveillance Specification I03.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    v3 = 3,
    /**
     * PacketCable Electronic Surveillance Specification I04. This
     * edition publishes the module as `version-4(4)`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    v4 = 4,
}

/**
 * @summary ProtocolVersion
 * @description
 *
 * Which PacketCable Electronic Surveillance Specification the PDU
 * follows. The module comment says versions IO1 and IO2 do not support
 * protocol versioning, so the lowest named value is `v3`.
 *
 * `v3` supports specification I03. `v4` supports specification I04.
 * This edition publishes the module as `version-4(4)`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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
 * @description
 *
 * PacketCable Electronic Surveillance Specification I03.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const ProtocolVersion_v3: ProtocolVersion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v3
 * @description
 *
 * PacketCable Electronic Surveillance Specification I03.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const v3: ProtocolVersion = ProtocolVersion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolVersion_v4
 * @description
 *
 * PacketCable Electronic Surveillance Specification I04. This edition
 * publishes the module as `version-4(4)`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const ProtocolVersion_v4: ProtocolVersion = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v4
 * @description
 *
 * PacketCable Electronic Surveillance Specification I04. This edition
 * publishes the module as `version-4(4)`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const v4: ProtocolVersion = ProtocolVersion_v4; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ProtocolVersion: $.ASN1Decoder<ProtocolVersion> = $._decodeEnumerated;
export const _encode_ProtocolVersion: $.ASN1Encoder<ProtocolVersion> = $._encodeEnumerated;


/* eslint-enable */
