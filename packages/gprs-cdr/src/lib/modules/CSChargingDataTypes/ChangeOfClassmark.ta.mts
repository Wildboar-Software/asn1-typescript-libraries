/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeOfClassmark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfClassmark ::= SEQUENCE {
 *    classmark    [0] IMPLICIT OCTET STRING,
 *    changeTime   [1] IMPLICIT OCTET STRING ( SIZE( 9 ) )}
 * ```
 * 
 * @class
 */
export
class ChangeOfClassmark {
    /**
     * @summary `classmark`.
     * @public
     * @readonly
     */
    readonly classmark: OCTET_STRING;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;

    constructor (
        classmark: OCTET_STRING,
        changeTime: OCTET_STRING
    ) {
        this.classmark = classmark;
        this.changeTime = changeTime;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ChangeOfClassmark.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfClassmark
     * @description
     *
     * This takes an `object` and converts it to a `ChangeOfClassmark`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfClassmark`.
     * @returns {ChangeOfClassmark}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfClassmark)]: (ChangeOfClassmark)[_K] }): ChangeOfClassmark {
        return new ChangeOfClassmark(_o.classmark, _o.changeTime);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeOfClassmark
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfClassmark: $.ComponentSpec[] = [
    new $.ComponentSpec("classmark", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfClassmark
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfClassmark: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfClassmark
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfClassmark: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfClassmark: $.ASN1Decoder<ChangeOfClassmark> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfClassmark
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfClassmark (el: _Element): ChangeOfClassmark {
    if (!_cached_decoder_for_ChangeOfClassmark) { _cached_decoder_for_ChangeOfClassmark = function (el: _Element): ChangeOfClassmark {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChangeOfClassmark contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "classmark";
    sequence[1].name = "changeTime";
    const classmark: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const changeTime: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new ChangeOfClassmark(
        classmark,
        changeTime,

    );
}; }
    return _cached_decoder_for_ChangeOfClassmark(el);
}

let _cached_encoder_for_ChangeOfClassmark: $.ASN1Encoder<ChangeOfClassmark> | null = null;

/**
 * @summary Encodes a(n) ChangeOfClassmark into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfClassmark, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfClassmark (value: ChangeOfClassmark, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfClassmark) { _cached_encoder_for_ChangeOfClassmark = function (value: ChangeOfClassmark, _elGetter: $.ASN1Encoder<ChangeOfClassmark>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.classmark, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ChangeOfClassmark(value, elGetter);
}


/* eslint-enable */
