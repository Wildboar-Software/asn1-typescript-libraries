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
import { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
// export { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
import { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";
// export { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";


/**
 * @summary PointUncertaintyCircle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PointUncertaintyCircle ::= SEQUENCE
 * {
 *     geographicalCoordinates             [1] GeographicalCoordinates,
 *     -- deprecatedUncertainty was deprecated in r18(18) version3(3)
 *     -- and shall be set to 0. The uncertaintySBI parameter shall be used instead.
 *     deprecatedUncertainty               [2] Uncertainty,
 *     uncertaintySBI                      [3] UncertaintySBI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PointUncertaintyCircle {
    constructor (
        /**
         * @summary `geographicalCoordinates`.
         * @public
         * @readonly
         */
        readonly geographicalCoordinates: GeographicalCoordinates,
        /**
         * @summary `deprecatedUncertainty`.
         * @public
         * @readonly
         */
        readonly deprecatedUncertainty: Uncertainty,
        /**
         * @summary `uncertaintySBI`.
         * @public
         * @readonly
         */
        readonly uncertaintySBI: OPTIONAL<UncertaintySBI>
    ) {}

    /**
     * @summary Restructures an object into a PointUncertaintyCircle
     * @description
     * 
     * This takes an `object` and converts it to a `PointUncertaintyCircle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointUncertaintyCircle`.
     * @returns {PointUncertaintyCircle}
     */
    public static _from_object (_o: { [_K in keyof (PointUncertaintyCircle)]: (PointUncertaintyCircle)[_K] }): PointUncertaintyCircle {
        return new PointUncertaintyCircle(_o.geographicalCoordinates, _o.deprecatedUncertainty, _o.uncertaintySBI);
    }


}

/**
 * @summary The Leading Root Component Types of PointUncertaintyCircle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PointUncertaintyCircle: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deprecatedUncertainty", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uncertaintySBI", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PointUncertaintyCircle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PointUncertaintyCircle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PointUncertaintyCircle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PointUncertaintyCircle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PointUncertaintyCircle: $.ASN1Decoder<PointUncertaintyCircle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PointUncertaintyCircle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PointUncertaintyCircle (el: _Element): PointUncertaintyCircle {
    if (!_cached_decoder_for_PointUncertaintyCircle) { _cached_decoder_for_PointUncertaintyCircle = function (el: _Element): PointUncertaintyCircle {
    let geographicalCoordinates!: GeographicalCoordinates;
    let deprecatedUncertainty!: Uncertainty;
    let uncertaintySBI: OPTIONAL<UncertaintySBI>;
    const callbacks: $.DecodingMap = {
        "geographicalCoordinates": (_el: _Element): void => { geographicalCoordinates = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(_el); },
        "deprecatedUncertainty": (_el: _Element): void => { deprecatedUncertainty = $._decode_implicit<Uncertainty>(() => _decode_Uncertainty)(_el); },
        "uncertaintySBI": (_el: _Element): void => { uncertaintySBI = $._decode_implicit<UncertaintySBI>(() => _decode_UncertaintySBI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PointUncertaintyCircle,
        _extension_additions_list_spec_for_PointUncertaintyCircle,
        _root_component_type_list_2_spec_for_PointUncertaintyCircle,
        undefined,
    );
    return new PointUncertaintyCircle(
        geographicalCoordinates,
        deprecatedUncertainty,
        uncertaintySBI
    );
}; }
    return _cached_decoder_for_PointUncertaintyCircle(el);
}

let _cached_encoder_for_PointUncertaintyCircle: $.ASN1Encoder<PointUncertaintyCircle> | null = null;

/**
 * @summary Encodes a(n) PointUncertaintyCircle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointUncertaintyCircle, encoded as an ASN.1 Element.
 */
export
function _encode_PointUncertaintyCircle (value: PointUncertaintyCircle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PointUncertaintyCircle) { _cached_encoder_for_PointUncertaintyCircle = function (value: PointUncertaintyCircle, elGetter: $.ASN1Encoder<PointUncertaintyCircle>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.geographicalCoordinates, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Uncertainty, $.BER)(value.deprecatedUncertainty, $.BER),
            /* IF_ABSENT  */ ((value.uncertaintySBI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_UncertaintySBI, $.BER)(value.uncertaintySBI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PointUncertaintyCircle(value, elGetter);
}


/* eslint-enable */
