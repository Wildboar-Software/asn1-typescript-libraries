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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary SIGNED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIGNED{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned              ToBeSigned,
 *   algorithmIdentifier     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   signature               BIT STRING,
 *   ...,
 * [[4:
 *   altAlgorithmIdentifier  AlgorithmIdentifier{{SupportedAltAlgorithms}} OPTIONAL,
 *   altSignature            BIT STRING OPTIONAL]]
 *   } (WITH COMPONENTS {..., altAlgorithmIdentifier PRESENT, altSignature PRESENT } |
 *      WITH COMPONENTS {..., altAlgorithmIdentifier ABSENT,  altSignature ABSENT } )
 * ```
 * 
 * @class
 */
export
class SIGNED<ToBeSigned> {
    constructor (
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SIGNED
     * @description
     * 
     * This takes an `object` and converts it to a `SIGNED`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNED`.
     * @returns {SIGNED}
     */
    public static _from_object (_o: { [_K in keyof (SIGNED<any>)]: (SIGNED<any>)[_K] }): SIGNED<any> {
        return new SIGNED(_o.toBeSigned, _o.algorithmIdentifier, _o.signature, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("algorithmIdentifier", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIGNED: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIGNED: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIGNED: $.ASN1Decoder<SIGNED<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SIGNED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_SIGNED<ToBeSigned>(_decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>): $.ASN1Decoder<SIGNED<ToBeSigned>> {
    return function (el: _Element): SIGNED<ToBeSigned> {
    let toBeSigned!: ToBeSigned;
    let algorithmIdentifier!: AlgorithmIdentifier;
    let signature!: BIT_STRING;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "toBeSigned": (_el: _Element): void => { toBeSigned = _decode_ToBeSigned(_el); },
        "algorithmIdentifier": (_el: _Element): void => { algorithmIdentifier = _decode_AlgorithmIdentifier(_el); },
        "signature": (_el: _Element): void => { signature = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SIGNED(
        toBeSigned,
        algorithmIdentifier,
        signature,
        _unrecognizedExtensionsList
    );
};
}

let _cached_encoder_for_SIGNED: $.ASN1Encoder<SIGNED<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will encode a(n) SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNED as an ASN.1 element.
 */
export
function _get_encoder_for_SIGNED<ToBeSigned>(_encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>): $.ASN1Encoder<SIGNED<ToBeSigned>> {
    return function (value: SIGNED<ToBeSigned>, elGetter: $.ASN1Encoder<SIGNED<ToBeSigned>>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ToBeSigned(value.toBeSigned, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithmIdentifier, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.signature, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
};
}

/* eslint-enable */
