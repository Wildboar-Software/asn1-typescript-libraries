/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service5, _decode_Service5, _encode_Service5, _enum_for_Service5 } from "../AIN-Parameters/Service5.ta.mjs";
// export { Service5, _enum_for_Service5, Service5_selectiveCallAcceptance /* IMPORTED_LONG_ENUMERATION_ITEM */, selectiveCallAcceptance /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service5_selectiveCallForwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, selectiveCallForwarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service5, _encode_Service5 } from "../AIN-Parameters/Service5.ta.mjs";
import { Request5, _decode_Request5, _encode_Request5 } from "../AIN-Parameters/Request5.ta.mjs";
// export { Request5, Request5_activationStatus /* IMPORTED_LONG_NAMED_BIT */, activationStatus /* IMPORTED_SHORT_NAMED_BIT */, Request5_forwardingDn /* IMPORTED_LONG_NAMED_BIT */, forwardingDn /* IMPORTED_SHORT_NAMED_BIT */, Request5_entireList /* IMPORTED_LONG_NAMED_BIT */, entireList /* IMPORTED_SHORT_NAMED_BIT */, Request5_listSize /* IMPORTED_LONG_NAMED_BIT */, listSize /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request5, _encode_Request5 } from "../AIN-Parameters/Request5.ta.mjs";


/**
 * @summary RequestGroup5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestGroup5 ::= SEQUENCE{
 *         service5 [1] IMPLICIT Service5,--See Section 6.4.2 for the encoding
 *         request5[2] IMPLICIT Request5
 *     }
 * ```
 * 
 * @class
 */
export
class RequestGroup5 {
    constructor (
        /**
         * @summary `service5`.
         * @public
         * @readonly
         */
        readonly service5: Service5,
        /**
         * @summary `request5`.
         * @public
         * @readonly
         */
        readonly request5: Request5
    ) {}

    /**
     * @summary Restructures an object into a RequestGroup5
     * @description
     * 
     * This takes an `object` and converts it to a `RequestGroup5`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestGroup5`.
     * @returns {RequestGroup5}
     */
    public static _from_object (_o: { [_K in keyof (RequestGroup5)]: (RequestGroup5)[_K] }): RequestGroup5 {
        return new RequestGroup5(_o.service5, _o.request5);
    }

        /**
         * @summary The enum used as the type of the component `service5`
         * @public
         * @static
         */

    public static _enum_for_service5 = _enum_for_Service5;
}

/**
 * @summary The Leading Root Component Types of RequestGroup5
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestGroup5: $.ComponentSpec[] = [
    new $.ComponentSpec("service5", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("request5", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestGroup5
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestGroup5: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestGroup5
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestGroup5: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestGroup5: $.ASN1Decoder<RequestGroup5> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestGroup5
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestGroup5 (el: _Element): RequestGroup5 {
    if (!_cached_decoder_for_RequestGroup5) { _cached_decoder_for_RequestGroup5 = function (el: _Element): RequestGroup5 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestGroup5 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service5";
    sequence[1].name = "request5";
    let service5!: Service5;
    let request5!: Request5;
    service5 = $._decode_implicit<Service5>(() => _decode_Service5)(sequence[0]);
    request5 = $._decode_implicit<Request5>(() => _decode_Request5)(sequence[1]);
    return new RequestGroup5(
        service5,
        request5,

    );
}; }
    return _cached_decoder_for_RequestGroup5(el);
}

let _cached_encoder_for_RequestGroup5: $.ASN1Encoder<RequestGroup5> | null = null;

/**
 * @summary Encodes a(n) RequestGroup5 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestGroup5, encoded as an ASN.1 Element.
 */
export
function _encode_RequestGroup5 (value: RequestGroup5, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestGroup5) { _cached_encoder_for_RequestGroup5 = function (value: RequestGroup5, elGetter: $.ASN1Encoder<RequestGroup5>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service5, $.BER)(value.service5, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Request5, $.BER)(value.request5, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestGroup5(value, elGetter);
}


/* eslint-enable */
