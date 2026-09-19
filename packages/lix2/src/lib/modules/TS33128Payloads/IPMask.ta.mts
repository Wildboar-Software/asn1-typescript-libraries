/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";


/**
 * @summary IPMask
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPMask ::= SEQUENCE
 * {
 *     fromIPAddress [1] IPAddress,
 *     toIPAddress   [2] IPAddress
 * }
 * ```
 * 
 * @class
 */
export
class IPMask {
    constructor (
        /**
         * @summary `fromIPAddress`.
         * @public
         * @readonly
         */
        readonly fromIPAddress: IPAddress,
        /**
         * @summary `toIPAddress`.
         * @public
         * @readonly
         */
        readonly toIPAddress: IPAddress
    ) {}

    /**
     * @summary Restructures an object into a IPMask
     * @description
     * 
     * This takes an `object` and converts it to a `IPMask`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMask`.
     * @returns {IPMask}
     */
    public static _from_object (_o: { [_K in keyof (IPMask)]: (IPMask)[_K] }): IPMask {
        return new IPMask(_o.fromIPAddress, _o.toIPAddress);
    }


}

/**
 * @summary The Leading Root Component Types of IPMask
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPMask: $.ComponentSpec[] = [
    new $.ComponentSpec("fromIPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("toIPAddress", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IPMask
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPMask: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPMask
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPMask: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPMask: $.ASN1Decoder<IPMask> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMask
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPMask (el: _Element): IPMask {
    if (!_cached_decoder_for_IPMask) { _cached_decoder_for_IPMask = function (el: _Element): IPMask {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IPMask contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fromIPAddress";
    sequence[1].name = "toIPAddress";
    let fromIPAddress!: IPAddress;
    let toIPAddress!: IPAddress;
    fromIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    toIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[1]);
    return new IPMask(
        fromIPAddress,
        toIPAddress,

    );
}; }
    return _cached_decoder_for_IPMask(el);
}

let _cached_encoder_for_IPMask: $.ASN1Encoder<IPMask> | null = null;

/**
 * @summary Encodes a(n) IPMask into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMask, encoded as an ASN.1 Element.
 */
export
function _encode_IPMask (value: IPMask, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPMask) { _cached_encoder_for_IPMask = function (value: IPMask, elGetter: $.ASN1Encoder<IPMask>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.fromIPAddress, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.toIPAddress, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPMask(value, elGetter);
}


/* eslint-enable */
