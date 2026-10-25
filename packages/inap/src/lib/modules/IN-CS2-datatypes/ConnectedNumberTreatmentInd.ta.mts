/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectedNumberTreatmentInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedNumberTreatmentInd  ::=  ENUMERATED {
 *   noINImpact(0), presentationRestricted(1), presentCalledINNumber(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConnectedNumberTreatmentInd {
    noINImpact = 0,
    presentationRestricted = 1,
    presentCalledINNumber = 2,
}

/**
 * @summary ConnectedNumberTreatmentInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedNumberTreatmentInd  ::=  ENUMERATED {
 *   noINImpact(0), presentationRestricted(1), presentCalledINNumber(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ConnectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;

/**
 * @summary ConnectedNumberTreatmentInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedNumberTreatmentInd  ::=  ENUMERATED {
 *   noINImpact(0), presentationRestricted(1), presentCalledINNumber(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ConnectedNumberTreatmentInd: typeof _enum_for_ConnectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;

/**
 * @summary ConnectedNumberTreatmentInd_noINImpact
 * @constant
 * @type {number}
 */
export
const ConnectedNumberTreatmentInd_noINImpact: _enum_for_ConnectedNumberTreatmentInd.noINImpact = ConnectedNumberTreatmentInd.noINImpact; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noINImpact
 * @constant
 * @type {number}
 */
export
const noINImpact: _enum_for_ConnectedNumberTreatmentInd.noINImpact = ConnectedNumberTreatmentInd.noINImpact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectedNumberTreatmentInd_presentationRestricted
 * @constant
 * @type {number}
 */
export
const ConnectedNumberTreatmentInd_presentationRestricted: _enum_for_ConnectedNumberTreatmentInd.presentationRestricted = ConnectedNumberTreatmentInd.presentationRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presentationRestricted
 * @constant
 * @type {number}
 */
export
const presentationRestricted: _enum_for_ConnectedNumberTreatmentInd.presentationRestricted = ConnectedNumberTreatmentInd.presentationRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectedNumberTreatmentInd_presentCalledINNumber
 * @constant
 * @type {number}
 */
export
const ConnectedNumberTreatmentInd_presentCalledINNumber: _enum_for_ConnectedNumberTreatmentInd.presentCalledINNumber = ConnectedNumberTreatmentInd.presentCalledINNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presentCalledINNumber
 * @constant
 * @type {number}
 */
export
const presentCalledINNumber: _enum_for_ConnectedNumberTreatmentInd.presentCalledINNumber = ConnectedNumberTreatmentInd.presentCalledINNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ConnectedNumberTreatmentInd(el: _Element): ConnectedNumberTreatmentInd {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ConnectedNumberTreatmentInd.noINImpact: return ConnectedNumberTreatmentInd.noINImpact;
        case ConnectedNumberTreatmentInd.presentationRestricted: return ConnectedNumberTreatmentInd.presentationRestricted;
        case ConnectedNumberTreatmentInd.presentCalledINNumber: return ConnectedNumberTreatmentInd.presentCalledINNumber;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ConnectedNumberTreatmentInd.",
                el,
            );
    }
}

export
const _encode_ConnectedNumberTreatmentInd: $.ASN1Encoder<ConnectedNumberTreatmentInd> = $._encodeEnumerated as $.ASN1Encoder<ConnectedNumberTreatmentInd>;

/* eslint-enable */
