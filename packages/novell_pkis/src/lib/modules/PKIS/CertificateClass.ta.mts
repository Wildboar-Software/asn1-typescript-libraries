/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertificateClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateClass ::= SEQUENCE {
 *  classValue       INTEGER (0..255),
 *   -- Defined class values are contained in Appendix C
 *  certificateValid       BOOLEAN
 *   -- The default should be true, but DEFAULT is OPTIONAL
 *   -- which would make the GLB computation awkward.
 *   -- See Section 5 and the footnote for a discussion.
 * }
 * ```
 * 
 * @class
 */
export
class CertificateClass {
    constructor (
        /**
         * @summary `classValue`.
         * @public
         * @readonly
         */
        readonly classValue: INTEGER,
        /**
         * @summary `certificateValid`.
         * @public
         * @readonly
         */
        readonly certificateValid: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a CertificateClass
     * @description
     * 
     * This takes an `object` and converts it to a `CertificateClass`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateClass`.
     * @returns {CertificateClass}
     */
    public static _from_object (_o: { [_K in keyof (CertificateClass)]: (CertificateClass)[_K] }): CertificateClass {
        return new CertificateClass(_o.classValue, _o.certificateValid);
    }


}

/**
 * @summary The Leading Root Component Types of CertificateClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateClass: $.ComponentSpec[] = [
    new $.ComponentSpec("classValue", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("certificateValid", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of CertificateClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateClass: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificateClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateClass: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificateClass: $.ASN1Decoder<CertificateClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateClass (el: _Element): CertificateClass {
    if (!_cached_decoder_for_CertificateClass) { _cached_decoder_for_CertificateClass = function (el: _Element): CertificateClass {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CertificateClass contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "classValue";
    sequence[1].name = "certificateValid";
    let classValue!: INTEGER;
    let certificateValid!: BOOLEAN;
    classValue = $._decodeInteger(sequence[0]);
    certificateValid = $._decodeBoolean(sequence[1]);
    return new CertificateClass(
        classValue,
        certificateValid,

    );
}; }
    return _cached_decoder_for_CertificateClass(el);
}

let _cached_encoder_for_CertificateClass: $.ASN1Encoder<CertificateClass> | null = null;

/**
 * @summary Encodes a(n) CertificateClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateClass, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateClass (value: CertificateClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateClass) { _cached_encoder_for_CertificateClass = function (value: CertificateClass, elGetter: $.ASN1Encoder<CertificateClass>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.classValue, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.certificateValid, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificateClass(value, elGetter);
}


/* eslint-enable */
