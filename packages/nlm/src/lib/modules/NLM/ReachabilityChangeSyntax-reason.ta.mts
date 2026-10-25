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
 * @summary ReachabilityChangeSyntax_reason
 * @description
 *
 * Why reachability went down: holding timer expired, or circuit disabled.
 * Present for Down only.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const _enum_for_ReachabilityChangeSyntax_reason = {
    holdingTimerExpired: 0,
    circuitDisabled: 1,
} as const;

export type _enum_for_ReachabilityChangeSyntax_reason = (typeof _enum_for_ReachabilityChangeSyntax_reason)[keyof typeof _enum_for_ReachabilityChangeSyntax_reason];


/**
 * @summary ReachabilityChangeSyntax_reason
 * @description
 *
 * Why reachability went down: holding timer expired, or circuit disabled.
 * Present for Down only.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type ReachabilityChangeSyntax_reason = _enum_for_ReachabilityChangeSyntax_reason;


/**
 * @summary ReachabilityChangeSyntax_reason
 * @description
 *
 * Why reachability went down: holding timer expired, or circuit disabled.
 * Present for Down only.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const ReachabilityChangeSyntax_reason = _enum_for_ReachabilityChangeSyntax_reason;


/**
 * @summary ReachabilityChangeSyntax_reason_holdingTimerExpired
 * @description
 *
 * ISO 9542 holding timer expired. Down only.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_reason_holdingTimerExpired =
    ReachabilityChangeSyntax_reason.holdingTimerExpired satisfies ReachabilityChangeSyntax_reason; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary holdingTimerExpired
 * @description
 *
 * ISO 9542 holding timer expired. Down only.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const holdingTimerExpired =
    ReachabilityChangeSyntax_reason.holdingTimerExpired satisfies ReachabilityChangeSyntax_reason; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ReachabilityChangeSyntax_reason_circuitDisabled
 * @description
 *
 * Circuit disabled. Down only.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_reason_circuitDisabled =
    ReachabilityChangeSyntax_reason.circuitDisabled satisfies ReachabilityChangeSyntax_reason; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary circuitDisabled
 * @description
 *
 * Circuit disabled. Down only.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const circuitDisabled =
    ReachabilityChangeSyntax_reason.circuitDisabled satisfies ReachabilityChangeSyntax_reason; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_ReachabilityChangeSyntax_reason: $.ASN1Decoder<ReachabilityChangeSyntax_reason> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReachabilityChangeSyntax_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReachabilityChangeSyntax_reason} The decoded data structure.
 */
export function _decode_ReachabilityChangeSyntax_reason(el: _Element): ReachabilityChangeSyntax_reason {
    if (!_cached_decoder_for_ReachabilityChangeSyntax_reason) {
        _cached_decoder_for_ReachabilityChangeSyntax_reason =
            function (el: _Element): ReachabilityChangeSyntax_reason {
                const enumerated = $._decodeEnumerated(el);
                switch (enumerated) {
                    case ReachabilityChangeSyntax_reason.holdingTimerExpired: return ReachabilityChangeSyntax_reason.holdingTimerExpired;
                    case ReachabilityChangeSyntax_reason.circuitDisabled: return ReachabilityChangeSyntax_reason.circuitDisabled;
                    default:
                        throw new _ConstructionError(
                            'Invalid ENUMERATED value ' + enumerated + ' for ReachabilityChangeSyntax_reason.',
                            el,
                        );
                }
            };
    }
    return _cached_decoder_for_ReachabilityChangeSyntax_reason(el);
}


let _cached_encoder_for_ReachabilityChangeSyntax_reason: $.ASN1Encoder<ReachabilityChangeSyntax_reason> | null = null;


/**
 * @summary Encodes a(n) ReachabilityChangeSyntax_reason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReachabilityChangeSyntax_reason, encoded as an ASN.1 Element.
 */
export function _encode_ReachabilityChangeSyntax_reason(
    value: ReachabilityChangeSyntax_reason,
    elGetter: $.ASN1Encoder<ReachabilityChangeSyntax_reason>
): _Element {
    if (!_cached_encoder_for_ReachabilityChangeSyntax_reason) {
        _cached_encoder_for_ReachabilityChangeSyntax_reason =
            $._encodeEnumerated as $.ASN1Encoder<ReachabilityChangeSyntax_reason>;
    }
    return _cached_encoder_for_ReachabilityChangeSyntax_reason(value, elGetter);
}


/* eslint-enable */
