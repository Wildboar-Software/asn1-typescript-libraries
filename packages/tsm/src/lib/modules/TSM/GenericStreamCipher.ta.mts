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
 * @summary GenericStreamCipher
 * @description
 *
 * Stream-cipher record fragment: content plus MAC (`HASH{Opaque}`).
 * ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericStreamCipher ::= SEQUENCE {
 * content    Opaque(SIZE(0..65535)),
 * mAC        HASH{Opaque}
 * }
 * ```
 * 
 * @class
 */
export
class GenericStreamCipher {
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
        readonly mAC: HASH<Opaque>
    ) {}

    /**
     * @summary Restructures an object into a GenericStreamCipher
     * @description
     * 
     * This takes an `object` and converts it to a `GenericStreamCipher`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericStreamCipher`.
     * @returns {GenericStreamCipher}
     */
    public static _from_object (_o: { [_K in keyof (GenericStreamCipher)]: (GenericStreamCipher)[_K] }): GenericStreamCipher {
        return new GenericStreamCipher(_o.content, _o.mAC);
    }


}

/**
 * @summary The Leading Root Component Types of GenericStreamCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericStreamCipher: $.ComponentSpec[] = [
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mAC", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GenericStreamCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericStreamCipher: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericStreamCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericStreamCipher: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericStreamCipher: $.ASN1Decoder<GenericStreamCipher> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericStreamCipher
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericStreamCipher (el: _Element): GenericStreamCipher {
    if (!_cached_decoder_for_GenericStreamCipher) { _cached_decoder_for_GenericStreamCipher = function (el: _Element): GenericStreamCipher {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GenericStreamCipher contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "content";
    sequence[1].name = "mAC";
    let content!: Opaque;
    let mAC!: HASH<Opaque>;
    content = _decode_Opaque(sequence[0]);
    mAC = _get_decoder_for_HASH<Opaque>(_decode_Opaque)(sequence[1]);
    if (content.length > 65535) {
        throw new ASN1SizeError("GenericStreamCipher.content violates SIZE constraint");
    }
    return new GenericStreamCipher(
        content,
        mAC,

    );
}; }
    return _cached_decoder_for_GenericStreamCipher(el);
}

let _cached_encoder_for_GenericStreamCipher: $.ASN1Encoder<GenericStreamCipher> | null = null;

/**
 * @summary Encodes a(n) GenericStreamCipher into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericStreamCipher, encoded as an ASN.1 Element.
 */
export
function _encode_GenericStreamCipher (value: GenericStreamCipher, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericStreamCipher) { _cached_encoder_for_GenericStreamCipher = function (value: GenericStreamCipher): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Opaque(value.content, $.BER),
            /* REQUIRED   */ _get_encoder_for_HASH<Opaque>(_encode_Opaque)(value.mAC, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericStreamCipher(value, elGetter);
}


/* eslint-enable */
