/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CriticalityType
 * @description
 *
 * What a receiver does with an {@link ExtensionField} it does not
 * fully apply. The default on both the object class and
 * {@link ExtensionField} is `ignore`. The module's only example of
 * `abort` is the commentary example of a network-specific
 * indicator; it does not define further receiver behaviour. Use of
 * the ITU-T Q.1400 extension is marked for further study.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {
 *     ignore(0),
 *     abort(1) }
 * ```
 * 
 * @enum {number}
 */
export const _enum_for_CriticalityType = {
    ignore: 0,
    abort: 1,
} as const;

export type _enum_for_CriticalityType = (typeof _enum_for_CriticalityType)[keyof typeof _enum_for_CriticalityType];

/**
 * @summary CriticalityType
 * @description
 *
 * What a receiver does with an {@link ExtensionField} it does not
 * fully apply. The default on both the object class and
 * {@link ExtensionField} is `ignore`. The module's only example of
 * `abort` is the commentary example of a network-specific
 * indicator; it does not define further receiver behaviour. Use of
 * the ITU-T Q.1400 extension is marked for further study.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {
 *     ignore(0),
 *     abort(1) }
 * ```
 * 
 * @enum {number}
 */
export
type CriticalityType = _enum_for_CriticalityType;

/**
 * @summary CriticalityType
 * @description
 *
 * What a receiver does with an {@link ExtensionField} it does not
 * fully apply. The default on both the object class and
 * {@link ExtensionField} is `ignore`. The module's only example of
 * `abort` is the commentary example of a network-specific
 * indicator; it does not define further receiver behaviour. Use of
 * the ITU-T Q.1400 extension is marked for further study.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {
 *     ignore(0),
 *     abort(1) }
 * ```
 * 
 * @enum {number}
 */
export
const CriticalityType = _enum_for_CriticalityType;

/**
 * Default criticality. The extension can be ignored.
 * @summary CriticalityType_ignore
 * @constant
 * @type {number}
 */
export
const CriticalityType_ignore = CriticalityType.ignore satisfies CriticalityType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Default criticality. The extension can be ignored.
 * @summary ignore
 * @constant
 * @type {number}
 */
export
const ignore = CriticalityType.ignore satisfies CriticalityType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * The commentary example uses this when the extension is not to be
 * ignored. Clause 9 does not define the receiver procedure.
 * @summary CriticalityType_abort
 * @constant
 * @type {number}
 */
export
const CriticalityType_abort = CriticalityType.abort satisfies CriticalityType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * The commentary example uses this when the extension is not to be
 * ignored. Clause 9 does not define the receiver procedure.
 * @summary abort
 * @constant
 * @type {number}
 */
export
const abort = CriticalityType.abort satisfies CriticalityType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CriticalityType: $.ASN1Decoder<CriticalityType> =
    $._decodeEnumerated as $.ASN1Decoder<CriticalityType>;
export const _encode_CriticalityType: $.ASN1Encoder<CriticalityType> =
    $._encodeEnumerated as $.ASN1Encoder<CriticalityType>;


/* eslint-enable */
