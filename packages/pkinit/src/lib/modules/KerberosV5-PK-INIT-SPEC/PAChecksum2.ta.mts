/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";


/**
 * @summary PAChecksum2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PAChecksum2 ::= SEQUENCE {
 *     checksum                [0] OCTET STRING,
 *             -- Contains the checksum, performed over
 *             -- KDC-REQ-BODY.
 *     algorithmIdentifier     [1] AlgorithmIdentifier
 *             -- Digest algorithm used to calculate the checksum.
 * }
 * ```
 * 
 * @class
 */
export
class PAChecksum2 {
    constructor (
        /**
         * @summary `checksum`.
         * @public
         * @readonly
         */
        readonly checksum: OCTET_STRING,
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier
    ) {}

    /**
     * @summary Restructures an object into a PAChecksum2
     * @description
     * 
     * This takes an `object` and converts it to a `PAChecksum2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PAChecksum2`.
     * @returns {PAChecksum2}
     */
    public static _from_object (_o: { [_K in keyof (PAChecksum2)]: (PAChecksum2)[_K] }): PAChecksum2 {
        return new PAChecksum2(_o.checksum, _o.algorithmIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of PAChecksum2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PAChecksum2: $.ComponentSpec[] = [
    new $.ComponentSpec("checksum", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("algorithmIdentifier", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PAChecksum2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PAChecksum2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PAChecksum2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PAChecksum2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PAChecksum2: $.ASN1Decoder<PAChecksum2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PAChecksum2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PAChecksum2 (el: _Element): PAChecksum2 {
    if (!_cached_decoder_for_PAChecksum2) { _cached_decoder_for_PAChecksum2 = function (el: _Element): PAChecksum2 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PAChecksum2 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "checksum";
    sequence[1].name = "algorithmIdentifier";
    let checksum!: OCTET_STRING;
    let algorithmIdentifier!: AlgorithmIdentifier;
    checksum = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    algorithmIdentifier = $._decode_explicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(sequence[1]);
    return new PAChecksum2(
        checksum,
        algorithmIdentifier,

    );
}; }
    return _cached_decoder_for_PAChecksum2(el);
}

let _cached_encoder_for_PAChecksum2: $.ASN1Encoder<PAChecksum2> | null = null;

/**
 * @summary Encodes a(n) PAChecksum2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PAChecksum2, encoded as an ASN.1 Element.
 */
export
function _encode_PAChecksum2 (value: PAChecksum2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PAChecksum2) { _cached_encoder_for_PAChecksum2 = function (value: PAChecksum2, elGetter: $.ASN1Encoder<PAChecksum2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.checksum, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_AlgorithmIdentifier, $.BER)(value.algorithmIdentifier, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PAChecksum2(value, elGetter);
}


/* eslint-enable */
