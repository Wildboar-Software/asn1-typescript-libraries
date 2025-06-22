/* eslint-disable */
import {
    OPTIONAL,
    GeneralString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    AlertDestination,
    _decode_AlertDestination,
    _encode_AlertDestination,
} from '../MSGeneralAutoActionTypes/AlertDestination.ta.mjs';
/**
 * @summary AutoAlertErrorIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoAlertErrorIndication ::= SET {
 *   failing-alert-destination  [0]  AlertDestination OPTIONAL,
 *   supplementary-information
 *     [1]  GeneralString(SIZE (1..ub-supplementary-info-length)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AutoAlertErrorIndication {
    constructor(
        /**
         * @summary `failing_alert_destination`.
         * @public
         * @readonly
         */
        readonly failing_alert_destination: OPTIONAL<AlertDestination>,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<GeneralString>
    ) {}

    /**
     * @summary Restructures an object into a AutoAlertErrorIndication
     * @description
     *
     * This takes an `object` and converts it to a `AutoAlertErrorIndication`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoAlertErrorIndication`.
     * @returns {AutoAlertErrorIndication}
     */
    public static _from_object(
        _o: {
            [_K in keyof AutoAlertErrorIndication]: AutoAlertErrorIndication[_K];
        }
    ): AutoAlertErrorIndication {
        return new AutoAlertErrorIndication(
            _o.failing_alert_destination,
            _o.supplementary_information
        );
    }
}

/**
 * @summary The Leading Root Component Types of AutoAlertErrorIndication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoAlertErrorIndication: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'failing-alert-destination',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AutoAlertErrorIndication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoAlertErrorIndication: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoAlertErrorIndication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoAlertErrorIndication: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoAlertErrorIndication: $.ASN1Decoder<AutoAlertErrorIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoAlertErrorIndication
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoAlertErrorIndication} The decoded data structure.
 */
export function _decode_AutoAlertErrorIndication(el: _Element) {
    if (!_cached_decoder_for_AutoAlertErrorIndication) {
        _cached_decoder_for_AutoAlertErrorIndication = function (
            el: _Element
        ): AutoAlertErrorIndication {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let failing_alert_destination: OPTIONAL<AlertDestination>;
            let supplementary_information: OPTIONAL<GeneralString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'failing-alert-destination': (_el: _Element): void => {
                    failing_alert_destination = $._decode_explicit<AlertDestination>(
                        () => _decode_AlertDestination
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_explicit<GeneralString>(
                        () => $._decodeGeneralString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoAlertErrorIndication,
                _extension_additions_list_spec_for_AutoAlertErrorIndication,
                _root_component_type_list_2_spec_for_AutoAlertErrorIndication,
                undefined
            );
            return new AutoAlertErrorIndication /* SET_CONSTRUCTOR_CALL */(
                failing_alert_destination,
                supplementary_information
            );
        };
    }
    return _cached_decoder_for_AutoAlertErrorIndication(el);
}

let _cached_encoder_for_AutoAlertErrorIndication: $.ASN1Encoder<AutoAlertErrorIndication> | null = null;

/**
 * @summary Encodes a(n) AutoAlertErrorIndication into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoAlertErrorIndication, encoded as an ASN.1 Element.
 */
export function _encode_AutoAlertErrorIndication(
    value: AutoAlertErrorIndication,
    elGetter: $.ASN1Encoder<AutoAlertErrorIndication>
) {
    if (!_cached_encoder_for_AutoAlertErrorIndication) {
        _cached_encoder_for_AutoAlertErrorIndication = function (
            value: AutoAlertErrorIndication        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.failing_alert_destination ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlertDestination,
                                  $.BER
                              )(value.failing_alert_destination, $.BER),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGeneralString,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoAlertErrorIndication(value, elGetter);
}


/* eslint-enable */
