/* eslint-disable */
import {
    INTEGER,
    UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMStateFlag, _decode_MMStateFlag, _encode_MMStateFlag, _enum_for_MMStateFlag } from "../TS33128Payloads/MMStateFlag.ta.mjs";
// export { MMStateFlag, _enum_for_MMStateFlag, MMStateFlag_add /* IMPORTED_LONG_ENUMERATION_ITEM */, add /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStateFlag_remove /* IMPORTED_LONG_ENUMERATION_ITEM */, remove /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStateFlag_filter /* IMPORTED_LONG_ENUMERATION_ITEM */, filter /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStateFlag, _encode_MMStateFlag } from "../TS33128Payloads/MMStateFlag.ta.mjs";


/**
 * @summary MMFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMFlags ::= SEQUENCE
 * {
 *     length     [1] INTEGER,
 *     flag       [2] MMStateFlag,
 *     flagString [3] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class MMFlags {
    constructor (
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: INTEGER,
        /**
         * @summary `flag`.
         * @public
         * @readonly
         */
        readonly flag: MMStateFlag,
        /**
         * @summary `flagString`.
         * @public
         * @readonly
         */
        readonly flagString: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a MMFlags
     * @description
     * 
     * This takes an `object` and converts it to a `MMFlags`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMFlags`.
     * @returns {MMFlags}
     */
    public static _from_object (_o: { [_K in keyof (MMFlags)]: (MMFlags)[_K] }): MMFlags {
        return new MMFlags(_o.length, _o.flag, _o.flagString);
    }

        /**
         * @summary The enum used as the type of the component `flag`
         * @public
         * @static
         */

    public static _enum_for_flag = _enum_for_MMStateFlag;
}

/**
 * @summary The Leading Root Component Types of MMFlags
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMFlags: $.ComponentSpec[] = [
    new $.ComponentSpec("length", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("flag", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("flagString", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MMFlags
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMFlags: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMFlags
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMFlags: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMFlags: $.ASN1Decoder<MMFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMFlags (el: _Element): MMFlags {
    if (!_cached_decoder_for_MMFlags) { _cached_decoder_for_MMFlags = function (el: _Element): MMFlags {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MMFlags contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "length";
    sequence[1].name = "flag";
    sequence[2].name = "flagString";
    let length!: INTEGER;
    let flag!: MMStateFlag;
    let flagString!: UTF8String;
    length = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    flag = $._decode_implicit<MMStateFlag>(() => _decode_MMStateFlag)(sequence[1]);
    flagString = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[2]);
    return new MMFlags(
        length,
        flag,
        flagString,

    );
}; }
    return _cached_decoder_for_MMFlags(el);
}

let _cached_encoder_for_MMFlags: $.ASN1Encoder<MMFlags> | null = null;

/**
 * @summary Encodes a(n) MMFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMFlags, encoded as an ASN.1 Element.
 */
export
function _encode_MMFlags (value: MMFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMFlags) { _cached_encoder_for_MMFlags = function (value: MMFlags, elGetter: $.ASN1Encoder<MMFlags>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.length, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMStateFlag, $.BER)(value.flag, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.flagString, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMFlags(value, elGetter);
}


/* eslint-enable */
