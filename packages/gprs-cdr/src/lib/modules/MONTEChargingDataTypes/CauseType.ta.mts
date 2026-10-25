/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseType
 * @description
 *
 * Family of cause carried in `CommunicationFailureInfo`.
 * Clause 5.1 requires a RAN or NAS cause on a
 * communication-failure report. Only `nAS` is named there.
 * TS 32.278 does not describe radio network, transport,
 * protocol, or miscellaneous, and does not say which value
 * is the RAN cause.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseType   ::=  ENUMERATED {
 *    radioNetworkLayer    ( 0 ),
 *    transportLayer       ( 1 ),
 *    nAS                  ( 2 ),
 *    protocol             ( 3 ),
 *    miscellaneous        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseType {
    radioNetworkLayer = 0,
    transportLayer = 1,
    nAS = 2,
    protocol = 3,
    miscellaneous = 4,
}

/**
 * @summary CauseType
 * @description
 *
 * Family of cause carried in `CommunicationFailureInfo`.
 * Clause 5.1 requires a RAN or NAS cause on a
 * communication-failure report. Only `nAS` is named there.
 * TS 32.278 does not describe radio network, transport,
 * protocol, or miscellaneous, and does not say which value
 * is the RAN cause.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseType   ::=  ENUMERATED {
 *    radioNetworkLayer    ( 0 ),
 *    transportLayer       ( 1 ),
 *    nAS                  ( 2 ),
 *    protocol             ( 3 ),
 *    miscellaneous        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CauseType = _enum_for_CauseType;

/**
 * @summary CauseType
 * @description
 *
 * Family of cause carried in `CommunicationFailureInfo`.
 * Clause 5.1 requires a RAN or NAS cause on a
 * communication-failure report. Only `nAS` is named there.
 * TS 32.278 does not describe radio network, transport,
 * protocol, or miscellaneous, and does not say which value
 * is the RAN cause.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseType   ::=  ENUMERATED {
 *    radioNetworkLayer    ( 0 ),
 *    transportLayer       ( 1 ),
 *    nAS                  ( 2 ),
 *    protocol             ( 3 ),
 *    miscellaneous        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CauseType: typeof _enum_for_CauseType = _enum_for_CauseType;

/**
 * @summary CauseType_radioNetworkLayer
 * @description
 *
 * Present in the abstract syntax. TS 32.278 V19.0.0 does not
 * describe this cause family, and does not identify it as the
 * RAN cause required by clause 5.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseType_radioNetworkLayer: _enum_for_CauseType.radioNetworkLayer = CauseType.radioNetworkLayer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioNetworkLayer
 * @description
 *
 * See {@link CauseType_radioNetworkLayer}.
 *
 * @constant
 * @type {number}
 */
export
const radioNetworkLayer: _enum_for_CauseType.radioNetworkLayer = CauseType.radioNetworkLayer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_transportLayer
 * @description
 *
 * Present in the abstract syntax. TS 32.278 V19.0.0 does not
 * describe this cause family.
 *
 * @constant
 * @type {number}
 */
export
const CauseType_transportLayer: _enum_for_CauseType.transportLayer = CauseType.transportLayer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transportLayer
 * @description
 *
 * See {@link CauseType_transportLayer}.
 *
 * @constant
 * @type {number}
 */
export
const transportLayer: _enum_for_CauseType.transportLayer = CauseType.transportLayer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_nAS
 * @description
 *
 * NAS cause. Clause 5.1 requires a RAN or NAS cause code for
 * a communication failure with the UE.
 *
 * 3GPP TS 32.278 V19.0.0 clause 5.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseType_nAS: _enum_for_CauseType.nAS = CauseType.nAS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAS
 * @description
 *
 * NAS cause. See {@link CauseType_nAS}.
 *
 * @constant
 * @type {number}
 */
export
const nAS: _enum_for_CauseType.nAS = CauseType.nAS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_protocol
 * @description
 *
 * Present in the abstract syntax. TS 32.278 V19.0.0 does not
 * describe this cause family.
 *
 * @constant
 * @type {number}
 */
export
const CauseType_protocol: _enum_for_CauseType.protocol = CauseType.protocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol
 * @description
 *
 * See {@link CauseType_protocol}.
 *
 * @constant
 * @type {number}
 */
export
const protocol: _enum_for_CauseType.protocol = CauseType.protocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_miscellaneous
 * @description
 *
 * Present in the abstract syntax. TS 32.278 V19.0.0 does not
 * describe this cause family.
 *
 * @constant
 * @type {number}
 */
export
const CauseType_miscellaneous: _enum_for_CauseType.miscellaneous = CauseType.miscellaneous; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary miscellaneous
 * @description
 *
 * See {@link CauseType_miscellaneous}.
 *
 * @constant
 * @type {number}
 */
export
const miscellaneous: _enum_for_CauseType.miscellaneous = CauseType.miscellaneous; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CauseType: $.ASN1Decoder<CauseType> = $._decodeEnumerated;

export
const _encode_CauseType: $.ASN1Encoder<CauseType> = $._encodeEnumerated;

/* eslint-enable */
