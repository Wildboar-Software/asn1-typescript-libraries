/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionEndpoints
 * @description
 * 
 * The RCSSessionEndpoints shall be set to indicate whether the RCS Session is
 * currently established between the server and the remote endpoint, between the
 * server and the local client or from the remote endpoint to the local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * Shall be selected if the session has been established only between the
     * RCS Server and the remote endpoint.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.2.
     */
    remoteOnly = 1,
    /**
     * @description
     *
     * Shall be selected if the session has been established only between the
     * RCS Server and the local client.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.2.
     */
    localOnly = 2,
    /**
     * @description
     *
     * Shall be selected if the session has been established between the local
     * RCS Client and a remote endpoint.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.2.
     */
    localAndRemote = 3,
}

/**
 * @summary RCSSessionEndpoints
 * @description
 * 
 * The RCSSessionEndpoints shall be set to indicate whether the RCS Session is
 * currently established between the server and the remote endpoint, between the
 * server and the local client or from the remote endpoint to the local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The RCSSessionEndpoints shall be set to indicate whether the RCS Session is
 * currently established between the server and the remote endpoint, between the
 * server and the local client or from the remote endpoint to the local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * @description
 *
 * Shall be selected if the session has been established only between the RCS
 * Server and the remote endpoint.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_remoteOnly: RCSSessionEndpoints = RCSSessionEndpoints.remoteOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remoteOnly
 * @description
 *
 * Shall be selected if the session has been established only between the RCS
 * Server and the remote endpoint.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const remoteOnly: RCSSessionEndpoints = RCSSessionEndpoints.remoteOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionEndpoints_localOnly
 * @description
 *
 * Shall be selected if the session has been established only between the RCS
 * Server and the local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_localOnly: RCSSessionEndpoints = RCSSessionEndpoints.localOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localOnly
 * @description
 *
 * Shall be selected if the session has been established only between the RCS
 * Server and the local client.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const localOnly: RCSSessionEndpoints = RCSSessionEndpoints.localOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionEndpoints_localAndRemote
 * @description
 *
 * Shall be selected if the session has been established between the local RCS
 * Client and a remote endpoint.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_localAndRemote: RCSSessionEndpoints = RCSSessionEndpoints.localAndRemote; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localAndRemote
 * @description
 *
 * Shall be selected if the session has been established between the local RCS
 * Client and a remote endpoint.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.2.
 *
 * @constant
 * @type {number}
 */
export
const localAndRemote: RCSSessionEndpoints = RCSSessionEndpoints.localAndRemote; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RCSSessionEndpoints: $.ASN1Decoder<RCSSessionEndpoints> = $._decodeEnumerated;
export const _encode_RCSSessionEndpoints: $.ASN1Encoder<RCSSessionEndpoints> = $._encodeEnumerated;


/* eslint-enable */
