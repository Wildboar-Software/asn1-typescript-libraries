/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";

/**
 * @summary ScfTaskRefusedParameter_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENUMERATED {generic(0), unobtainable(1), congestion(2)
 *             -- other values FFS
 *             }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ScfTaskRefusedParameter_reason {
    generic = 0,
    unobtainable = 1,
    congestion = 2,
}

export type ScfTaskRefusedParameter_reason = _enum_for_ScfTaskRefusedParameter_reason;

export const ScfTaskRefusedParameter_reason = _enum_for_ScfTaskRefusedParameter_reason;

export const ScfTaskRefusedParameter_reason_generic: ScfTaskRefusedParameter_reason =
    ScfTaskRefusedParameter_reason.generic;

export const generic: ScfTaskRefusedParameter_reason = ScfTaskRefusedParameter_reason.generic;

export const ScfTaskRefusedParameter_reason_unobtainable: ScfTaskRefusedParameter_reason =
    ScfTaskRefusedParameter_reason.unobtainable;

export const unobtainable: ScfTaskRefusedParameter_reason =
    ScfTaskRefusedParameter_reason.unobtainable;

export const ScfTaskRefusedParameter_reason_congestion: ScfTaskRefusedParameter_reason =
    ScfTaskRefusedParameter_reason.congestion;

export const congestion: ScfTaskRefusedParameter_reason =
    ScfTaskRefusedParameter_reason.congestion;

export const _decode_ScfTaskRefusedParameter_reason = $._decodeEnumerated;

export const _encode_ScfTaskRefusedParameter_reason = $._encodeEnumerated;

/**
 * Inner SEQUENCE of `ScfTaskRefusedParameter`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {reason
 *             ENUMERATED {generic(0), unobtainable(1), congestion(2)
 *                                      -- other values FFS
 *                                      },
 *           securityParameters  [1]  SecurityParameters OPTIONAL
 * }
 * ```
 */
export interface ScfTaskRefusedParameter_sequence {
    reason: ScfTaskRefusedParameter_reason;
    securityParameters?: OPTIONAL<SecurityParameters>;
}

const _root_component_type_list_1_spec_for_ScfTaskRefusedParameter_sequence: $.ComponentSpec[] = [
    new $.ComponentSpec("reason", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 1)),
];

const _extension_additions_list_spec_for_ScfTaskRefusedParameter_sequence: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_ScfTaskRefusedParameter_sequence: $.ComponentSpec[] = [];

function _decode_ScfTaskRefusedParameter_sequence(el: _Element): ScfTaskRefusedParameter_sequence {
    let reason!: ScfTaskRefusedParameter_reason;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "reason": (_el: _Element): void => {
            reason = _decode_ScfTaskRefusedParameter_reason(_el);
        },
        "securityParameters": (_el: _Element): void => {
            securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ScfTaskRefusedParameter_sequence,
        _extension_additions_list_spec_for_ScfTaskRefusedParameter_sequence,
        _root_component_type_list_2_spec_for_ScfTaskRefusedParameter_sequence,
    );
    return { reason, securityParameters };
}

function _encode_ScfTaskRefusedParameter_sequence(
    value: ScfTaskRefusedParameter_sequence,
    elGetter: $.ASN1Encoder<ScfTaskRefusedParameter_sequence>,
): _Element {
    const components: _Element[] = [
        _encode_ScfTaskRefusedParameter_reason(value.reason, $.BER),
    ];
    if (value.securityParameters !== undefined) {
        components.push(
            $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(
                value.securityParameters,
                $.BER,
            ),
        );
    }
    return $._encodeSequence(components, $.BER);
}

/**
 * @summary ScfTaskRefusedParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScfTaskRefusedParameter ::=
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {reason
 *                  ENUMERATED {generic(0), unobtainable(1), congestion(2)
 *                                           -- other values FFS
 *                                           },
 *                securityParameters  [1]  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export type ScfTaskRefusedParameter = OPTIONALLY_PROTECTED<ScfTaskRefusedParameter_sequence>;

let _cached_decoder_for_ScfTaskRefusedParameter: $.ASN1Decoder<ScfTaskRefusedParameter> | null = null;

export function _decode_ScfTaskRefusedParameter(el: _Element): ScfTaskRefusedParameter {
    if (!_cached_decoder_for_ScfTaskRefusedParameter) {
        _cached_decoder_for_ScfTaskRefusedParameter = _get_decoder_for_OPTIONALLY_PROTECTED<ScfTaskRefusedParameter_sequence>(
            _decode_ScfTaskRefusedParameter_sequence,
        );
    }
    return _cached_decoder_for_ScfTaskRefusedParameter(el);
}

let _cached_encoder_for_ScfTaskRefusedParameter: $.ASN1Encoder<ScfTaskRefusedParameter> | null = null;

export function _encode_ScfTaskRefusedParameter(
    value: ScfTaskRefusedParameter,
    elGetter: $.ASN1Encoder<ScfTaskRefusedParameter>,
): _Element {
    if (!_cached_encoder_for_ScfTaskRefusedParameter) {
        _cached_encoder_for_ScfTaskRefusedParameter = _get_encoder_for_OPTIONALLY_PROTECTED<ScfTaskRefusedParameter_sequence>(
            _encode_ScfTaskRefusedParameter_sequence,
        );
    }
    return _cached_encoder_for_ScfTaskRefusedParameter(value, elGetter);
}

/* eslint-enable */
