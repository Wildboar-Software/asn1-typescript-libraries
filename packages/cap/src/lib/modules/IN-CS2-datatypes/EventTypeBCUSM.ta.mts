/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventTypeBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCUSM  ::=  ENUMERATED {
 *   componentReceived(127), associationReleaseRequested(126)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EventTypeBCUSM {
    componentReceived = 127,
    associationReleaseRequested = 126,
}

/**
 * @summary EventTypeBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCUSM  ::=  ENUMERATED {
 *   componentReceived(127), associationReleaseRequested(126)}
 * ```
 * 
 * @enum {number}
 */
export
type EventTypeBCUSM = _enum_for_EventTypeBCUSM;

/**
 * @summary EventTypeBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCUSM  ::=  ENUMERATED {
 *   componentReceived(127), associationReleaseRequested(126)}
 * ```
 * 
 * @enum {number}
 */
export
const EventTypeBCUSM = _enum_for_EventTypeBCUSM;

/**
 * @summary EventTypeBCUSM_componentReceived
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_componentReceived: EventTypeBCUSM = EventTypeBCUSM.componentReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary componentReceived
 * @constant
 * @type {number}
 */
export
const componentReceived: EventTypeBCUSM = EventTypeBCUSM.componentReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCUSM_associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_associationReleaseRequested: EventTypeBCUSM = EventTypeBCUSM.associationReleaseRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const associationReleaseRequested: EventTypeBCUSM = EventTypeBCUSM.associationReleaseRequested; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EventTypeBCUSM = $._decodeEnumerated;
export const _encode_EventTypeBCUSM = $._encodeEnumerated;


/* eslint-enable */
