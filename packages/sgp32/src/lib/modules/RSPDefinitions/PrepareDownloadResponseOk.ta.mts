/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EUICCSigned2, _decode_EUICCSigned2, _encode_EUICCSigned2 } from "../RSPDefinitions/EUICCSigned2.ta.mjs";
// export { EUICCSigned2, _decode_EUICCSigned2, _encode_EUICCSigned2 } from "../RSPDefinitions/EUICCSigned2.ta.mjs";


/**
 * @summary PrepareDownloadResponseOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareDownloadResponseOk ::= SEQUENCE {
 *     euiccSigned2 EUICCSigned2, -- Signed information
 *     euiccSignature2 [APPLICATION 55] OCTET STRING -- tag '5F37'
 * }
 * ```
 * 
 * @class
 */
export
class PrepareDownloadResponseOk {
    constructor (
        /**
         * @summary `euiccSigned2`.
         * @public
         * @readonly
         */
        readonly euiccSigned2: EUICCSigned2,
        /**
         * @summary `euiccSignature2`.
         * @public
         * @readonly
         */
        readonly euiccSignature2: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a PrepareDownloadResponseOk
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareDownloadResponseOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareDownloadResponseOk`.
     * @returns {PrepareDownloadResponseOk}
     */
    public static _from_object (_o: { [_K in keyof (PrepareDownloadResponseOk)]: (PrepareDownloadResponseOk)[_K] }): PrepareDownloadResponseOk {
        return new PrepareDownloadResponseOk(_o.euiccSigned2, _o.euiccSignature2);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareDownloadResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareDownloadResponseOk: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccSigned2", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("euiccSignature2", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of PrepareDownloadResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareDownloadResponseOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareDownloadResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareDownloadResponseOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrepareDownloadResponseOk: $.ASN1Decoder<PrepareDownloadResponseOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareDownloadResponseOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareDownloadResponseOk (el: _Element): PrepareDownloadResponseOk {
    if (!_cached_decoder_for_PrepareDownloadResponseOk) { _cached_decoder_for_PrepareDownloadResponseOk = function (el: _Element): PrepareDownloadResponseOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PrepareDownloadResponseOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccSigned2";
    sequence[1].name = "euiccSignature2";
    let euiccSigned2!: EUICCSigned2;
    let euiccSignature2!: OCTET_STRING;
    euiccSigned2 = _decode_EUICCSigned2(sequence[0]);
    euiccSignature2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new PrepareDownloadResponseOk(
        euiccSigned2,
        euiccSignature2,

    );
}; }
    return _cached_decoder_for_PrepareDownloadResponseOk(el);
}

let _cached_encoder_for_PrepareDownloadResponseOk: $.ASN1Encoder<PrepareDownloadResponseOk> | null = null;

/**
 * @summary Encodes a(n) PrepareDownloadResponseOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareDownloadResponseOk, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareDownloadResponseOk (value: PrepareDownloadResponseOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareDownloadResponseOk) { _cached_encoder_for_PrepareDownloadResponseOk = function (value: PrepareDownloadResponseOk, elGetter: $.ASN1Encoder<PrepareDownloadResponseOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EUICCSigned2(value.euiccSigned2, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccSignature2, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrepareDownloadResponseOk(value, elGetter);
}


/* eslint-enable */
