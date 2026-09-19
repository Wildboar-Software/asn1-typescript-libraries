/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSSessionLeg, _decode_RCSSessionLeg, _encode_RCSSessionLeg, _enum_for_RCSSessionLeg } from "../TS33128Payloads/RCSSessionLeg.ta.mjs";
// export { RCSSessionLeg, _enum_for_RCSSessionLeg, RCSSessionLeg_remoteLeg /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteLeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionLeg_localLeg /* IMPORTED_LONG_ENUMERATION_ITEM */, localLeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionLeg, _encode_RCSSessionLeg } from "../TS33128Payloads/RCSSessionLeg.ta.mjs";
import { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";


/**
 * @summary RCSSIPSessionExchange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSIPSessionExchange ::= SEQUENCE
 * {
 *     sessionLeg       [1] RCSSessionLeg,
 *     sIPRequest       [2] IMSPayload,
 *     sIPResponse      [3] IMSPayload
 * }
 * ```
 * 
 * @class
 */
export
class RCSSIPSessionExchange {
    constructor (
        /**
         * @summary `sessionLeg`.
         * @public
         * @readonly
         */
        readonly sessionLeg: RCSSessionLeg,
        /**
         * @summary `sIPRequest`.
         * @public
         * @readonly
         */
        readonly sIPRequest: IMSPayload,
        /**
         * @summary `sIPResponse`.
         * @public
         * @readonly
         */
        readonly sIPResponse: IMSPayload
    ) {}

    /**
     * @summary Restructures an object into a RCSSIPSessionExchange
     * @description
     * 
     * This takes an `object` and converts it to a `RCSSIPSessionExchange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSSIPSessionExchange`.
     * @returns {RCSSIPSessionExchange}
     */
    public static _from_object (_o: { [_K in keyof (RCSSIPSessionExchange)]: (RCSSIPSessionExchange)[_K] }): RCSSIPSessionExchange {
        return new RCSSIPSessionExchange(_o.sessionLeg, _o.sIPRequest, _o.sIPResponse);
    }

        /**
         * @summary The enum used as the type of the component `sessionLeg`
         * @public
         * @static
         */

    public static _enum_for_sessionLeg = _enum_for_RCSSessionLeg;
}

/**
 * @summary The Leading Root Component Types of RCSSIPSessionExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSSIPSessionExchange: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionLeg", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIPRequest", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sIPResponse", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RCSSIPSessionExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSSIPSessionExchange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSSIPSessionExchange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSSIPSessionExchange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSSIPSessionExchange: $.ASN1Decoder<RCSSIPSessionExchange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSIPSessionExchange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSIPSessionExchange (el: _Element): RCSSIPSessionExchange {
    if (!_cached_decoder_for_RCSSIPSessionExchange) { _cached_decoder_for_RCSSIPSessionExchange = function (el: _Element): RCSSIPSessionExchange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RCSSIPSessionExchange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionLeg";
    sequence[1].name = "sIPRequest";
    sequence[2].name = "sIPResponse";
    let sessionLeg!: RCSSessionLeg;
    let sIPRequest!: IMSPayload;
    let sIPResponse!: IMSPayload;
    sessionLeg = $._decode_implicit<RCSSessionLeg>(() => _decode_RCSSessionLeg)(sequence[0]);
    sIPRequest = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(sequence[1]);
    sIPResponse = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(sequence[2]);
    return new RCSSIPSessionExchange(
        sessionLeg,
        sIPRequest,
        sIPResponse,

    );
}; }
    return _cached_decoder_for_RCSSIPSessionExchange(el);
}

let _cached_encoder_for_RCSSIPSessionExchange: $.ASN1Encoder<RCSSIPSessionExchange> | null = null;

/**
 * @summary Encodes a(n) RCSSIPSessionExchange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSIPSessionExchange, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSIPSessionExchange (value: RCSSIPSessionExchange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSIPSessionExchange) { _cached_encoder_for_RCSSIPSessionExchange = function (value: RCSSIPSessionExchange, elGetter: $.ASN1Encoder<RCSSIPSessionExchange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RCSSessionLeg, $.BER)(value.sessionLeg, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMSPayload, $.BER)(value.sIPRequest, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_IMSPayload, $.BER)(value.sIPResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCSSIPSessionExchange(value, elGetter);
}


/* eslint-enable */
