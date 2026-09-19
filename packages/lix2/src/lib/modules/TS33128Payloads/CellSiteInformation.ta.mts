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


/**
 * @summary CellSiteInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellSiteInformation ::= SEQUENCE
 * {
 *     geographicalCoordinates     [1] GeographicalCoordinates,
 *     azimuth                     [2] INTEGER (0..359) OPTIONAL,
 *     operatorSpecificInformation [3] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CellSiteInformation {
    constructor (
        /**
         * @summary `geographicalCoordinates`.
         * @public
         * @readonly
         */
        readonly geographicalCoordinates: GeographicalCoordinates,
        /**
         * @summary `azimuth`.
         * @public
         * @readonly
         */
        readonly azimuth: OPTIONAL<INTEGER>,
        /**
         * @summary `operatorSpecificInformation`.
         * @public
         * @readonly
         */
        readonly operatorSpecificInformation: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a CellSiteInformation
     * @description
     * 
     * This takes an `object` and converts it to a `CellSiteInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CellSiteInformation`.
     * @returns {CellSiteInformation}
     */
    public static _from_object (_o: { [_K in keyof (CellSiteInformation)]: (CellSiteInformation)[_K] }): CellSiteInformation {
        return new CellSiteInformation(_o.geographicalCoordinates, _o.azimuth, _o.operatorSpecificInformation);
    }


}

/**
 * @summary The Leading Root Component Types of CellSiteInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CellSiteInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("azimuth", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("operatorSpecificInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CellSiteInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CellSiteInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CellSiteInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CellSiteInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CellSiteInformation: $.ASN1Decoder<CellSiteInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellSiteInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellSiteInformation (el: _Element): CellSiteInformation {
    if (!_cached_decoder_for_CellSiteInformation) { _cached_decoder_for_CellSiteInformation = function (el: _Element): CellSiteInformation {
    let geographicalCoordinates!: GeographicalCoordinates;
    let azimuth: OPTIONAL<INTEGER>;
    let operatorSpecificInformation: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "geographicalCoordinates": (_el: _Element): void => { geographicalCoordinates = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(_el); },
        "azimuth": (_el: _Element): void => { azimuth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "operatorSpecificInformation": (_el: _Element): void => { operatorSpecificInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CellSiteInformation,
        _extension_additions_list_spec_for_CellSiteInformation,
        _root_component_type_list_2_spec_for_CellSiteInformation,
        undefined,
    );
    return new CellSiteInformation(
        geographicalCoordinates,
        azimuth,
        operatorSpecificInformation
    );
}; }
    return _cached_decoder_for_CellSiteInformation(el);
}

let _cached_encoder_for_CellSiteInformation: $.ASN1Encoder<CellSiteInformation> | null = null;

/**
 * @summary Encodes a(n) CellSiteInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellSiteInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CellSiteInformation (value: CellSiteInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellSiteInformation) { _cached_encoder_for_CellSiteInformation = function (value: CellSiteInformation, elGetter: $.ASN1Encoder<CellSiteInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.geographicalCoordinates, $.BER),
            /* IF_ABSENT  */ ((value.azimuth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.azimuth, $.BER)),
            /* IF_ABSENT  */ ((value.operatorSpecificInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.operatorSpecificInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CellSiteInformation(value, elGetter);
}


/* eslint-enable */
