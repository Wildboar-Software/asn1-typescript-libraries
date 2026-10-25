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
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ProtectionSwitchMode {
    bidirectional = 0,
    unidirectional = 1,
}


/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```
 *
 * @enum {number}
 */
export type ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;


/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```
 *
 * @enum {number}
 */
export const ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;


/**
 * @summary ProtectionSwitchMode_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_bidirectional =
    ProtectionSwitchMode.bidirectional satisfies ProtectionSwitchMode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional =
    ProtectionSwitchMode.bidirectional satisfies ProtectionSwitchMode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionSwitchMode_unidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_unidirectional =
    ProtectionSwitchMode.unidirectional satisfies ProtectionSwitchMode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional =
    ProtectionSwitchMode.unidirectional satisfies ProtectionSwitchMode; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ProtectionSwitchMode(el: _Element): ProtectionSwitchMode {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ProtectionSwitchMode.bidirectional: return ProtectionSwitchMode.bidirectional;
        case ProtectionSwitchMode.unidirectional: return ProtectionSwitchMode.unidirectional;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ProtectionSwitchMode.',
                el,
            );
    }
}




export const _encode_ProtectionSwitchMode: $.ASN1Encoder<ProtectionSwitchMode> = $._encodeEnumerated as $.ASN1Encoder<ProtectionSwitchMode>;


/* eslint-enable */
