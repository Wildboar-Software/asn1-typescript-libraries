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
    ArrivalTime,
    _decode_ArrivalTime,
    _encode_ArrivalTime,
} from '../MTAAbstractService/ArrivalTime.ta';
export {
    ArrivalTime,
    _decode_ArrivalTime,
    _encode_ArrivalTime,
} from '../MTAAbstractService/ArrivalTime.ta';
import {
    RoutingAction,
    _enum_for_RoutingAction,
    RoutingAction_relayed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    relayed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RoutingAction_rerouted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    rerouted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RoutingAction,
    _encode_RoutingAction,
} from '../MTAAbstractService/RoutingAction.ta';
export {
    RoutingAction,
    _enum_for_RoutingAction,
    RoutingAction_relayed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    relayed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RoutingAction_rerouted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    rerouted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RoutingAction,
    _encode_RoutingAction,
} from '../MTAAbstractService/RoutingAction.ta';
import {
    MTASuppliedInformation_attempted,
    _decode_MTASuppliedInformation_attempted,
    _encode_MTASuppliedInformation_attempted,
} from '../MTAAbstractService/MTASuppliedInformation-attempted.ta';
export {
    MTASuppliedInformation_attempted,
    _decode_MTASuppliedInformation_attempted,
    _encode_MTASuppliedInformation_attempted,
} from '../MTAAbstractService/MTASuppliedInformation-attempted.ta';
import {
    InternalAdditionalActions,
    _decode_InternalAdditionalActions,
    _encode_InternalAdditionalActions,
} from '../MTAAbstractService/InternalAdditionalActions.ta';
export {
    InternalAdditionalActions,
    _decode_InternalAdditionalActions,
    _encode_InternalAdditionalActions,
} from '../MTAAbstractService/InternalAdditionalActions.ta';
import {
    DeferredTime,
    _decode_DeferredTime,
    _encode_DeferredTime,
} from '../MTAAbstractService/DeferredTime.ta';
export {
    DeferredTime,
    _decode_DeferredTime,
    _encode_DeferredTime,
} from '../MTAAbstractService/DeferredTime.ta';
import {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta';
export {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta';
import {
    OtherActions,
    OtherActions_redirected /* IMPORTED_LONG_NAMED_BIT */,
    redirected /* IMPORTED_SHORT_NAMED_BIT */,
    OtherActions_dl_operation /* IMPORTED_LONG_NAMED_BIT */,
    dl_operation /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_OtherActions,
    _encode_OtherActions,
} from '../MTAAbstractService/OtherActions.ta';
export {
    OtherActions,
    OtherActions_redirected /* IMPORTED_LONG_NAMED_BIT */,
    redirected /* IMPORTED_SHORT_NAMED_BIT */,
    OtherActions_dl_operation /* IMPORTED_LONG_NAMED_BIT */,
    dl_operation /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_OtherActions,
    _encode_OtherActions,
} from '../MTAAbstractService/OtherActions.ta';

/* START_OF_SYMBOL_DEFINITION MTASuppliedInformation */
/**
 * @summary MTASuppliedInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTASuppliedInformation ::= SET {
 *   arrival-time    [0]  ArrivalTime,
 *   routing-action  [2]  RoutingAction,
 *   attempted       CHOICE {mta     MTAName,
 *                           domain  GlobalDomainIdentifier} OPTIONAL,
 *   -- additional-actions --COMPONENTS OF InternalAdditionalActions
 * }
 * ```
 *
 * @class
 */
export class MTASuppliedInformation {
    constructor(
        /**
         * @summary `arrival_time`.
         * @public
         * @readonly
         */
        readonly arrival_time: ArrivalTime,
        /**
         * @summary `routing_action`.
         * @public
         * @readonly
         */
        readonly routing_action: RoutingAction,
        /**
         * @summary `attempted`.
         * @public
         * @readonly
         */
        readonly attempted: OPTIONAL<MTASuppliedInformation_attempted>,
        /**
         * @summary `deferred_time`.
         * @public
         * @readonly
         */
        readonly deferred_time: OPTIONAL<DeferredTime> /* REPLICATED_COMPONENT */,
        /**
         * @summary `converted_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `other_actions`.
         * @public
         * @readonly
         */
        readonly other_actions: OPTIONAL<OtherActions> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a MTASuppliedInformation
     * @description
     *
     * This takes an `object` and converts it to a `MTASuppliedInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTASuppliedInformation`.
     * @returns {MTASuppliedInformation}
     */
    public static _from_object(
        _o: { [_K in keyof MTASuppliedInformation]: MTASuppliedInformation[_K] }
    ): MTASuppliedInformation {
        return new MTASuppliedInformation(
            _o.arrival_time,
            _o.routing_action,
            _o.attempted,
            _o.deferred_time,
            _o.converted_encoded_information_types,
            _o.other_actions
        );
    }

    /**
     * @summary Getter that returns the default value for `other_actions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_other_actions() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary The enum used as the type of the component `routing_action`
     * @public
     * @static
     */

    public static _enum_for_routing_action = _enum_for_RoutingAction;
}
/* END_OF_SYMBOL_DEFINITION MTASuppliedInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTASuppliedInformation */
/**
 * @summary The Leading Root Component Types of MTASuppliedInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MTASuppliedInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'arrival-time',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'routing-action',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec('attempted', true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'deferred-time',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'converted-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'other-actions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTASuppliedInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTASuppliedInformation */
/**
 * @summary The Trailing Root Component Types of MTASuppliedInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MTASuppliedInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTASuppliedInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTASuppliedInformation */
/**
 * @summary The Extension Addition Component Types of MTASuppliedInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MTASuppliedInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTASuppliedInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTASuppliedInformation */
let _cached_decoder_for_MTASuppliedInformation: $.ASN1Decoder<MTASuppliedInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTASuppliedInformation */

/* START_OF_SYMBOL_DEFINITION _decode_MTASuppliedInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) MTASuppliedInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTASuppliedInformation} The decoded data structure.
 */
export function _decode_MTASuppliedInformation(el: _Element) {
    if (!_cached_decoder_for_MTASuppliedInformation) {
        _cached_decoder_for_MTASuppliedInformation = function (
            el: _Element
        ): MTASuppliedInformation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let arrival_time!: ArrivalTime;
            let routing_action!: RoutingAction;
            let attempted: OPTIONAL<MTASuppliedInformation_attempted>;
            let deferred_time: OPTIONAL<DeferredTime>;
            let converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>;
            let other_actions: OPTIONAL<OtherActions> =
                MTASuppliedInformation._default_value_for_other_actions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'arrival-time': (_el: _Element): void => {
                    arrival_time = $._decode_implicit<ArrivalTime>(
                        () => _decode_ArrivalTime
                    )(_el);
                },
                'routing-action': (_el: _Element): void => {
                    routing_action = $._decode_implicit<RoutingAction>(
                        () => _decode_RoutingAction
                    )(_el);
                },
                attempted: (_el: _Element): void => {
                    attempted = _decode_MTASuppliedInformation_attempted(_el);
                },
                'deferred-time': (_el: _Element): void => {
                    deferred_time = $._decode_implicit<DeferredTime>(
                        () => _decode_DeferredTime
                    )(_el);
                },
                'converted-encoded-information-types': (
                    _el: _Element
                ): void => {
                    converted_encoded_information_types = _decode_ConvertedEncodedInformationTypes(
                        _el
                    );
                },
                'other-actions': (_el: _Element): void => {
                    other_actions = $._decode_implicit<OtherActions>(
                        () => _decode_OtherActions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MTASuppliedInformation,
                _extension_additions_list_spec_for_MTASuppliedInformation,
                _root_component_type_list_2_spec_for_MTASuppliedInformation,
                undefined
            );
            return new MTASuppliedInformation /* SET_CONSTRUCTOR_CALL */(
                arrival_time,
                routing_action,
                attempted,
                deferred_time,
                converted_encoded_information_types,
                other_actions
            );
        };
    }
    return _cached_decoder_for_MTASuppliedInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTASuppliedInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTASuppliedInformation */
let _cached_encoder_for_MTASuppliedInformation: $.ASN1Encoder<MTASuppliedInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTASuppliedInformation */

/* START_OF_SYMBOL_DEFINITION _encode_MTASuppliedInformation */
/**
 * @summary Encodes a(n) MTASuppliedInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTASuppliedInformation, encoded as an ASN.1 Element.
 */
export function _encode_MTASuppliedInformation(
    value: MTASuppliedInformation,
    elGetter: $.ASN1Encoder<MTASuppliedInformation>
) {
    if (!_cached_encoder_for_MTASuppliedInformation) {
        _cached_encoder_for_MTASuppliedInformation = function (
            value: MTASuppliedInformation,
            elGetter: $.ASN1Encoder<MTASuppliedInformation>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ArrivalTime,
                            $.BER
                        )(value.arrival_time, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_RoutingAction,
                            $.BER
                        )(value.routing_action, $.BER),
                        /* IF_ABSENT  */ value.attempted === undefined
                            ? undefined
                            : _encode_MTASuppliedInformation_attempted(
                                  value.attempted,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.deferred_time === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DeferredTime,
                                  $.BER
                              )(value.deferred_time, $.BER),
                        /* IF_ABSENT  */ value.converted_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_ConvertedEncodedInformationTypes(
                                  value.converted_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.other_actions === undefined ||
                        $.deepEq(
                            value.other_actions,
                            MTASuppliedInformation._default_value_for_other_actions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_OtherActions,
                                  $.BER
                              )(value.other_actions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MTASuppliedInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTASuppliedInformation */

/* eslint-enable */
