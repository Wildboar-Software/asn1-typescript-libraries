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
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
import { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
// export { UncertaintyEllipse, _decode_UncertaintyEllipse, _encode_UncertaintyEllipse } from "../TS33128Payloads/UncertaintyEllipse.ta.mjs";
import { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";
// export { Confidence, _decode_Confidence, _encode_Confidence } from "../TS33128Payloads/Confidence.ta.mjs";


/**
 * @summary PointUncertaintyEllipse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PointUncertaintyEllipse ::= SEQUENCE
 * {
 *     geographicalCoordinates             [1] GeographicalCoordinates,
 *     uncertainty                         [2] UncertaintyEllipse,
 *     confidence                          [3] Confidence
 * }
 * ```
 * 
 * @class
 */
export
class PointUncertaintyEllipse {
    constructor (
        /**
         * @summary `geographicalCoordinates`.
         * @public
         * @readonly
         */
        readonly geographicalCoordinates: GeographicalCoordinates,
        /**
         * @summary `uncertainty`.
         * @public
         * @readonly
         */
        readonly uncertainty: UncertaintyEllipse,
        /**
         * @summary `confidence`.
         * @public
         * @readonly
         */
        readonly confidence: Confidence
    ) {}

    /**
     * @summary Restructures an object into a PointUncertaintyEllipse
     * @description
     * 
     * This takes an `object` and converts it to a `PointUncertaintyEllipse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointUncertaintyEllipse`.
     * @returns {PointUncertaintyEllipse}
     */
    public static _from_object (_o: { [_K in keyof (PointUncertaintyEllipse)]: (PointUncertaintyEllipse)[_K] }): PointUncertaintyEllipse {
        return new PointUncertaintyEllipse(_o.geographicalCoordinates, _o.uncertainty, _o.confidence);
    }


}

/**
 * @summary The Leading Root Component Types of PointUncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PointUncertaintyEllipse: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uncertainty", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("confidence", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PointUncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PointUncertaintyEllipse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PointUncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PointUncertaintyEllipse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PointUncertaintyEllipse: $.ASN1Decoder<PointUncertaintyEllipse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PointUncertaintyEllipse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PointUncertaintyEllipse (el: _Element): PointUncertaintyEllipse {
    if (!_cached_decoder_for_PointUncertaintyEllipse) { _cached_decoder_for_PointUncertaintyEllipse = function (el: _Element): PointUncertaintyEllipse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PointUncertaintyEllipse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "geographicalCoordinates";
    sequence[1].name = "uncertainty";
    sequence[2].name = "confidence";
    let geographicalCoordinates!: GeographicalCoordinates;
    let uncertainty!: UncertaintyEllipse;
    let confidence!: Confidence;
    geographicalCoordinates = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(sequence[0]);
    uncertainty = $._decode_implicit<UncertaintyEllipse>(() => _decode_UncertaintyEllipse)(sequence[1]);
    confidence = $._decode_implicit<Confidence>(() => _decode_Confidence)(sequence[2]);
    return new PointUncertaintyEllipse(
        geographicalCoordinates,
        uncertainty,
        confidence,

    );
}; }
    return _cached_decoder_for_PointUncertaintyEllipse(el);
}

let _cached_encoder_for_PointUncertaintyEllipse: $.ASN1Encoder<PointUncertaintyEllipse> | null = null;

/**
 * @summary Encodes a(n) PointUncertaintyEllipse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointUncertaintyEllipse, encoded as an ASN.1 Element.
 */
export
function _encode_PointUncertaintyEllipse (value: PointUncertaintyEllipse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PointUncertaintyEllipse) { _cached_encoder_for_PointUncertaintyEllipse = function (value: PointUncertaintyEllipse, elGetter: $.ASN1Encoder<PointUncertaintyEllipse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.geographicalCoordinates, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_UncertaintyEllipse, $.BER)(value.uncertainty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Confidence, $.BER)(value.confidence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PointUncertaintyEllipse(value, elGetter);
}


/* eslint-enable */
