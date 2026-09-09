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
import { AllCallSegments, _decode_AllCallSegments, _encode_AllCallSegments } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegments.ta.mjs";
// export { AllCallSegments, _decode_AllCallSegments, _encode_AllCallSegments } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegments.ta.mjs";


/**
 * @summary AllCallSegmentsWithExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllCallSegmentsWithExtension ::= SEQUENCE {
 *     allCallSegments        [0] AllCallSegments,
 *     extensions            [1] Extensions {bound} OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class AllCallSegmentsWithExtension {
    constructor (
        /**
         * @summary `allCallSegments`.
         * @public
         * @readonly
         */
        readonly allCallSegments: AllCallSegments,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a AllCallSegmentsWithExtension
     * @description
     * 
     * This takes an `object` and converts it to a `AllCallSegmentsWithExtension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllCallSegmentsWithExtension`.
     * @returns {AllCallSegmentsWithExtension}
     */
    public static _from_object (_o: { [_K in keyof (AllCallSegmentsWithExtension)]: (AllCallSegmentsWithExtension)[_K] }): AllCallSegmentsWithExtension {
        return new AllCallSegmentsWithExtension(_o.allCallSegments, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AllCallSegmentsWithExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AllCallSegmentsWithExtension: $.ComponentSpec[] = [
    /* FIXME: allCallSegments COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of AllCallSegmentsWithExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AllCallSegmentsWithExtension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AllCallSegmentsWithExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AllCallSegmentsWithExtension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AllCallSegmentsWithExtension: $.ASN1Decoder<AllCallSegmentsWithExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllCallSegmentsWithExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllCallSegmentsWithExtension (el: _Element): AllCallSegmentsWithExtension {
    if (!_cached_decoder_for_AllCallSegmentsWithExtension) { _cached_decoder_for_AllCallSegmentsWithExtension = function (el: _Element): AllCallSegmentsWithExtension {
    let allCallSegments!: AllCallSegments;
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "allCallSegments": (_el: _Element): void => { allCallSegments = $._decode_implicit<AllCallSegments>(() => _decode_AllCallSegments)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AllCallSegmentsWithExtension,
        _extension_additions_list_spec_for_AllCallSegmentsWithExtension,
        _root_component_type_list_2_spec_for_AllCallSegmentsWithExtension,
        undefined,
    );
    return new AllCallSegmentsWithExtension(
        allCallSegments,
        extensions
    );
}; }
    return _cached_decoder_for_AllCallSegmentsWithExtension(el);
}

let _cached_encoder_for_AllCallSegmentsWithExtension: $.ASN1Encoder<AllCallSegmentsWithExtension> | null = null;

/**
 * @summary Encodes a(n) AllCallSegmentsWithExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllCallSegmentsWithExtension, encoded as an ASN.1 Element.
 */
export
function _encode_AllCallSegmentsWithExtension (value: AllCallSegmentsWithExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllCallSegmentsWithExtension) { _cached_encoder_for_AllCallSegmentsWithExtension = function (value: AllCallSegmentsWithExtension, elGetter: $.ASN1Encoder<AllCallSegmentsWithExtension>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AllCallSegments, $.BER)(value.allCallSegments, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AllCallSegmentsWithExtension(value, elGetter);
}


/* eslint-enable */
