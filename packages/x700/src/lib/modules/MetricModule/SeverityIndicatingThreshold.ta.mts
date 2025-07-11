/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module';
import {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from '@wildboar/attribute-asn1module';
/**
 * @summary SeverityIndicatingThreshold
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SeverityIndicatingThreshold ::= SEQUENCE {
 *   threshold           ObservedValue,
 *   notifyOnOff         BOOLEAN,
 *   severityIndication  PerceivedSeverity OPTIONAL
 * }
 * ```
 *
 */
export class SeverityIndicatingThreshold {
    constructor(
        /**
         * @summary `threshold`.
         * @public
         * @readonly
         */
        readonly threshold: ObservedValue,
        /**
         * @summary `notifyOnOff`.
         * @public
         * @readonly
         */
        readonly notifyOnOff: BOOLEAN,
        /**
         * @summary `severityIndication`.
         * @public
         * @readonly
         */
        readonly severityIndication: OPTIONAL<PerceivedSeverity>
    ) {}

    /**
     * @summary Restructures an object into a SeverityIndicatingThreshold
     * @description
     *
     * This takes an `object` and converts it to a `SeverityIndicatingThreshold`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SeverityIndicatingThreshold`.
     * @returns {SeverityIndicatingThreshold}
     */
    public static _from_object(
        _o: {
            [_K in keyof SeverityIndicatingThreshold]: SeverityIndicatingThreshold[_K];
        }
    ): SeverityIndicatingThreshold {
        return new SeverityIndicatingThreshold(
            _o.threshold,
            _o.notifyOnOff,
            _o.severityIndication
        );
    }

    /**
     * @summary The enum used as the type of the component `severityIndication`
     * @public
     * @static
     */

    public static _enum_for_severityIndication = _enum_for_PerceivedSeverity;
}

/**
 * @summary The Leading Root Component Types of SeverityIndicatingThreshold
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SeverityIndicatingThreshold: $.ComponentSpec[] = [
    new $.ComponentSpec('threshold', false, $.hasAnyTag),
    new $.ComponentSpec(
        'notifyOnOff',
        false,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        'severityIndication',
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of SeverityIndicatingThreshold
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SeverityIndicatingThreshold: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SeverityIndicatingThreshold
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SeverityIndicatingThreshold: $.ComponentSpec[] = [];

let _cached_decoder_for_SeverityIndicatingThreshold: $.ASN1Decoder<SeverityIndicatingThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SeverityIndicatingThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SeverityIndicatingThreshold} The decoded data structure.
 */
export function _decode_SeverityIndicatingThreshold(el: _Element): SeverityIndicatingThreshold {
    if (!_cached_decoder_for_SeverityIndicatingThreshold) {
        _cached_decoder_for_SeverityIndicatingThreshold = function (
            el: _Element
        ): SeverityIndicatingThreshold {
            let threshold!: ObservedValue;
            let notifyOnOff!: BOOLEAN;
            let severityIndication: OPTIONAL<PerceivedSeverity>;
            const callbacks: $.DecodingMap = {
                threshold: (_el: _Element): void => {
                    threshold = _decode_ObservedValue(_el);
                },
                notifyOnOff: (_el: _Element): void => {
                    notifyOnOff = $._decodeBoolean(_el);
                },
                severityIndication: (_el: _Element): void => {
                    severityIndication = _decode_PerceivedSeverity(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SeverityIndicatingThreshold,
                _extension_additions_list_spec_for_SeverityIndicatingThreshold,
                _root_component_type_list_2_spec_for_SeverityIndicatingThreshold,
                undefined
            );
            return new SeverityIndicatingThreshold (
                threshold,
                notifyOnOff,
                severityIndication
            );
        };
    }
    return _cached_decoder_for_SeverityIndicatingThreshold(el);
}

let _cached_encoder_for_SeverityIndicatingThreshold: $.ASN1Encoder<SeverityIndicatingThreshold> | null = null;

/**
 * @summary Encodes a(n) SeverityIndicatingThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SeverityIndicatingThreshold, encoded as an ASN.1 Element.
 */
export function _encode_SeverityIndicatingThreshold(
    value: SeverityIndicatingThreshold,
    elGetter: $.ASN1Encoder<SeverityIndicatingThreshold>
): _Element {
    if (!_cached_encoder_for_SeverityIndicatingThreshold) {
        _cached_encoder_for_SeverityIndicatingThreshold = function (
            value: SeverityIndicatingThreshold        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObservedValue(
                            value.threshold,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBoolean(
                            value.notifyOnOff,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.severityIndication === undefined
                            ? undefined
                            : _encode_PerceivedSeverity(
                                  value.severityIndication,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SeverityIndicatingThreshold(value, elGetter);
}


/* eslint-enable */
