/* eslint-disable */
import {
    OPTIONAL,
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
    DeliveryServiceType,
    _decode_DeliveryServiceType,
    _encode_DeliveryServiceType,
} from '../MhsAcctAsn1Module/DeliveryServiceType.ta.mjs';
import {
    PerMessageComponentRate,
    _decode_PerMessageComponentRate,
    _encode_PerMessageComponentRate,
} from '../MhsAcctAsn1Module/PerMessageComponentRate.ta.mjs';
import {
    PerOctetComponentRate,
    _decode_PerOctetComponentRate,
    _encode_PerOctetComponentRate,
} from '../MhsAcctAsn1Module/PerOctetComponentRate.ta.mjs';
/**
 * @summary DeliveryService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryService ::= SET {
 *   delivery-service-type       DeliveryServiceType,
 *   per-message-component-rate  [1]  PerMessageComponentRate OPTIONAL,
 *   per-octet-component-rate    [2]  PerOctetComponentRate OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeliveryService {
    constructor(
        /**
         * @summary `delivery_service_type`.
         * @public
         * @readonly
         */
        readonly delivery_service_type: DeliveryServiceType,
        /**
         * @summary `per_message_component_rate`.
         * @public
         * @readonly
         */
        readonly per_message_component_rate: OPTIONAL<PerMessageComponentRate>,
        /**
         * @summary `per_octet_component_rate`.
         * @public
         * @readonly
         */
        readonly per_octet_component_rate: OPTIONAL<PerOctetComponentRate>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryService
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryService`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryService`.
     * @returns {DeliveryService}
     */
    public static _from_object(
        _o: { [_K in keyof DeliveryService]: DeliveryService[_K] }
    ): DeliveryService {
        return new DeliveryService(
            _o.delivery_service_type,
            _o.per_message_component_rate,
            _o.per_octet_component_rate
        );
    }
}

/**
 * @summary The Leading Root Component Types of DeliveryService
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryService: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'delivery-service-type',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'per-message-component-rate',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'per-octet-component-rate',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeliveryService
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryService: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeliveryService
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryService: $.ComponentSpec[] = [];

let _cached_decoder_for_DeliveryService: $.ASN1Decoder<DeliveryService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryService
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryService} The decoded data structure.
 */
export function _decode_DeliveryService(el: _Element) {
    if (!_cached_decoder_for_DeliveryService) {
        _cached_decoder_for_DeliveryService = function (
            el: _Element
        ): DeliveryService {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let delivery_service_type!: DeliveryServiceType;
            let per_message_component_rate: OPTIONAL<PerMessageComponentRate>;
            let per_octet_component_rate: OPTIONAL<PerOctetComponentRate>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'delivery-service-type': (_el: _Element): void => {
                    delivery_service_type = _decode_DeliveryServiceType(_el);
                },
                'per-message-component-rate': (_el: _Element): void => {
                    per_message_component_rate = $._decode_implicit<PerMessageComponentRate>(
                        () => _decode_PerMessageComponentRate
                    )(_el);
                },
                'per-octet-component-rate': (_el: _Element): void => {
                    per_octet_component_rate = $._decode_implicit<PerOctetComponentRate>(
                        () => _decode_PerOctetComponentRate
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveryService,
                _extension_additions_list_spec_for_DeliveryService,
                _root_component_type_list_2_spec_for_DeliveryService,
                undefined
            );
            return new DeliveryService /* SET_CONSTRUCTOR_CALL */(
                delivery_service_type,
                per_message_component_rate,
                per_octet_component_rate
            );
        };
    }
    return _cached_decoder_for_DeliveryService(el);
}

let _cached_encoder_for_DeliveryService: $.ASN1Encoder<DeliveryService> | null = null;

/**
 * @summary Encodes a(n) DeliveryService into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryService, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryService(
    value: DeliveryService,
    elGetter: $.ASN1Encoder<DeliveryService>
) {
    if (!_cached_encoder_for_DeliveryService) {
        _cached_encoder_for_DeliveryService = function (
            value: DeliveryService        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DeliveryServiceType(
                            value.delivery_service_type,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.per_message_component_rate ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_PerMessageComponentRate,
                                  $.BER
                              )(value.per_message_component_rate, $.BER),
                        /* IF_ABSENT  */ value.per_octet_component_rate ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PerOctetComponentRate,
                                  $.BER
                              )(value.per_octet_component_rate, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliveryService(value, elGetter);
}


/* eslint-enable */
