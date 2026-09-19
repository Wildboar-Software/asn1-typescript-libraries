/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSCCUnavailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCCUnavailable ::= SEQUENCE
 * {
 *     cCUnavailableReason   [1] UTF8String,
 *     sDPState              [2] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSCCUnavailable {
    constructor (
        /**
         * @summary `cCUnavailableReason`.
         * @public
         * @readonly
         */
        readonly cCUnavailableReason: UTF8String,
        /**
         * @summary `sDPState`.
         * @public
         * @readonly
         */
        readonly sDPState: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a IMSCCUnavailable
     * @description
     * 
     * This takes an `object` and converts it to a `IMSCCUnavailable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSCCUnavailable`.
     * @returns {IMSCCUnavailable}
     */
    public static _from_object (_o: { [_K in keyof (IMSCCUnavailable)]: (IMSCCUnavailable)[_K] }): IMSCCUnavailable {
        return new IMSCCUnavailable(_o.cCUnavailableReason, _o.sDPState);
    }


}

/**
 * @summary The Leading Root Component Types of IMSCCUnavailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSCCUnavailable: $.ComponentSpec[] = [
    new $.ComponentSpec("cCUnavailableReason", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sDPState", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMSCCUnavailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSCCUnavailable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSCCUnavailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSCCUnavailable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSCCUnavailable: $.ASN1Decoder<IMSCCUnavailable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSCCUnavailable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSCCUnavailable (el: _Element): IMSCCUnavailable {
    if (!_cached_decoder_for_IMSCCUnavailable) { _cached_decoder_for_IMSCCUnavailable = function (el: _Element): IMSCCUnavailable {
    let cCUnavailableReason!: UTF8String;
    let sDPState: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "cCUnavailableReason": (_el: _Element): void => { cCUnavailableReason = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "sDPState": (_el: _Element): void => { sDPState = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSCCUnavailable,
        _extension_additions_list_spec_for_IMSCCUnavailable,
        _root_component_type_list_2_spec_for_IMSCCUnavailable,
        undefined,
    );
    return new IMSCCUnavailable(
        cCUnavailableReason,
        sDPState
    );
}; }
    return _cached_decoder_for_IMSCCUnavailable(el);
}

let _cached_encoder_for_IMSCCUnavailable: $.ASN1Encoder<IMSCCUnavailable> | null = null;

/**
 * @summary Encodes a(n) IMSCCUnavailable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSCCUnavailable, encoded as an ASN.1 Element.
 */
export
function _encode_IMSCCUnavailable (value: IMSCCUnavailable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSCCUnavailable) { _cached_encoder_for_IMSCCUnavailable = function (value: IMSCCUnavailable, elGetter: $.ASN1Encoder<IMSCCUnavailable>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.cCUnavailableReason, $.BER),
            /* IF_ABSENT  */ ((value.sDPState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sDPState, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSCCUnavailable(value, elGetter);
}


/* eslint-enable */
