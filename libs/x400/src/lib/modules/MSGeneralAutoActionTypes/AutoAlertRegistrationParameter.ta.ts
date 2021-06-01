/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta';
export {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta';
import {
    AlertDestination,
    _decode_AlertDestination,
    _encode_AlertDestination,
} from '../MSGeneralAutoActionTypes/AlertDestination.ta';
export {
    AlertDestination,
    _decode_AlertDestination,
    _encode_AlertDestination,
} from '../MSGeneralAutoActionTypes/AlertDestination.ta';
import {
    EntryInformationSelection,
    _decode_EntryInformationSelection,
    _encode_EntryInformationSelection,
} from '../MSAbstractService/EntryInformationSelection.ta';
export {
    EntryInformationSelection,
    _decode_EntryInformationSelection,
    _encode_EntryInformationSelection,
} from '../MSAbstractService/EntryInformationSelection.ta';

/* START_OF_SYMBOL_DEFINITION AutoAlertRegistrationParameter */
/**
 * @summary AutoAlertRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoAlertRegistrationParameter ::= SET {
 *   filter                       [0]  Filter OPTIONAL,
 *   alert-destinations
 *     [1]  SEQUENCE SIZE (1..ub-alert-addresses) OF AlertDestination OPTIONAL,
 *   requested-attributes         [2]  EntryInformationSelection OPTIONAL,
 *   -- 1994 extension
 *   suppress-alert-destinations  [3]  BOOLEAN DEFAULT TRUE
 * }
 * ```
 *
 * @class
 */
export class AutoAlertRegistrationParameter {
    constructor(
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `alert_destinations`.
         * @public
         * @readonly
         */
        readonly alert_destinations: OPTIONAL<AlertDestination[]>,
        /**
         * @summary `requested_attributes`.
         * @public
         * @readonly
         */
        readonly requested_attributes: OPTIONAL<EntryInformationSelection>,
        /**
         * @summary `suppress_alert_destinations`.
         * @public
         * @readonly
         */
        readonly suppress_alert_destinations: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a AutoAlertRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `AutoAlertRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoAlertRegistrationParameter`.
     * @returns {AutoAlertRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof AutoAlertRegistrationParameter]: AutoAlertRegistrationParameter[_K];
        }
    ): AutoAlertRegistrationParameter {
        return new AutoAlertRegistrationParameter(
            _o.filter,
            _o.alert_destinations,
            _o.requested_attributes,
            _o.suppress_alert_destinations
        );
    }

    /**
     * @summary Getter that returns the default value for `suppress_alert_destinations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_suppress_alert_destinations() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION AutoAlertRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoAlertRegistrationParameter */
/**
 * @summary The Leading Root Component Types of AutoAlertRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoAlertRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'alert-destinations',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'requested-attributes',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'suppress-alert-destinations',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoAlertRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoAlertRegistrationParameter */
/**
 * @summary The Trailing Root Component Types of AutoAlertRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoAlertRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoAlertRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoAlertRegistrationParameter */
/**
 * @summary The Extension Addition Component Types of AutoAlertRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoAlertRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoAlertRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoAlertRegistrationParameter */
let _cached_decoder_for_AutoAlertRegistrationParameter: $.ASN1Decoder<AutoAlertRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoAlertRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _decode_AutoAlertRegistrationParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoAlertRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoAlertRegistrationParameter} The decoded data structure.
 */
export function _decode_AutoAlertRegistrationParameter(el: _Element) {
    if (!_cached_decoder_for_AutoAlertRegistrationParameter) {
        _cached_decoder_for_AutoAlertRegistrationParameter = function (
            el: _Element
        ): AutoAlertRegistrationParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let filter: OPTIONAL<Filter>;
            let alert_destinations: OPTIONAL<AlertDestination[]>;
            let requested_attributes: OPTIONAL<EntryInformationSelection>;
            let suppress_alert_destinations: OPTIONAL<BOOLEAN> =
                AutoAlertRegistrationParameter._default_value_for_suppress_alert_destinations;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                'alert-destinations': (_el: _Element): void => {
                    alert_destinations = $._decode_explicit<AlertDestination[]>(
                        () =>
                            $._decodeSequenceOf<AlertDestination>(
                                () => _decode_AlertDestination
                            )
                    )(_el);
                },
                'requested-attributes': (_el: _Element): void => {
                    requested_attributes = $._decode_explicit<EntryInformationSelection>(
                        () => _decode_EntryInformationSelection
                    )(_el);
                },
                'suppress-alert-destinations': (_el: _Element): void => {
                    suppress_alert_destinations = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoAlertRegistrationParameter,
                _extension_additions_list_spec_for_AutoAlertRegistrationParameter,
                _root_component_type_list_2_spec_for_AutoAlertRegistrationParameter,
                undefined
            );
            return new AutoAlertRegistrationParameter /* SET_CONSTRUCTOR_CALL */(
                filter,
                alert_destinations,
                requested_attributes,
                suppress_alert_destinations
            );
        };
    }
    return _cached_decoder_for_AutoAlertRegistrationParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoAlertRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoAlertRegistrationParameter */
let _cached_encoder_for_AutoAlertRegistrationParameter: $.ASN1Encoder<AutoAlertRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoAlertRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _encode_AutoAlertRegistrationParameter */
/**
 * @summary Encodes a(n) AutoAlertRegistrationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoAlertRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_AutoAlertRegistrationParameter(
    value: AutoAlertRegistrationParameter,
    elGetter: $.ASN1Encoder<AutoAlertRegistrationParameter>
) {
    if (!_cached_encoder_for_AutoAlertRegistrationParameter) {
        _cached_encoder_for_AutoAlertRegistrationParameter = function (
            value: AutoAlertRegistrationParameter,
            elGetter: $.ASN1Encoder<AutoAlertRegistrationParameter>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Filter,
                                  $.BER
                              )(value.filter, $.BER),
                        /* IF_ABSENT  */ value.alert_destinations === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<AlertDestination>(
                                          () => _encode_AlertDestination,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.alert_destinations, $.BER),
                        /* IF_ABSENT  */ value.requested_attributes ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EntryInformationSelection,
                                  $.BER
                              )(value.requested_attributes, $.BER),
                        /* IF_DEFAULT */ value.suppress_alert_destinations ===
                            undefined ||
                        $.deepEq(
                            value.suppress_alert_destinations,
                            AutoAlertRegistrationParameter._default_value_for_suppress_alert_destinations
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.suppress_alert_destinations, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoAlertRegistrationParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoAlertRegistrationParameter */

/* eslint-enable */
