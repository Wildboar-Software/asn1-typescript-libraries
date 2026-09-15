/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";

import { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../TSM/HASH.ta.mjs";



/**
 * @summary GenericBlockCipher
 * @description
 *
 * Block-cipher record fragment: content, MAC, and padding. Each
 * padding octet holds (padding length − 1) so the fragment is a
 * multiple of the block size. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericBlockCipher ::= SEQUENCE {
 * content        Opaque(SIZE(0..65535)),
 * mAC        HASH{Opaque},
 * padding        Opaque(SIZE(0..255))
 *         (CONSTRAINED BY {-- each octet contains the number of
 *                                 -- padding octets minus 1 to obtain
 *                      -- a length multiple of block length
 *                      GenericBlockCipher})
 * }
 * ```
 * 
 * @class
 */
export
class GenericBlockCipher {
    constructor (
        /**
         * @summary `content`.
         * @description
         *
         * Encrypted record payload, `SIZE(0..65535)`. X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly content: Opaque,
        /**
         * @summary `mAC`.
         * @description
         *
         * Record MAC, `HASH{Opaque}`. X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly mAC: HASH<Opaque>,
        /**
         * @summary `padding`.
         * @description
         *
         * Block padding: each octet is (padding length − 1). X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly padding: Opaque
    ) {}

    /**
     * @summary Restructures an object into a GenericBlockCipher
     * @description
     * 
     * This takes an `object` and converts it to a `GenericBlockCipher`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericBlockCipher`.
     * @returns {GenericBlockCipher}
     */
    public static _from_object (_o: { [_K in keyof (GenericBlockCipher)]: (GenericBlockCipher)[_K] }): GenericBlockCipher {
        return new GenericBlockCipher(_o.content, _o.mAC, _o.padding);
    }


}

/**
 * @summary The Leading Root Component Types of GenericBlockCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericBlockCipher: $.ComponentSpec[] = [
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mAC", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("padding", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GenericBlockCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericBlockCipher: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericBlockCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericBlockCipher: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericBlockCipher: $.ASN1Decoder<GenericBlockCipher> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericBlockCipher
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericBlockCipher (el: _Element): GenericBlockCipher {
    if (!_cached_decoder_for_GenericBlockCipher) { _cached_decoder_for_GenericBlockCipher = function (el: _Element): GenericBlockCipher {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GenericBlockCipher contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "content";
    sequence[1].name = "mAC";
    sequence[2].name = "padding";
    let content!: Opaque;
    let mAC!: HASH<Opaque>;
    let padding!: Opaque;
    content = _decode_Opaque(sequence[0]);
    mAC = _get_decoder_for_HASH<Opaque>(_decode_Opaque)(sequence[1]);
    padding = _decode_Opaque(sequence[2]);
    if (content.length > 65535) {
        throw new ASN1SizeError("GenericBlockCipher.content violates SIZE constraint");
    }
    if (padding.length > 255) {
        throw new ASN1SizeError("GenericBlockCipher.padding violates SIZE constraint");
    }
    return new GenericBlockCipher(
        content,
        mAC,
        padding,

    );
}; }
    return _cached_decoder_for_GenericBlockCipher(el);
}

let _cached_encoder_for_GenericBlockCipher: $.ASN1Encoder<GenericBlockCipher> | null = null;

/**
 * @summary Encodes a(n) GenericBlockCipher into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericBlockCipher, encoded as an ASN.1 Element.
 */
export
function _encode_GenericBlockCipher (value: GenericBlockCipher, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericBlockCipher) { _cached_encoder_for_GenericBlockCipher = function (value: GenericBlockCipher): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Opaque(value.content, $.BER),
            /* REQUIRED   */ _get_encoder_for_HASH<Opaque>(_encode_Opaque)(value.mAC, $.BER),
            /* REQUIRED   */ _encode_Opaque(value.padding, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericBlockCipher(value, elGetter);
}


/* eslint-enable */
