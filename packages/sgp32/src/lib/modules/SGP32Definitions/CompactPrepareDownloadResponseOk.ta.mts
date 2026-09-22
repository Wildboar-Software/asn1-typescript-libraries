/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompactEuiccSigned2, _decode_CompactEuiccSigned2, _encode_CompactEuiccSigned2 } from "../SGP32Definitions/CompactEuiccSigned2.ta.mjs";
// export { CompactEuiccSigned2, _decode_CompactEuiccSigned2, _encode_CompactEuiccSigned2 } from "../SGP32Definitions/CompactEuiccSigned2.ta.mjs";


/**
 * @summary CompactPrepareDownloadResponseOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactPrepareDownloadResponseOk ::= SEQUENCE {
 *     compactEuiccSigned2 CompactEuiccSigned2, -- Compact version of EuiccSigned2
 *     euiccSignature2 [APPLICATION 55] OCTET STRING -- tag '5F37' signature on EuiccSigned2
 * }
 * ```
 * 
 * @class
 */
export
class CompactPrepareDownloadResponseOk {
    constructor (
        /**
         * @summary `compactEuiccSigned2`.
         * @public
         * @readonly
         */
        readonly compactEuiccSigned2: CompactEuiccSigned2,
        /**
         * @summary `euiccSignature2`.
         * @public
         * @readonly
         */
        readonly euiccSignature2: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a CompactPrepareDownloadResponseOk
     * @description
     * 
     * This takes an `object` and converts it to a `CompactPrepareDownloadResponseOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactPrepareDownloadResponseOk`.
     * @returns {CompactPrepareDownloadResponseOk}
     */
    public static _from_object (_o: { [_K in keyof (CompactPrepareDownloadResponseOk)]: (CompactPrepareDownloadResponseOk)[_K] }): CompactPrepareDownloadResponseOk {
        return new CompactPrepareDownloadResponseOk(_o.compactEuiccSigned2, _o.euiccSignature2);
    }


}

/**
 * @summary The Leading Root Component Types of CompactPrepareDownloadResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactPrepareDownloadResponseOk: $.ComponentSpec[] = [
    new $.ComponentSpec("compactEuiccSigned2", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("euiccSignature2", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of CompactPrepareDownloadResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactPrepareDownloadResponseOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactPrepareDownloadResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactPrepareDownloadResponseOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactPrepareDownloadResponseOk: $.ASN1Decoder<CompactPrepareDownloadResponseOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactPrepareDownloadResponseOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactPrepareDownloadResponseOk (el: _Element): CompactPrepareDownloadResponseOk {
    if (!_cached_decoder_for_CompactPrepareDownloadResponseOk) { _cached_decoder_for_CompactPrepareDownloadResponseOk = function (el: _Element): CompactPrepareDownloadResponseOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CompactPrepareDownloadResponseOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "compactEuiccSigned2";
    sequence[1].name = "euiccSignature2";
    let compactEuiccSigned2!: CompactEuiccSigned2;
    let euiccSignature2!: OCTET_STRING;
    compactEuiccSigned2 = _decode_CompactEuiccSigned2(sequence[0]);
    euiccSignature2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CompactPrepareDownloadResponseOk(
        compactEuiccSigned2,
        euiccSignature2,

    );
}; }
    return _cached_decoder_for_CompactPrepareDownloadResponseOk(el);
}

let _cached_encoder_for_CompactPrepareDownloadResponseOk: $.ASN1Encoder<CompactPrepareDownloadResponseOk> | null = null;

/**
 * @summary Encodes a(n) CompactPrepareDownloadResponseOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactPrepareDownloadResponseOk, encoded as an ASN.1 Element.
 */
export
function _encode_CompactPrepareDownloadResponseOk (value: CompactPrepareDownloadResponseOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactPrepareDownloadResponseOk) { _cached_encoder_for_CompactPrepareDownloadResponseOk = function (value: CompactPrepareDownloadResponseOk, elGetter: $.ASN1Encoder<CompactPrepareDownloadResponseOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CompactEuiccSigned2(value.compactEuiccSigned2, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccSignature2, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactPrepareDownloadResponseOk(value, elGetter);
}


/* eslint-enable */
