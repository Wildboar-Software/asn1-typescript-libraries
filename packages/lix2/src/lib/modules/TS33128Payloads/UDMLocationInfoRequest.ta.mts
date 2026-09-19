/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMLocationInfoRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMLocationInfoRequest ::= SEQUENCE
 * {
 *     requested5GSLocation     [1] BOOLEAN OPTIONAL,
 *     requestedCurrentLocation [2] BOOLEAN OPTIONAL,
 *     requestedRATType         [3] BOOLEAN OPTIONAL,
 *     requestedTimeZone        [4] BOOLEAN OPTIONAL,
 *     requestedServingNode     [5] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMLocationInfoRequest {
    constructor (
        /**
         * @summary `requested5GSLocation`.
         * @public
         * @readonly
         */
        readonly requested5GSLocation: OPTIONAL<BOOLEAN>,
        /**
         * @summary `requestedCurrentLocation`.
         * @public
         * @readonly
         */
        readonly requestedCurrentLocation: OPTIONAL<BOOLEAN>,
        /**
         * @summary `requestedRATType`.
         * @public
         * @readonly
         */
        readonly requestedRATType: OPTIONAL<BOOLEAN>,
        /**
         * @summary `requestedTimeZone`.
         * @public
         * @readonly
         */
        readonly requestedTimeZone: OPTIONAL<BOOLEAN>,
        /**
         * @summary `requestedServingNode`.
         * @public
         * @readonly
         */
        readonly requestedServingNode: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a UDMLocationInfoRequest
     * @description
     * 
     * This takes an `object` and converts it to a `UDMLocationInfoRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMLocationInfoRequest`.
     * @returns {UDMLocationInfoRequest}
     */
    public static _from_object (_o: { [_K in keyof (UDMLocationInfoRequest)]: (UDMLocationInfoRequest)[_K] }): UDMLocationInfoRequest {
        return new UDMLocationInfoRequest(_o.requested5GSLocation, _o.requestedCurrentLocation, _o.requestedRATType, _o.requestedTimeZone, _o.requestedServingNode);
    }


}

/**
 * @summary The Leading Root Component Types of UDMLocationInfoRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMLocationInfoRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("requested5GSLocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("requestedCurrentLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("requestedRATType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("requestedTimeZone", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("requestedServingNode", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of UDMLocationInfoRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMLocationInfoRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMLocationInfoRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMLocationInfoRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMLocationInfoRequest: $.ASN1Decoder<UDMLocationInfoRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMLocationInfoRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMLocationInfoRequest (el: _Element): UDMLocationInfoRequest {
    if (!_cached_decoder_for_UDMLocationInfoRequest) { _cached_decoder_for_UDMLocationInfoRequest = function (el: _Element): UDMLocationInfoRequest {
    let requested5GSLocation: OPTIONAL<BOOLEAN>;
    let requestedCurrentLocation: OPTIONAL<BOOLEAN>;
    let requestedRATType: OPTIONAL<BOOLEAN>;
    let requestedTimeZone: OPTIONAL<BOOLEAN>;
    let requestedServingNode: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "requested5GSLocation": (_el: _Element): void => { requested5GSLocation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestedCurrentLocation": (_el: _Element): void => { requestedCurrentLocation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestedRATType": (_el: _Element): void => { requestedRATType = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestedTimeZone": (_el: _Element): void => { requestedTimeZone = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestedServingNode": (_el: _Element): void => { requestedServingNode = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMLocationInfoRequest,
        _extension_additions_list_spec_for_UDMLocationInfoRequest,
        _root_component_type_list_2_spec_for_UDMLocationInfoRequest,
        undefined,
    );
    return new UDMLocationInfoRequest(
        requested5GSLocation,
        requestedCurrentLocation,
        requestedRATType,
        requestedTimeZone,
        requestedServingNode
    );
}; }
    return _cached_decoder_for_UDMLocationInfoRequest(el);
}

let _cached_encoder_for_UDMLocationInfoRequest: $.ASN1Encoder<UDMLocationInfoRequest> | null = null;

/**
 * @summary Encodes a(n) UDMLocationInfoRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMLocationInfoRequest, encoded as an ASN.1 Element.
 */
export
function _encode_UDMLocationInfoRequest (value: UDMLocationInfoRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMLocationInfoRequest) { _cached_encoder_for_UDMLocationInfoRequest = function (value: UDMLocationInfoRequest, elGetter: $.ASN1Encoder<UDMLocationInfoRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requested5GSLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.requested5GSLocation, $.BER)),
            /* IF_ABSENT  */ ((value.requestedCurrentLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.requestedCurrentLocation, $.BER)),
            /* IF_ABSENT  */ ((value.requestedRATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.requestedRATType, $.BER)),
            /* IF_ABSENT  */ ((value.requestedTimeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.requestedTimeZone, $.BER)),
            /* IF_ABSENT  */ ((value.requestedServingNode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.requestedServingNode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMLocationInfoRequest(value, elGetter);
}


/* eslint-enable */
