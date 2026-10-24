/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectivityParametersError
 * @description
 *
 * Error alternative of ES10b.GetConnectivityParameters.
 *
 * SGP.32 v1.2, section 5.9.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectivityParametersError  ::=  INTEGER {
 *     parametersNotAvailable(1),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ConnectivityParametersError = INTEGER;

/**
 * @summary ConnectivityParametersError_parametersNotAvailable
 * @description
 *
 * Connectivity parameters for the HTTP protocol are not available on the
 * currently enabled Profile.
 *
 * SGP.32 v1.2, section 5.9.24.
 * @constant
 * @type {number}
 */
export
const ConnectivityParametersError_parametersNotAvailable: ConnectivityParametersError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_parametersNotAvailable
 * @description
 *
 * HTTP connectivity parameters are unavailable on the enabled Profile (SGP.32
 * v1.2, section 5.9.24).
 * @constant
 * @type {number}
 */
export
const parametersNotAvailable: ConnectivityParametersError = ConnectivityParametersError_parametersNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on GetConnectivityParameters and does not
 * further define it. Annex C.
 * @constant
 * @type {number}
 */
export
const ConnectivityParametersError_undefinedError: ConnectivityParametersError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_undefinedError
 * @description
 *
 * Listed on GetConnectivityParameters; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const undefinedError: ConnectivityParametersError = ConnectivityParametersError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConnectivityParametersError: $.ASN1Decoder<ConnectivityParametersError> = $._decodeInteger;
export const _encode_ConnectivityParametersError: $.ASN1Encoder<ConnectivityParametersError> = $._encodeInteger;


/* eslint-enable */
