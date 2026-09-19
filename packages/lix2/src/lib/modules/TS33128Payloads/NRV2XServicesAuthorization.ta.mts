/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { V2XUEAuthorizationIndicator, _decode_V2XUEAuthorizationIndicator, _encode_V2XUEAuthorizationIndicator, _enum_for_V2XUEAuthorizationIndicator } from "../TS33128Payloads/V2XUEAuthorizationIndicator.ta.mjs";
// export { V2XUEAuthorizationIndicator, _enum_for_V2XUEAuthorizationIndicator, V2XUEAuthorizationIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, authorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, V2XUEAuthorizationIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_V2XUEAuthorizationIndicator, _encode_V2XUEAuthorizationIndicator } from "../TS33128Payloads/V2XUEAuthorizationIndicator.ta.mjs";


/**
 * @summary NRV2XServicesAuthorization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRV2XServicesAuthorization ::= SEQUENCE
 * {
 *     v2XVehicleUEAuthorizationIndicator    [1] V2XUEAuthorizationIndicator OPTIONAL,
 *     v2XPedestrianUEAuthorizationIndicator [2] V2XUEAuthorizationIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NRV2XServicesAuthorization {
    constructor (
        /**
         * @summary `v2XVehicleUEAuthorizationIndicator`.
         * @public
         * @readonly
         */
        readonly v2XVehicleUEAuthorizationIndicator: OPTIONAL<V2XUEAuthorizationIndicator>,
        /**
         * @summary `v2XPedestrianUEAuthorizationIndicator`.
         * @public
         * @readonly
         */
        readonly v2XPedestrianUEAuthorizationIndicator: OPTIONAL<V2XUEAuthorizationIndicator>
    ) {}

    /**
     * @summary Restructures an object into a NRV2XServicesAuthorization
     * @description
     * 
     * This takes an `object` and converts it to a `NRV2XServicesAuthorization`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NRV2XServicesAuthorization`.
     * @returns {NRV2XServicesAuthorization}
     */
    public static _from_object (_o: { [_K in keyof (NRV2XServicesAuthorization)]: (NRV2XServicesAuthorization)[_K] }): NRV2XServicesAuthorization {
        return new NRV2XServicesAuthorization(_o.v2XVehicleUEAuthorizationIndicator, _o.v2XPedestrianUEAuthorizationIndicator);
    }

        /**
         * @summary The enum used as the type of the component `v2XVehicleUEAuthorizationIndicator`
         * @public
         * @static
         */

    public static _enum_for_v2XVehicleUEAuthorizationIndicator = _enum_for_V2XUEAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `v2XPedestrianUEAuthorizationIndicator`
         * @public
         * @static
         */

    public static _enum_for_v2XPedestrianUEAuthorizationIndicator = _enum_for_V2XUEAuthorizationIndicator;
}

/**
 * @summary The Leading Root Component Types of NRV2XServicesAuthorization
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NRV2XServicesAuthorization: $.ComponentSpec[] = [
    new $.ComponentSpec("v2XVehicleUEAuthorizationIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("v2XPedestrianUEAuthorizationIndicator", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NRV2XServicesAuthorization
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NRV2XServicesAuthorization: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NRV2XServicesAuthorization
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NRV2XServicesAuthorization: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NRV2XServicesAuthorization: $.ASN1Decoder<NRV2XServicesAuthorization> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NRV2XServicesAuthorization
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NRV2XServicesAuthorization (el: _Element): NRV2XServicesAuthorization {
    if (!_cached_decoder_for_NRV2XServicesAuthorization) { _cached_decoder_for_NRV2XServicesAuthorization = function (el: _Element): NRV2XServicesAuthorization {
    let v2XVehicleUEAuthorizationIndicator: OPTIONAL<V2XUEAuthorizationIndicator>;
    let v2XPedestrianUEAuthorizationIndicator: OPTIONAL<V2XUEAuthorizationIndicator>;
    const callbacks: $.DecodingMap = {
        "v2XVehicleUEAuthorizationIndicator": (_el: _Element): void => { v2XVehicleUEAuthorizationIndicator = $._decode_implicit<V2XUEAuthorizationIndicator>(() => _decode_V2XUEAuthorizationIndicator)(_el); },
        "v2XPedestrianUEAuthorizationIndicator": (_el: _Element): void => { v2XPedestrianUEAuthorizationIndicator = $._decode_implicit<V2XUEAuthorizationIndicator>(() => _decode_V2XUEAuthorizationIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NRV2XServicesAuthorization,
        _extension_additions_list_spec_for_NRV2XServicesAuthorization,
        _root_component_type_list_2_spec_for_NRV2XServicesAuthorization,
        undefined,
    );
    return new NRV2XServicesAuthorization(
        v2XVehicleUEAuthorizationIndicator,
        v2XPedestrianUEAuthorizationIndicator
    );
}; }
    return _cached_decoder_for_NRV2XServicesAuthorization(el);
}

let _cached_encoder_for_NRV2XServicesAuthorization: $.ASN1Encoder<NRV2XServicesAuthorization> | null = null;

/**
 * @summary Encodes a(n) NRV2XServicesAuthorization into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRV2XServicesAuthorization, encoded as an ASN.1 Element.
 */
export
function _encode_NRV2XServicesAuthorization (value: NRV2XServicesAuthorization, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NRV2XServicesAuthorization) { _cached_encoder_for_NRV2XServicesAuthorization = function (value: NRV2XServicesAuthorization, elGetter: $.ASN1Encoder<NRV2XServicesAuthorization>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.v2XVehicleUEAuthorizationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_V2XUEAuthorizationIndicator, $.BER)(value.v2XVehicleUEAuthorizationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.v2XPedestrianUEAuthorizationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_V2XUEAuthorizationIndicator, $.BER)(value.v2XPedestrianUEAuthorizationIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NRV2XServicesAuthorization(value, elGetter);
}


/* eslint-enable */
