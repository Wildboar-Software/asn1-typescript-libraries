/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HopInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HopInfo ::= SEQUENCE {
 *     current-hop [1] INTEGER,
 *     max-hops    [2] INTEGER,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class HopInfo {
    constructor (
        /**
         * @summary `current_hop`.
         * @public
         * @readonly
         */
        readonly current_hop: INTEGER,
        /**
         * @summary `max_hops`.
         * @public
         * @readonly
         */
        readonly max_hops: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HopInfo
     * @description
     * 
     * This takes an `object` and converts it to a `HopInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HopInfo`.
     * @returns {HopInfo}
     */
    public static _from_object (_o: { [_K in keyof (HopInfo)]: (HopInfo)[_K] }): HopInfo {
        return new HopInfo(_o.current_hop, _o.max_hops, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of HopInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HopInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("current-hop", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("max-hops", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of HopInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HopInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HopInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HopInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HopInfo: $.ASN1Decoder<HopInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HopInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HopInfo (el: _Element): HopInfo {
    if (!_cached_decoder_for_HopInfo) { _cached_decoder_for_HopInfo = function (el: _Element): HopInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HopInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "current-hop";
    sequence[1].name = "max-hops";
    let current_hop!: INTEGER;
    let max_hops!: INTEGER;
    current_hop = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    max_hops = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new HopInfo(
        current_hop,
        max_hops,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_HopInfo(el);
}

let _cached_encoder_for_HopInfo: $.ASN1Encoder<HopInfo> | null = null;

/**
 * @summary Encodes a(n) HopInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HopInfo, encoded as an ASN.1 Element.
 */
export
function _encode_HopInfo (value: HopInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HopInfo) { _cached_encoder_for_HopInfo = function (value: HopInfo, elGetter: $.ASN1Encoder<HopInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.current_hop, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.max_hops, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HopInfo(value, elGetter);
}


/* eslint-enable */
