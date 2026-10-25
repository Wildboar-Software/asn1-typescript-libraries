/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DirectionType
 * @description
 *
 * Direction of a signal relative to the target, to the best of the
 * operator's knowledge (clause 8.4.2.1.5).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DirectionType {
    /**
     * The signal is addressed to the target.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     */
    toTarget = 0,
    /**
     * The signal is from the target.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     */
    fromTarget = 1,
    /**
     * The operator cannot determine whether the signal is to or from
     * the target.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     */
    unknown = 2,
}

/**
 * @summary DirectionType
 * @description
 *
 * Direction of a signal relative to the target, to the best of the
 * operator's knowledge (clause 8.4.2.1.5).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DirectionType = _enum_for_DirectionType;

/**
 * @summary DirectionType
 * @description
 *
 * Direction of a signal relative to the target, to the best of the
 * operator's knowledge (clause 8.4.2.1.5).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DirectionType: typeof _enum_for_DirectionType = _enum_for_DirectionType;

/**
 * @summary DirectionType_toTarget
 * @description
 *
 * The signal is addressed to the target.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DirectionType_toTarget: _enum_for_DirectionType.toTarget = DirectionType.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @description
 *
 * The signal is addressed to the target.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const toTarget: _enum_for_DirectionType.toTarget = DirectionType.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DirectionType_fromTarget
 * @description
 *
 * The signal is from the target.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DirectionType_fromTarget: _enum_for_DirectionType.fromTarget = DirectionType.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @description
 *
 * The signal is from the target.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const fromTarget: _enum_for_DirectionType.fromTarget = DirectionType.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DirectionType_unknown
 * @description
 *
 * The operator cannot determine whether the signal is to or from
 * the target.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const DirectionType_unknown: _enum_for_DirectionType.unknown = DirectionType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * The operator cannot determine whether the signal is to or from
 * the target.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.5.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const unknown: _enum_for_DirectionType.unknown = DirectionType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DirectionType: $.ASN1Decoder<DirectionType> = $._decodeEnumerated;
export const _encode_DirectionType: $.ASN1Encoder<DirectionType> = $._encodeEnumerated;


/* eslint-enable */
