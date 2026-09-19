/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CertificateAssertion, _decode_CertificateAssertion, _encode_CertificateAssertion } from "../CertificateExtensions/CertificateAssertion.ta.mjs";
// export { CertificateAssertion, _decode_CertificateAssertion, _encode_CertificateAssertion } from "../CertificateExtensions/CertificateAssertion.ta.mjs";


/**
 * @summary CertificatePairAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificatePairAssertion ::= SEQUENCE {
 *   issuedToThisCAAssertion  [0]  CertificateAssertion OPTIONAL,
 *   issuedByThisCAAssertion  [1]  CertificateAssertion OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., issuedToThisCAAssertion  PRESENT } |
 *    WITH COMPONENTS {..., issuedByThisCAAssertion  PRESENT } )
 * ```
 * 
 * @class
 */
export
class CertificatePairAssertion {
    constructor (
        /**
         * @summary `issuedToThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedToThisCAAssertion: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `issuedByThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedByThisCAAssertion: OPTIONAL<CertificateAssertion>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificatePairAssertion
     * @description
     * 
     * This takes an `object` and converts it to a `CertificatePairAssertion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificatePairAssertion`.
     * @returns {CertificatePairAssertion}
     */
    public static _from_object (_o: { [_K in keyof (CertificatePairAssertion)]: (CertificatePairAssertion)[_K] }): CertificatePairAssertion {
        return new CertificatePairAssertion(_o.issuedToThisCAAssertion, _o.issuedByThisCAAssertion, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CertificatePairAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificatePairAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("issuedToThisCAAssertion", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("issuedByThisCAAssertion", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CertificatePairAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificatePairAssertion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificatePairAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificatePairAssertion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificatePairAssertion: $.ASN1Decoder<CertificatePairAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePairAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificatePairAssertion (el: _Element): CertificatePairAssertion {
    if (!_cached_decoder_for_CertificatePairAssertion) { _cached_decoder_for_CertificatePairAssertion = function (el: _Element): CertificatePairAssertion {
    let issuedToThisCAAssertion: OPTIONAL<CertificateAssertion>;
    let issuedByThisCAAssertion: OPTIONAL<CertificateAssertion>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "issuedToThisCAAssertion": (_el: _Element): void => { issuedToThisCAAssertion = $._decode_implicit<CertificateAssertion>(() => _decode_CertificateAssertion)(_el); },
        "issuedByThisCAAssertion": (_el: _Element): void => { issuedByThisCAAssertion = $._decode_implicit<CertificateAssertion>(() => _decode_CertificateAssertion)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificatePairAssertion,
        _extension_additions_list_spec_for_CertificatePairAssertion,
        _root_component_type_list_2_spec_for_CertificatePairAssertion,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertificatePairAssertion(
        issuedToThisCAAssertion,
        issuedByThisCAAssertion,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CertificatePairAssertion(el);
}

let _cached_encoder_for_CertificatePairAssertion: $.ASN1Encoder<CertificatePairAssertion> | null = null;

/**
 * @summary Encodes a(n) CertificatePairAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePairAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_CertificatePairAssertion (value: CertificatePairAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificatePairAssertion) { _cached_encoder_for_CertificatePairAssertion = function (value: CertificatePairAssertion, elGetter: $.ASN1Encoder<CertificatePairAssertion>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.issuedToThisCAAssertion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CertificateAssertion, $.BER)(value.issuedToThisCAAssertion, $.BER)),
            /* IF_ABSENT  */ ((value.issuedByThisCAAssertion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CertificateAssertion, $.BER)(value.issuedByThisCAAssertion, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificatePairAssertion(value, elGetter);
}


/* eslint-enable */
