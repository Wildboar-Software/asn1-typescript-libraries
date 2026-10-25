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
 * @summary ConfiguredConnectivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfiguredConnectivity  ::=  ENUMERATED {
 *   sourceConnect(0), sinkConnect(1), bidirectionalConnect(2), noConnect(3)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ConfiguredConnectivity {
    sourceConnect = 0,
    sinkConnect = 1,
    bidirectionalConnect = 2,
    noConnect = 3,
}


/**
 * @summary ConfiguredConnectivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfiguredConnectivity  ::=  ENUMERATED {
 *   sourceConnect(0), sinkConnect(1), bidirectionalConnect(2), noConnect(3)
 * }
 * ```
 *
 * @enum {number}
 */
export type ConfiguredConnectivity = _enum_for_ConfiguredConnectivity;


/**
 * @summary ConfiguredConnectivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConfiguredConnectivity  ::=  ENUMERATED {
 *   sourceConnect(0), sinkConnect(1), bidirectionalConnect(2), noConnect(3)
 * }
 * ```
 *
 * @enum {number}
 */
export const ConfiguredConnectivity = _enum_for_ConfiguredConnectivity;


/**
 * @summary ConfiguredConnectivity_sourceConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_sourceConnect =
    ConfiguredConnectivity.sourceConnect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sourceConnect
 * @constant
 * @type {number}
 */
export const sourceConnect =
    ConfiguredConnectivity.sourceConnect; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ConfiguredConnectivity_sinkConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_sinkConnect =
    ConfiguredConnectivity.sinkConnect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sinkConnect
 * @constant
 * @type {number}
 */
export const sinkConnect =
    ConfiguredConnectivity.sinkConnect; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ConfiguredConnectivity_bidirectionalConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_bidirectionalConnect =
    ConfiguredConnectivity.bidirectionalConnect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectionalConnect
 * @constant
 * @type {number}
 */
export const bidirectionalConnect =
    ConfiguredConnectivity.bidirectionalConnect; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ConfiguredConnectivity_noConnect
 * @constant
 * @type {number}
 */
export const ConfiguredConnectivity_noConnect =
    ConfiguredConnectivity.noConnect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noConnect
 * @constant
 * @type {number}
 */
export const noConnect =
    ConfiguredConnectivity.noConnect; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ConfiguredConnectivity(el: _Element): ConfiguredConnectivity {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ConfiguredConnectivity.sourceConnect: return ConfiguredConnectivity.sourceConnect;
        case ConfiguredConnectivity.sinkConnect: return ConfiguredConnectivity.sinkConnect;
        case ConfiguredConnectivity.bidirectionalConnect: return ConfiguredConnectivity.bidirectionalConnect;
        case ConfiguredConnectivity.noConnect: return ConfiguredConnectivity.noConnect;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ConfiguredConnectivity.',
                el,
            );
    }
}




export const _encode_ConfiguredConnectivity: $.ASN1Encoder<ConfiguredConnectivity> = $._encodeEnumerated as $.ASN1Encoder<ConfiguredConnectivity>;


/* eslint-enable */
