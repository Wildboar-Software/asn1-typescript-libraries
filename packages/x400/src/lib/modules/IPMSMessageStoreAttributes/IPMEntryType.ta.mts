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
 * @summary IPMEntryType
 * @description
 *
 * The IPM Entry Type attribute identifies an information object's type.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_IPMEntryType {
    ipm = 0,
    rn = 1,
    nrn = 2,
    on = 3,
}

/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```
 *
 * @enum {number}
 */
export type IPMEntryType = _enum_for_IPMEntryType;

/**
 * @summary IPMEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMEntryType  ::=  ENUMERATED {ipm(0), rn(1), nrn(2), on(3)}
 * ```
 *
 * @enum {number}
 */
export const IPMEntryType = _enum_for_IPMEntryType;

/**
 * @summary IPMEntryType_ipm
 * @constant
 * @type {number}
 */
export const IPMEntryType_ipm =
    IPMEntryType.ipm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipm
 * @constant
 * @type {number}
 */
export const ipm =
    IPMEntryType.ipm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPMEntryType_rn
 * @constant
 * @type {number}
 */
export const IPMEntryType_rn =
    IPMEntryType.rn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rn
 * @constant
 * @type {number}
 */
export const rn =
    IPMEntryType.rn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPMEntryType_nrn
 * @constant
 * @type {number}
 */
export const IPMEntryType_nrn =
    IPMEntryType.nrn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nrn
 * @constant
 * @type {number}
 */
export const nrn =
    IPMEntryType.nrn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPMEntryType_on
 * @constant
 * @type {number}
 */
export const IPMEntryType_on =
    IPMEntryType.on; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on
 * @constant
 * @type {number}
 */
export const on =
    IPMEntryType.on; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_IPMEntryType(el: _Element): IPMEntryType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case IPMEntryType.ipm: return IPMEntryType.ipm;
        case IPMEntryType.rn: return IPMEntryType.rn;
        case IPMEntryType.nrn: return IPMEntryType.nrn;
        case IPMEntryType.on: return IPMEntryType.on;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for IPMEntryType.',
                el,
            );
    }
}


export const _encode_IPMEntryType: $.ASN1Encoder<IPMEntryType> = $._encodeEnumerated as $.ASN1Encoder<IPMEntryType>;


/* eslint-enable */
