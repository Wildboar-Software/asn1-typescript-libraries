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
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Replaceable {
    yes = 0,
    no = 1,
    notapplicable = 2,
}


/**
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```
 *
 * @enum {number}
 */
export type Replaceable = _enum_for_Replaceable;


/**
 * @summary Replaceable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Replaceable  ::=  ENUMERATED {yes(0), no(1), notapplicable(2)}
 * ```
 *
 * @enum {number}
 */
export const Replaceable = _enum_for_Replaceable;


/**
 * @summary Replaceable_yes
 * @constant
 * @type {number}
 */
export const Replaceable_yes =
    Replaceable.yes; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary yes
 * @constant
 * @type {number}
 */
export const yes =
    Replaceable.yes; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Replaceable_no
 * @constant
 * @type {number}
 */
export const Replaceable_no =
    Replaceable.no; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary no
 * @constant
 * @type {number}
 */
export const no =
    Replaceable.no; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Replaceable_notapplicable
 * @constant
 * @type {number}
 */
export const Replaceable_notapplicable =
    Replaceable.notapplicable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notapplicable
 * @constant
 * @type {number}
 */
export const notapplicable =
    Replaceable.notapplicable; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_Replaceable(el: _Element): Replaceable {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Replaceable.yes: return Replaceable.yes;
        case Replaceable.no: return Replaceable.no;
        case Replaceable.notapplicable: return Replaceable.notapplicable;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for Replaceable.',
                el,
            );
    }
}




export const _encode_Replaceable: $.ASN1Encoder<Replaceable> = $._encodeEnumerated as $.ASN1Encoder<Replaceable>;


/* eslint-enable */
