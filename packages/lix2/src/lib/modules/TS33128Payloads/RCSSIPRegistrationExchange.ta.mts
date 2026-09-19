/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";


/**
 * @summary RCSSIPRegistrationExchange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSIPRegistrationExchange ::= SEQUENCE
 * {
 *     rCSRegistrationUpdateRequest  [1] IMSPayload,
 *     rCSRegistrationUpdateResponse [2] IMSPayload
 * }
 * ```
 * 
 * @class
 */
export
class RCSSIPRegistrationExchange {
    constructor (
        /**
         * @summary `rCSRegistrationUpdateRequest`.
         * @public
         * @readonly
         */
        readonly rCSRegistrationUpdateRequest: IMSPayload,
        /**
         * @summary `rCSRegistrationUpdateResponse`.
         * @public
         * @readonly
         */
        readonly rCSRegistrationUpdateResponse: IMSPayload
    ) {}

    /**
     * @summary Restructures an object into a RCSSIPRegistrationExchange
     * @description
     * 
     * This takes an `object` and converts it to a `RCSSIPRegistrationExchange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSSIPRegistrationExchange`.
     * @returns {RCSSIPRegistrationExchange}
     */
    public static _from_object (_o: { [_K in keyof (RCSSIPRegistrationExchange)]: (RCSSIPRegistrationExchange)[_K] }): RCSSIPRegistrationExchange {
        return new RCSSIPRegistrationExchange(_o.rCSRegistrationUpdateRequest, _o.rCSRegistrationUpdateResponse);
    }


}

/**
 * @summary The Leading Root Component Types of RCSSIPRegistrationExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSSIPRegistrationExchange: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSRegistrationUpdateRequest", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rCSRegistrationUpdateResponse", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RCSSIPRegistrationExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSSIPRegistrationExchange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSSIPRegistrationExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSSIPRegistrationExchange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSSIPRegistrationExchange: $.ASN1Decoder<RCSSIPRegistrationExchange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSIPRegistrationExchange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSIPRegistrationExchange (el: _Element): RCSSIPRegistrationExchange {
    if (!_cached_decoder_for_RCSSIPRegistrationExchange) { _cached_decoder_for_RCSSIPRegistrationExchange = function (el: _Element): RCSSIPRegistrationExchange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RCSSIPRegistrationExchange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rCSRegistrationUpdateRequest";
    sequence[1].name = "rCSRegistrationUpdateResponse";
    let rCSRegistrationUpdateRequest!: IMSPayload;
    let rCSRegistrationUpdateResponse!: IMSPayload;
    rCSRegistrationUpdateRequest = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(sequence[0]);
    rCSRegistrationUpdateResponse = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(sequence[1]);
    return new RCSSIPRegistrationExchange(
        rCSRegistrationUpdateRequest,
        rCSRegistrationUpdateResponse,

    );
}; }
    return _cached_decoder_for_RCSSIPRegistrationExchange(el);
}

let _cached_encoder_for_RCSSIPRegistrationExchange: $.ASN1Encoder<RCSSIPRegistrationExchange> | null = null;

/**
 * @summary Encodes a(n) RCSSIPRegistrationExchange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSIPRegistrationExchange, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSIPRegistrationExchange (value: RCSSIPRegistrationExchange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSIPRegistrationExchange) { _cached_encoder_for_RCSSIPRegistrationExchange = function (value: RCSSIPRegistrationExchange, elGetter: $.ASN1Encoder<RCSSIPRegistrationExchange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMSPayload, $.BER)(value.rCSRegistrationUpdateRequest, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMSPayload, $.BER)(value.rCSRegistrationUpdateResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCSSIPRegistrationExchange(value, elGetter);
}


/* eslint-enable */
