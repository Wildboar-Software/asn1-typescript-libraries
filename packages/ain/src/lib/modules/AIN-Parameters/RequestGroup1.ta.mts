/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Service1, _decode_Service1, _encode_Service1, _enum_for_Service1 } from "../AIN-Parameters/Service1.ta.mjs";
// export { Service1, _enum_for_Service1, Service1_messageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, messageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_visualMessageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, visualMessageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_anonymousCallRejection /* IMPORTED_LONG_ENUMERATION_ITEM */, anonymousCallRejection /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_automaticCallback /* IMPORTED_LONG_ENUMERATION_ITEM */, automaticCallback /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_automaticRecall /* IMPORTED_LONG_ENUMERATION_ITEM */, automaticRecall /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callScreening /* IMPORTED_LONG_ENUMERATION_ITEM */, callScreening /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_outsideCallingAreaAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, outsideCallingAreaAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callingIdPresentAndSuppress /* IMPORTED_LONG_ENUMERATION_ITEM */, callingIdPresentAndSuppress /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service1, _encode_Service1 } from "../AIN-Parameters/Service1.ta.mjs";
import { Request1, _decode_Request1, _encode_Request1 } from "../AIN-Parameters/Request1.ta.mjs";
// export { Request1, Request1_activationStatus /* IMPORTED_LONG_NAMED_BIT */, activationStatus /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request1, _encode_Request1 } from "../AIN-Parameters/Request1.ta.mjs";


/**
 * @summary RequestGroup1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestGroup1 ::= SEQUENCE{
 *         service1    [1] IMPLICIT Service1,--See Section 6.4.2 for the encoding.
 *         request1    [2] IMPLICIT Request1
 *     }
 * ```
 * 
 * @class
 */
export
class RequestGroup1 {
    constructor (
        /**
         * @summary `service1`.
         * @public
         * @readonly
         */
        readonly service1: Service1,
        /**
         * @summary `request1`.
         * @public
         * @readonly
         */
        readonly request1: Request1
    ) {}

    /**
     * @summary Restructures an object into a RequestGroup1
     * @description
     * 
     * This takes an `object` and converts it to a `RequestGroup1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestGroup1`.
     * @returns {RequestGroup1}
     */
    public static _from_object (_o: { [_K in keyof (RequestGroup1)]: (RequestGroup1)[_K] }): RequestGroup1 {
        return new RequestGroup1(_o.service1, _o.request1);
    }

        /**
         * @summary The enum used as the type of the component `service1`
         * @public
         * @static
         */

    public static _enum_for_service1 = _enum_for_Service1;
}

/**
 * @summary The Leading Root Component Types of RequestGroup1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestGroup1: $.ComponentSpec[] = [
    new $.ComponentSpec("service1", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("request1", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestGroup1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestGroup1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestGroup1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestGroup1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestGroup1: $.ASN1Decoder<RequestGroup1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestGroup1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestGroup1 (el: _Element): RequestGroup1 {
    if (!_cached_decoder_for_RequestGroup1) { _cached_decoder_for_RequestGroup1 = function (el: _Element): RequestGroup1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestGroup1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service1";
    sequence[1].name = "request1";
    let service1!: Service1;
    let request1!: Request1;
    service1 = $._decode_implicit<Service1>(() => _decode_Service1)(sequence[0]);
    request1 = $._decode_implicit<Request1>(() => _decode_Request1)(sequence[1]);
    return new RequestGroup1(
        service1,
        request1,

    );
}; }
    return _cached_decoder_for_RequestGroup1(el);
}

let _cached_encoder_for_RequestGroup1: $.ASN1Encoder<RequestGroup1> | null = null;

/**
 * @summary Encodes a(n) RequestGroup1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestGroup1, encoded as an ASN.1 Element.
 */
export
function _encode_RequestGroup1 (value: RequestGroup1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestGroup1) { _cached_encoder_for_RequestGroup1 = function (value: RequestGroup1, elGetter: $.ASN1Encoder<RequestGroup1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service1, $.BER)(value.service1, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Request1, $.BER)(value.request1, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestGroup1(value, elGetter);
}


/* eslint-enable */
