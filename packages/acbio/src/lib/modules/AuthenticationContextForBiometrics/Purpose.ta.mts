/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```
 * @enum {number}
 */
export const _enum_for_Purpose = {
    reference: 1,
    sample: 2,
} as const;

export type _enum_for_Purpose = (typeof _enum_for_Purpose)[keyof typeof _enum_for_Purpose];


/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```
 *
 * @enum {number}
 */
export type Purpose = _enum_for_Purpose;


/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```
 *
 * @enum {number}
 */
export const Purpose: typeof _enum_for_Purpose = _enum_for_Purpose;


/**
 * @summary Purpose_reference
 * @constant
 * @type {number}
 */
export const Purpose_reference: 1 =
    Purpose.reference; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary reference
 * @constant
 * @type {number}
 */
export const reference: 1 =
    Purpose.reference; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Purpose_sample
 * @constant
 * @type {number}
 */
export const Purpose_sample: 2 =
    Purpose.sample; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sample
 * @constant
 * @type {number}
 */
export const sample: 2 =
    Purpose.sample; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_Purpose(el: _Element): Purpose {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Purpose.reference: return Purpose.reference;
        case Purpose.sample: return Purpose.sample;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for Purpose.',
                el,
            );
    }
}




export const _encode_Purpose: $.ASN1Encoder<Purpose> = $._encodeEnumerated as $.ASN1Encoder<Purpose>;


/* eslint-enable */
