/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompactEuiccCancelSessionSigned, _decode_CompactEuiccCancelSessionSigned, _encode_CompactEuiccCancelSessionSigned } from "../SGP32Definitions/CompactEuiccCancelSessionSigned.ta.mjs";
// export { CompactEuiccCancelSessionSigned, _decode_CompactEuiccCancelSessionSigned, _encode_CompactEuiccCancelSessionSigned } from "../SGP32Definitions/CompactEuiccCancelSessionSigned.ta.mjs";


/**
 * @summary CompactCancelSessionResponseOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactCancelSessionResponseOk ::= SEQUENCE {
 *     compactEuiccCancelSessionSigned CompactEuiccCancelSessionSigned,  -- Compact version of euiccCancelSessionSigned
 *     euiccCancelSessionSignature [APPLICATION 55] OCTET STRING -- tag 5F37 signature on euiccCancelSessionSigned
 * }
 * ```
 * 
 * @class
 */
export
class CompactCancelSessionResponseOk {
    constructor (
        /**
         * @summary `compactEuiccCancelSessionSigned`.
         * @public
         * @readonly
         */
        readonly compactEuiccCancelSessionSigned: CompactEuiccCancelSessionSigned,
        /**
         * @summary `euiccCancelSessionSignature`.
         * @public
         * @readonly
         */
        readonly euiccCancelSessionSignature: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a CompactCancelSessionResponseOk
     * @description
     * 
     * This takes an `object` and converts it to a `CompactCancelSessionResponseOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactCancelSessionResponseOk`.
     * @returns {CompactCancelSessionResponseOk}
     */
    public static _from_object (_o: { [_K in keyof (CompactCancelSessionResponseOk)]: (CompactCancelSessionResponseOk)[_K] }): CompactCancelSessionResponseOk {
        return new CompactCancelSessionResponseOk(_o.compactEuiccCancelSessionSigned, _o.euiccCancelSessionSignature);
    }


}

/**
 * @summary The Leading Root Component Types of CompactCancelSessionResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactCancelSessionResponseOk: $.ComponentSpec[] = [
    new $.ComponentSpec("compactEuiccCancelSessionSigned", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("euiccCancelSessionSignature", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of CompactCancelSessionResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactCancelSessionResponseOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactCancelSessionResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactCancelSessionResponseOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactCancelSessionResponseOk: $.ASN1Decoder<CompactCancelSessionResponseOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactCancelSessionResponseOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactCancelSessionResponseOk (el: _Element): CompactCancelSessionResponseOk {
    if (!_cached_decoder_for_CompactCancelSessionResponseOk) { _cached_decoder_for_CompactCancelSessionResponseOk = function (el: _Element): CompactCancelSessionResponseOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CompactCancelSessionResponseOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "compactEuiccCancelSessionSigned";
    sequence[1].name = "euiccCancelSessionSignature";
    let compactEuiccCancelSessionSigned!: CompactEuiccCancelSessionSigned;
    let euiccCancelSessionSignature!: OCTET_STRING;
    compactEuiccCancelSessionSigned = _decode_CompactEuiccCancelSessionSigned(sequence[0]);
    euiccCancelSessionSignature = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CompactCancelSessionResponseOk(
        compactEuiccCancelSessionSigned,
        euiccCancelSessionSignature,

    );
}; }
    return _cached_decoder_for_CompactCancelSessionResponseOk(el);
}

let _cached_encoder_for_CompactCancelSessionResponseOk: $.ASN1Encoder<CompactCancelSessionResponseOk> | null = null;

/**
 * @summary Encodes a(n) CompactCancelSessionResponseOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactCancelSessionResponseOk, encoded as an ASN.1 Element.
 */
export
function _encode_CompactCancelSessionResponseOk (value: CompactCancelSessionResponseOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactCancelSessionResponseOk) { _cached_encoder_for_CompactCancelSessionResponseOk = function (value: CompactCancelSessionResponseOk, elGetter: $.ASN1Encoder<CompactCancelSessionResponseOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CompactEuiccCancelSessionSigned(value.compactEuiccCancelSessionSigned, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccCancelSessionSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactCancelSessionResponseOk(value, elGetter);
}


/* eslint-enable */
