/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service6, _decode_Service6, _encode_Service6, _enum_for_Service6 } from "../AIN-Parameters/Service6.ta.mjs";
// export { Service6, _enum_for_Service6, Service6_ringControl /* IMPORTED_LONG_ENUMERATION_ITEM */, ringControl /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service6, _encode_Service6 } from "../AIN-Parameters/Service6.ta.mjs";
import { Request6, _decode_Request6, _encode_Request6 } from "../AIN-Parameters/Request6.ta.mjs";
// export { Request6, Request6_delayInterval /* IMPORTED_LONG_NAMED_BIT */, delayInterval /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request6, _encode_Request6 } from "../AIN-Parameters/Request6.ta.mjs";


/**
 * @summary RequestGroup6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestGroup6 ::= SEQUENCE{
 *         service6 [1] IMPLICIT Service6,--See Section 6.4.2 for encoding
 *         request6 [2] IMPLICIT Request6
 *     }
 * ```
 * 
 * @class
 */
export
class RequestGroup6 {
    constructor (
        /**
         * @summary `service6`.
         * @public
         * @readonly
         */
        readonly service6: Service6,
        /**
         * @summary `request6`.
         * @public
         * @readonly
         */
        readonly request6: Request6
    ) {}

    /**
     * @summary Restructures an object into a RequestGroup6
     * @description
     * 
     * This takes an `object` and converts it to a `RequestGroup6`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestGroup6`.
     * @returns {RequestGroup6}
     */
    public static _from_object (_o: { [_K in keyof (RequestGroup6)]: (RequestGroup6)[_K] }): RequestGroup6 {
        return new RequestGroup6(_o.service6, _o.request6);
    }

        /**
         * @summary The enum used as the type of the component `service6`
         * @public
         * @static
         */

    public static _enum_for_service6 = _enum_for_Service6;
}

/**
 * @summary The Leading Root Component Types of RequestGroup6
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestGroup6: $.ComponentSpec[] = [
    new $.ComponentSpec("service6", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("request6", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestGroup6
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestGroup6: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestGroup6
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestGroup6: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestGroup6: $.ASN1Decoder<RequestGroup6> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestGroup6
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestGroup6 (el: _Element): RequestGroup6 {
    if (!_cached_decoder_for_RequestGroup6) { _cached_decoder_for_RequestGroup6 = function (el: _Element): RequestGroup6 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestGroup6 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service6";
    sequence[1].name = "request6";
    let service6!: Service6;
    let request6!: Request6;
    service6 = $._decode_implicit<Service6>(() => _decode_Service6)(sequence[0]);
    request6 = $._decode_implicit<Request6>(() => _decode_Request6)(sequence[1]);
    return new RequestGroup6(
        service6,
        request6,

    );
}; }
    return _cached_decoder_for_RequestGroup6(el);
}

let _cached_encoder_for_RequestGroup6: $.ASN1Encoder<RequestGroup6> | null = null;

/**
 * @summary Encodes a(n) RequestGroup6 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestGroup6, encoded as an ASN.1 Element.
 */
export
function _encode_RequestGroup6 (value: RequestGroup6, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestGroup6) { _cached_encoder_for_RequestGroup6 = function (value: RequestGroup6, elGetter: $.ASN1Encoder<RequestGroup6>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service6, $.BER)(value.service6, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Request6, $.BER)(value.request6, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestGroup6(value, elGetter);
}


/* eslint-enable */
