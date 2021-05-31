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
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta";


/* START_OF_SYMBOL_DEFINITION URIReference */
/**
 * @summary URIReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URIReference ::= SEQUENCE {
 *     uniformResourceIdentifier   IA5String (SIZE (1..urimax)),
 *     hashAlgorithm               AlgorithmIdentifier OPTIONAL,
 *     hashValue                   BIT STRING OPTIONAL }
 * ```
 *
 * @class
 */
export
class URIReference {
    constructor (
        /**
         * @summary `uniformResourceIdentifier`.
         * @public
         * @readonly
         */
        readonly uniformResourceIdentifier: IA5String,
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a URIReference
     * @description
     *
     * This takes an `object` and converts it to a `URIReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `URIReference`.
     * @returns {URIReference}
     */
    public static _from_object (_o: { [_K in keyof (URIReference)]: (URIReference)[_K] }): URIReference {
        return new URIReference(_o.uniformResourceIdentifier, _o.hashAlgorithm, _o.hashValue);
    }


}
/* END_OF_SYMBOL_DEFINITION URIReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_URIReference */
/**
 * @summary The Leading Root Component Types of URIReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_URIReference: $.ComponentSpec[] = [
    new $.ComponentSpec("uniformResourceIdentifier", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("hashAlgorithm", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("hashValue", true, $.hasTag(_TagClass.universal, 3), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_URIReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_URIReference */
/**
 * @summary The Trailing Root Component Types of URIReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_URIReference: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_URIReference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_URIReference */
/**
 * @summary The Extension Addition Component Types of URIReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_URIReference: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_URIReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_URIReference */
let _cached_decoder_for_URIReference: $.ASN1Decoder<URIReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_URIReference */

/* START_OF_SYMBOL_DEFINITION _decode_URIReference */
/**
 * @summary Decodes an ASN.1 element into a(n) URIReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URIReference} The decoded data structure.
 */
export
function _decode_URIReference (el: _Element) {
    if (!_cached_decoder_for_URIReference) { _cached_decoder_for_URIReference = function (el: _Element): URIReference {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let uniformResourceIdentifier!: IA5String;
    let hashAlgorithm: OPTIONAL<AlgorithmIdentifier>;
    let hashValue: OPTIONAL<BIT_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "uniformResourceIdentifier": (_el: _Element): void => { uniformResourceIdentifier = $._decodeIA5String(_el); },
        "hashAlgorithm": (_el: _Element): void => { hashAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "hashValue": (_el: _Element): void => { hashValue = $._decodeBitString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_URIReference,
        _extension_additions_list_spec_for_URIReference,
        _root_component_type_list_2_spec_for_URIReference,
        undefined,
    );
    return new URIReference( /* SEQUENCE_CONSTRUCTOR_CALL */
        uniformResourceIdentifier,
        hashAlgorithm,
        hashValue
    );
}; }
    return _cached_decoder_for_URIReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_URIReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_URIReference */
let _cached_encoder_for_URIReference: $.ASN1Encoder<URIReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_URIReference */

/* START_OF_SYMBOL_DEFINITION _encode_URIReference */
/**
 * @summary Encodes a(n) URIReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URIReference, encoded as an ASN.1 Element.
 */
export
function _encode_URIReference (value: URIReference, elGetter: $.ASN1Encoder<URIReference>) {
    if (!_cached_encoder_for_URIReference) { _cached_encoder_for_URIReference = function (value: URIReference, elGetter: $.ASN1Encoder<URIReference>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.uniformResourceIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.hashAlgorithm === undefined) ? undefined : _encode_AlgorithmIdentifier(value.hashAlgorithm, $.BER)),
            /* IF_ABSENT  */ ((value.hashValue === undefined) ? undefined : $._encodeBitString(value.hashValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_URIReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_URIReference */

/* eslint-enable */
