/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCChatGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCChatGroupID ::= SEQUENCE
 * {
 *     groupIdentity              [1] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class PTCChatGroupID {
    constructor (
        /**
         * @summary `groupIdentity`.
         * @public
         * @readonly
         */
        readonly groupIdentity: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a PTCChatGroupID
     * @description
     * 
     * This takes an `object` and converts it to a `PTCChatGroupID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCChatGroupID`.
     * @returns {PTCChatGroupID}
     */
    public static _from_object (_o: { [_K in keyof (PTCChatGroupID)]: (PTCChatGroupID)[_K] }): PTCChatGroupID {
        return new PTCChatGroupID(_o.groupIdentity);
    }


}

/**
 * @summary The Leading Root Component Types of PTCChatGroupID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCChatGroupID: $.ComponentSpec[] = [
    new $.ComponentSpec("groupIdentity", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PTCChatGroupID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCChatGroupID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCChatGroupID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCChatGroupID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCChatGroupID: $.ASN1Decoder<PTCChatGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCChatGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCChatGroupID (el: _Element): PTCChatGroupID {
    if (!_cached_decoder_for_PTCChatGroupID) { _cached_decoder_for_PTCChatGroupID = function (el: _Element): PTCChatGroupID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("PTCChatGroupID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "groupIdentity";
    let groupIdentity!: UTF8String;
    groupIdentity = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    return new PTCChatGroupID(
        groupIdentity,

    );
}; }
    return _cached_decoder_for_PTCChatGroupID(el);
}

let _cached_encoder_for_PTCChatGroupID: $.ASN1Encoder<PTCChatGroupID> | null = null;

/**
 * @summary Encodes a(n) PTCChatGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCChatGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_PTCChatGroupID (value: PTCChatGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCChatGroupID) { _cached_encoder_for_PTCChatGroupID = function (value: PTCChatGroupID, elGetter: $.ASN1Encoder<PTCChatGroupID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.groupIdentity, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCChatGroupID(value, elGetter);
}


/* eslint-enable */
