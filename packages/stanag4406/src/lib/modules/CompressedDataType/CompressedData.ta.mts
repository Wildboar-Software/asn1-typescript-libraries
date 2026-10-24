/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompressionAlgorithmIdentifier, _decode_CompressionAlgorithmIdentifier, _encode_CompressionAlgorithmIdentifier } from "../CompressedDataType/CompressionAlgorithmIdentifier.ta.mjs";
import { CompressedContentInfo, _decode_CompressedContentInfo, _encode_CompressedContentInfo } from "../CompressedDataType/CompressedContentInfo.ta.mjs";


/**
 * @summary CompressedData
 * @description
 * 
 * Tactical compression wrapper. It compresses a whole X.400 APDU, content and
 * envelope, not the message content alone, because the P1, P3, and P7 envelopes
 * are a large part of the size. Encode the APDU in BER, then compress. The
 * wrapper is applied at the tactical application sub-layer.
 *
 * This is the Annex E Compressed Data Type, identified by `id-mmhs-CDT`. It is
 * separate from the S/MIME compressed-data service in Annex B clause 7.11,
 * which points at the NATO S/MIME profile and RFC 3274. STANAG 4406 (Ed. 2),
 * Annex E, clause 4.2.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressedData ::= SEQUENCE {
 *     compressionAlgorithm    CompressionAlgorithmIdentifier,
 *     compressedContentInfo   CompressedContentInfo
 * }
 * ```
 * 
 * @class
 */
export
class CompressedData {
    /**
     * @summary `compressionAlgorithm`.
     * @description
     *
     * Dynamically mandatory. Prefer the integer form; 0 is ZLIB. STANAG 4406
     * (Ed. 2), Annex E, clause 4.2.6.1.
     * @public
     * @readonly
     */
    readonly compressionAlgorithm: CompressionAlgorithmIdentifier;
    /**
     * @summary `compressedContentInfo`.
     * @description
     *
     * Dynamically mandatory. The compressed APDU and the type of envelope that
     * was compressed. STANAG 4406 (Ed. 2), Annex E, clause 4.2.6.1.
     * @public
     * @readonly
     */
    readonly compressedContentInfo: CompressedContentInfo;

    constructor (
        compressionAlgorithm: CompressionAlgorithmIdentifier,
        compressedContentInfo: CompressedContentInfo
    ) {
        this.compressionAlgorithm = compressionAlgorithm;
        this.compressedContentInfo = compressedContentInfo;
    }

    /**
     * @summary Restructures an object into a CompressedData
     * @description
     * 
     * This takes an `object` and converts it to a `CompressedData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompressedData`.
     * @returns {CompressedData}
     */
    public static _from_object (_o: { [_K in keyof (CompressedData)]: (CompressedData)[_K] }): CompressedData {
        return new CompressedData(_o.compressionAlgorithm, _o.compressedContentInfo);
    }


}

/**
 * @summary The Leading Root Component Types of CompressedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompressedData: $.ComponentSpec[] = [
    new $.ComponentSpec("compressionAlgorithm", false, $.hasAnyTag),
    new $.ComponentSpec("compressedContentInfo", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CompressedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompressedData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompressedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompressedData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompressedData: $.ASN1Decoder<CompressedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressedData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressedData (el: _Element): CompressedData {
    if (!_cached_decoder_for_CompressedData) { _cached_decoder_for_CompressedData = function (el: _Element): CompressedData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CompressedData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "compressionAlgorithm";
    sequence[1].name = "compressedContentInfo";
    const compressionAlgorithm: CompressionAlgorithmIdentifier = _decode_CompressionAlgorithmIdentifier(sequence[0]);
    const compressedContentInfo: CompressedContentInfo = _decode_CompressedContentInfo(sequence[1]);
    return new CompressedData(
        compressionAlgorithm,
        compressedContentInfo,

    );
}; }
    return _cached_decoder_for_CompressedData(el);
}

let _cached_encoder_for_CompressedData: $.ASN1Encoder<CompressedData> | null = null;

/**
 * @summary Encodes a(n) CompressedData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressedData, encoded as an ASN.1 Element.
 */
export
function _encode_CompressedData (value: CompressedData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressedData) { _cached_encoder_for_CompressedData = function (value: CompressedData): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_CompressionAlgorithmIdentifier(value.compressionAlgorithm, $.BER),
        /* REQUIRED   */ _encode_CompressedContentInfo(value.compressedContentInfo, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CompressedData(value, elGetter);
}


/* eslint-enable */
