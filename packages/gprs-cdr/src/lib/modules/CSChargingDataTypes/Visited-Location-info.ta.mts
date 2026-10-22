/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Visited_Location_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Visited-Location-info ::= SEQUENCE {
 *    mscNumber   [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    vlrNumber   [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )}
 * ```
 * 
 * @class
 */
export
class Visited_Location_info {
    /**
     * @summary `mscNumber`.
     * @public
     * @readonly
     */
    readonly mscNumber: OCTET_STRING;
    /**
     * @summary `vlrNumber`.
     * @public
     * @readonly
     */
    readonly vlrNumber: OCTET_STRING;

    constructor (
        mscNumber: OCTET_STRING,
        vlrNumber: OCTET_STRING
    ) {
        this.mscNumber = mscNumber;
        this.vlrNumber = vlrNumber;
    
        if ((this.mscNumber.length < 1 || this.mscNumber.length > 9)) {
            throw new ASN1SizeError("Visited_Location_info.mscNumber violates SIZE constraint");
        }
        if ((this.vlrNumber.length < 1 || this.vlrNumber.length > 9)) {
            throw new ASN1SizeError("Visited_Location_info.vlrNumber violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a Visited_Location_info
     * @description
     * 
     * This takes an `object` and converts it to a `Visited_Location_info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Visited_Location_info`.
     * @returns {Visited_Location_info}
     */
    public static _from_object (_o: { [_K in keyof (Visited_Location_info)]: (Visited_Location_info)[_K] }): Visited_Location_info {
        return new Visited_Location_info(_o.mscNumber, _o.vlrNumber);
    }


}

/**
 * @summary The Leading Root Component Types of Visited_Location_info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Visited_Location_info: $.ComponentSpec[] = [
    new $.ComponentSpec("mscNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("vlrNumber", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Visited_Location_info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Visited_Location_info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Visited_Location_info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Visited_Location_info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Visited_Location_info: $.ASN1Decoder<Visited_Location_info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Visited_Location_info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Visited_Location_info (el: _Element): Visited_Location_info {
    if (!_cached_decoder_for_Visited_Location_info) { _cached_decoder_for_Visited_Location_info = function (el: _Element): Visited_Location_info {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Visited-Location-info contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mscNumber";
    sequence[1].name = "vlrNumber";
    const mscNumber: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const vlrNumber: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new Visited_Location_info(
        mscNumber,
        vlrNumber,

    );
}; }
    return _cached_decoder_for_Visited_Location_info(el);
}

let _cached_encoder_for_Visited_Location_info: $.ASN1Encoder<Visited_Location_info> | null = null;

/**
 * @summary Encodes a(n) Visited_Location_info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Visited_Location_info, encoded as an ASN.1 Element.
 */
export
function _encode_Visited_Location_info (value: Visited_Location_info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Visited_Location_info) { _cached_encoder_for_Visited_Location_info = function (value: Visited_Location_info, _elGetter: $.ASN1Encoder<Visited_Location_info>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.mscNumber, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.vlrNumber, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Visited_Location_info(value, elGetter);
}


/* eslint-enable */
