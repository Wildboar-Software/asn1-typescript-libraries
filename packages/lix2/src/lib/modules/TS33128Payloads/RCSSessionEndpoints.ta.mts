/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionEndpoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionEndpoints  ::=  ENUMERATED
 * {
 *     remoteOnly(1),
 *     localOnly(2),
 *     localAndRemote(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionEndpoints {
    remoteOnly = 1,
    localOnly = 2,
    localAndRemote = 3,
}

/**
 * @summary RCSSessionEndpoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionEndpoints  ::=  ENUMERATED
 * {
 *     remoteOnly(1),
 *     localOnly(2),
 *     localAndRemote(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionEndpoints = _enum_for_RCSSessionEndpoints;

/**
 * @summary RCSSessionEndpoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionEndpoints  ::=  ENUMERATED
 * {
 *     remoteOnly(1),
 *     localOnly(2),
 *     localAndRemote(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionEndpoints = _enum_for_RCSSessionEndpoints;

/**
 * @summary RCSSessionEndpoints_remoteOnly
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_remoteOnly: RCSSessionEndpoints = RCSSessionEndpoints.remoteOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remoteOnly
 * @constant
 * @type {number}
 */
export
const remoteOnly: RCSSessionEndpoints = RCSSessionEndpoints.remoteOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionEndpoints_localOnly
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_localOnly: RCSSessionEndpoints = RCSSessionEndpoints.localOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localOnly
 * @constant
 * @type {number}
 */
export
const localOnly: RCSSessionEndpoints = RCSSessionEndpoints.localOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionEndpoints_localAndRemote
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_localAndRemote: RCSSessionEndpoints = RCSSessionEndpoints.localAndRemote; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localAndRemote
 * @constant
 * @type {number}
 */
export
const localAndRemote: RCSSessionEndpoints = RCSSessionEndpoints.localAndRemote; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionEndpoints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RCSSessionEndpoints = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RCSSessionEndpoints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionEndpoints, encoded as an ASN.1 Element.
 */
export const _encode_RCSSessionEndpoints = $._encodeEnumerated;


/* eslint-enable */
