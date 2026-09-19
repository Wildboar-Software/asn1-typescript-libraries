/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service3, _decode_Service3, _encode_Service3, _enum_for_Service3 } from "../AIN-Parameters/Service3.ta.mjs";
// export { Service3, _enum_for_Service3, Service3_distinctiveRingingCallWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, distinctiveRingingCallWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service3_selectiveCallRejection /* IMPORTED_LONG_ENUMERATION_ITEM */, selectiveCallRejection /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service3, _encode_Service3 } from "../AIN-Parameters/Service3.ta.mjs";
import { Request3, _decode_Request3, _encode_Request3 } from "../AIN-Parameters/Request3.ta.mjs";
// export { Request3, Request3_activationStatus /* IMPORTED_LONG_NAMED_BIT */, activationStatus /* IMPORTED_SHORT_NAMED_BIT */, Request3_entireList /* IMPORTED_LONG_NAMED_BIT */, entireList /* IMPORTED_SHORT_NAMED_BIT */, Request3_listSize /* IMPORTED_LONG_NAMED_BIT */, listSize /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request3, _encode_Request3 } from "../AIN-Parameters/Request3.ta.mjs";


/**
 * @summary RequestGroup3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestGroup3 ::= SEQUENCE{
 *         service3 [1] IMPLICIT Service3,--See Section 6.4.2 for the encoding
 *         request3 [2] IMPLICIT Request3
 *     }
 * ```
 * 
 * @class
 */
export
class RequestGroup3 {
    constructor (
        /**
         * @summary `service3`.
         * @public
         * @readonly
         */
        readonly service3: Service3,
        /**
         * @summary `request3`.
         * @public
         * @readonly
         */
        readonly request3: Request3
    ) {}

    /**
     * @summary Restructures an object into a RequestGroup3
     * @description
     * 
     * This takes an `object` and converts it to a `RequestGroup3`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestGroup3`.
     * @returns {RequestGroup3}
     */
    public static _from_object (_o: { [_K in keyof (RequestGroup3)]: (RequestGroup3)[_K] }): RequestGroup3 {
        return new RequestGroup3(_o.service3, _o.request3);
    }

        /**
         * @summary The enum used as the type of the component `service3`
         * @public
         * @static
         */

    public static _enum_for_service3 = _enum_for_Service3;
}

/**
 * @summary The Leading Root Component Types of RequestGroup3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestGroup3: $.ComponentSpec[] = [
    new $.ComponentSpec("service3", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("request3", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestGroup3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestGroup3: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestGroup3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestGroup3: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestGroup3: $.ASN1Decoder<RequestGroup3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestGroup3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestGroup3 (el: _Element): RequestGroup3 {
    if (!_cached_decoder_for_RequestGroup3) { _cached_decoder_for_RequestGroup3 = function (el: _Element): RequestGroup3 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestGroup3 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service3";
    sequence[1].name = "request3";
    let service3!: Service3;
    let request3!: Request3;
    service3 = $._decode_implicit<Service3>(() => _decode_Service3)(sequence[0]);
    request3 = $._decode_implicit<Request3>(() => _decode_Request3)(sequence[1]);
    return new RequestGroup3(
        service3,
        request3,

    );
}; }
    return _cached_decoder_for_RequestGroup3(el);
}

let _cached_encoder_for_RequestGroup3: $.ASN1Encoder<RequestGroup3> | null = null;

/**
 * @summary Encodes a(n) RequestGroup3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestGroup3, encoded as an ASN.1 Element.
 */
export
function _encode_RequestGroup3 (value: RequestGroup3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestGroup3) { _cached_encoder_for_RequestGroup3 = function (value: RequestGroup3, elGetter: $.ASN1Encoder<RequestGroup3>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service3, $.BER)(value.service3, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Request3, $.BER)(value.request3, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestGroup3(value, elGetter);
}


/* eslint-enable */
