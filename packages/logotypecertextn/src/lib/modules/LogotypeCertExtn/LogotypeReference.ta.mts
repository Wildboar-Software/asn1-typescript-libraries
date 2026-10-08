/* eslint-disable */
import {
    IA5String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HashAlgAndValue, _decode_HashAlgAndValue, _encode_HashAlgAndValue } from "../LogotypeCertExtn/HashAlgAndValue.ta.mjs";
// export { HashAlgAndValue, _decode_HashAlgAndValue, _encode_HashAlgAndValue } from "../LogotypeCertExtn/HashAlgAndValue.ta.mjs";


/**
 * @summary LogotypeReference
 * @description
 *
 * Indirect address of one logotype. Each `refStructURI` points at a
 * binary file whose contents are the DER encoding of
 * {@link LogotypeData}. The file name should use the extension `LTD`.
 * Hashes and URI replicas follow the same rules as
 * {@link LogotypeDetails}.
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeReference ::= SEQUENCE {
 *    refStructHash   SEQUENCE SIZE (1..MAX) OF HashAlgAndValue,
 *    refStructURI    SEQUENCE SIZE (1..MAX) OF IA5String }
 * ```
 * 
 * @class
 */
export
class LogotypeReference {
    constructor (
        /**
         * One-way hashes of the entire `.LTD` file. One of them is a
         * SHA-1 hash of the whole file. The client computes one of the
         * identified hashes and discards the file on mismatch.
         *
         * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
         * @public
         * @readonly
         */
        readonly refStructHash: HashAlgAndValue[],
        /**
         * Replicas of the same `.LTD` file. Every URI uses the `http`
         * or `ftp` scheme, and at least one uses `http`. Clients fetch
         * with HTTP/1.1, and may use FTP. If one URI fails, try
         * another in the sequence. The named file is DER-encoded
         * {@link LogotypeData} and its name should end in `.LTD`.
         *
         * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
         * @public
         * @readonly
         */
        readonly refStructURI: IA5String[]
    ) {
        if (refStructHash.length < 1) {
            throw new ASN1SizeError("LogotypeReference.refStructHash violates SIZE constraint");
        }
        if (refStructURI.length < 1) {
            throw new ASN1SizeError("LogotypeReference.refStructURI violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LogotypeReference
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeReference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeReference`.
     * @returns {LogotypeReference}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeReference)]: (LogotypeReference)[_K] }): LogotypeReference {
        return new LogotypeReference(_o.refStructHash, _o.refStructURI);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeReference: $.ComponentSpec[] = [
    new $.ComponentSpec("refStructHash", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("refStructURI", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of LogotypeReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeReference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeReference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeReference: $.ASN1Decoder<LogotypeReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeReference (el: _Element): LogotypeReference {
    if (!_cached_decoder_for_LogotypeReference) { _cached_decoder_for_LogotypeReference = function (el: _Element): LogotypeReference {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LogotypeReference contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refStructHash";
    sequence[1].name = "refStructURI";
    const refStructHash: HashAlgAndValue[] = $._decodeSequenceOf<HashAlgAndValue>(() => _decode_HashAlgAndValue)(sequence[0]);
    const refStructURI: IA5String[] = $._decodeSequenceOf<IA5String>(() => $._decodeIA5String)(sequence[1]);
    return new LogotypeReference(
        refStructHash,
        refStructURI,

    );
}; }
    return _cached_decoder_for_LogotypeReference(el);
}

let _cached_encoder_for_LogotypeReference: $.ASN1Encoder<LogotypeReference> | null = null;

/**
 * @summary Encodes a(n) LogotypeReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeReference, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeReference (value: LogotypeReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeReference) { _cached_encoder_for_LogotypeReference = function (value: LogotypeReference): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<HashAlgAndValue>(() => _encode_HashAlgAndValue, $.BER)(value.refStructHash, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<IA5String>(() => $._encodeIA5String, $.BER)(value.refStructURI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeReference(value, elGetter);
}


/* eslint-enable */
