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
export const EDIMSEntryType: typeof _enum_for_EDIMSEntryType = _enum_for_EDIMSEntryType;

/**
 * @summary EDIMSEntryType_edim
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_edim: _enum_for_EDIMSEntryType.edim =
    EDIMSEntryType.edim; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary edim
 * @constant
 * @type {number}
 */
export const edim: _enum_for_EDIMSEntryType.edim =
    EDIMSEntryType.edim; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_pn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_pn: _enum_for_EDIMSEntryType.pn =
    EDIMSEntryType.pn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pn
 * @constant
 * @type {number}
 */
export const pn: _enum_for_EDIMSEntryType.pn =
    EDIMSEntryType.pn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_nn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_nn: _enum_for_EDIMSEntryType.nn =
    EDIMSEntryType.nn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nn
 * @constant
 * @type {number}
 */
export const nn: _enum_for_EDIMSEntryType.nn =
    EDIMSEntryType.nn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_fn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_fn: _enum_for_EDIMSEntryType.fn =
    EDIMSEntryType.fn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fn
 * @constant
 * @type {number}
 */
export const fn: _enum_for_EDIMSEntryType.fn =
    EDIMSEntryType.fn; /* SHORT_NAMED_ENUMERATED_VALUE */


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
