/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnhancedDiagnostics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnhancedDiagnostics ::= SEQUENCE {
 *    rANNASCause   [0] IMPLICIT SEQUENCE  OF
 *       OCTET STRING}
 * ```
 * 
 * @class
 */
export
class EnhancedDiagnostics {
    /**
     * @summary `rANNASCause`.
     * @public
     * @readonly
     */
    readonly rANNASCause: OCTET_STRING[];

    constructor (
        rANNASCause: OCTET_STRING[]
    ) {
        this.rANNASCause = rANNASCause;
    }

    /**
     * @summary Restructures an object into a EnhancedDiagnostics
     * @description
     * 
     * This takes an `object` and converts it to a `EnhancedDiagnostics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnhancedDiagnostics`.
     * @returns {EnhancedDiagnostics}
     */
    public static _from_object (_o: { [_K in keyof (EnhancedDiagnostics)]: (EnhancedDiagnostics)[_K] }): EnhancedDiagnostics {
        return new EnhancedDiagnostics(_o.rANNASCause);
    }


}

/**
 * @summary The Leading Root Component Types of EnhancedDiagnostics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnhancedDiagnostics: $.ComponentSpec[] = [
    new $.ComponentSpec("rANNASCause", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EnhancedDiagnostics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnhancedDiagnostics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnhancedDiagnostics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnhancedDiagnostics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnhancedDiagnostics: $.ASN1Decoder<EnhancedDiagnostics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedDiagnostics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnhancedDiagnostics (el: _Element): EnhancedDiagnostics {
    if (!_cached_decoder_for_EnhancedDiagnostics) { _cached_decoder_for_EnhancedDiagnostics = function (el: _Element): EnhancedDiagnostics {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EnhancedDiagnostics contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rANNASCause";
    let rANNASCause!: OCTET_STRING[];
    rANNASCause = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(sequence[0]);
    return new EnhancedDiagnostics(
        rANNASCause,

    );
}; }
    return _cached_decoder_for_EnhancedDiagnostics(el);
}

let _cached_encoder_for_EnhancedDiagnostics: $.ASN1Encoder<EnhancedDiagnostics> | null = null;

/**
 * @summary Encodes a(n) EnhancedDiagnostics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedDiagnostics, encoded as an ASN.1 Element.
 */
export
function _encode_EnhancedDiagnostics (value: EnhancedDiagnostics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnhancedDiagnostics) { _cached_encoder_for_EnhancedDiagnostics = function (value: EnhancedDiagnostics, elGetter: $.ASN1Encoder<EnhancedDiagnostics>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.rANNASCause, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_EnhancedDiagnostics(value, elGetter);
}


/* eslint-enable */
