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
 * @summary EDIMSEntryType
 * @description
 *
 * The EDIMS Entry Type attribute identifies an information object’s type.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_EDIMSEntryType {
    edim = 0,
    pn = 1,
    nn = 2,
    fn = 3,
}

/**
 * @summary EDIMSEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```
 *
 * @enum {number}
 */
export type EDIMSEntryType = _enum_for_EDIMSEntryType;

/**
 * @summary EDIMSEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```
 *
 * @enum {number}
 */
export const EDIMSEntryType = _enum_for_EDIMSEntryType;

/**
 * @summary EDIMSEntryType_edim
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_edim =
    EDIMSEntryType.edim satisfies EDIMSEntryType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary edim
 * @constant
 * @type {number}
 */
export const edim =
    EDIMSEntryType.edim satisfies EDIMSEntryType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_pn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_pn =
    EDIMSEntryType.pn satisfies EDIMSEntryType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pn
 * @constant
 * @type {number}
 */
export const pn =
    EDIMSEntryType.pn satisfies EDIMSEntryType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_nn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_nn =
    EDIMSEntryType.nn satisfies EDIMSEntryType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nn
 * @constant
 * @type {number}
 */
export const nn =
    EDIMSEntryType.nn satisfies EDIMSEntryType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_fn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_fn =
    EDIMSEntryType.fn satisfies EDIMSEntryType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fn
 * @constant
 * @type {number}
 */
export const fn =
    EDIMSEntryType.fn satisfies EDIMSEntryType; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_EDIMSEntryType(el: _Element): EDIMSEntryType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case EDIMSEntryType.edim: return EDIMSEntryType.edim;
        case EDIMSEntryType.pn: return EDIMSEntryType.pn;
        case EDIMSEntryType.nn: return EDIMSEntryType.nn;
        case EDIMSEntryType.fn: return EDIMSEntryType.fn;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for EDIMSEntryType.',
                el,
            );
    }
}


export const _encode_EDIMSEntryType: $.ASN1Encoder<EDIMSEntryType> = $._encodeEnumerated as $.ASN1Encoder<EDIMSEntryType>;


/* eslint-enable */
