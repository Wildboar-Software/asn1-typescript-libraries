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
import { OGCURN, _decode_OGCURN, _encode_OGCURN } from "../TS33128Payloads/OGCURN.ta.mjs";
// export { OGCURN, _decode_OGCURN, _encode_OGCURN } from "../TS33128Payloads/OGCURN.ta.mjs";


/**
 * @summary GeographicalCoordinates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates ::= SEQUENCE
 * {
 *     latitude                            [1] UTF8String,
 *     longitude                           [2] UTF8String,
 *     mapDatumInformation                 [3] OGCURN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GeographicalCoordinates {
    constructor (
        /**
         * @summary `latitude`.
         * @public
         * @readonly
         */
        readonly latitude: UTF8String,
        /**
         * @summary `longitude`.
         * @public
         * @readonly
         */
        readonly longitude: UTF8String,
        /**
         * @summary `mapDatumInformation`.
         * @public
         * @readonly
         */
        readonly mapDatumInformation: OPTIONAL<OGCURN>
    ) {}

    /**
     * @summary Restructures an object into a GeographicalCoordinates
     * @description
     * 
     * This takes an `object` and converts it to a `GeographicalCoordinates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeographicalCoordinates`.
     * @returns {GeographicalCoordinates}
     */
    public static _from_object (_o: { [_K in keyof (GeographicalCoordinates)]: (GeographicalCoordinates)[_K] }): GeographicalCoordinates {
        return new GeographicalCoordinates(_o.latitude, _o.longitude, _o.mapDatumInformation);
    }


}

/**
 * @summary The Leading Root Component Types of GeographicalCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GeographicalCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("latitude", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("longitude", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mapDatumInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GeographicalCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GeographicalCoordinates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GeographicalCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GeographicalCoordinates: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GeographicalCoordinates: $.ASN1Decoder<GeographicalCoordinates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicalCoordinates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeographicalCoordinates (el: _Element): GeographicalCoordinates {
    if (!_cached_decoder_for_GeographicalCoordinates) { _cached_decoder_for_GeographicalCoordinates = function (el: _Element): GeographicalCoordinates {
    let latitude!: UTF8String;
    let longitude!: UTF8String;
    let mapDatumInformation: OPTIONAL<OGCURN>;
    const callbacks: $.DecodingMap = {
        "latitude": (_el: _Element): void => { latitude = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "longitude": (_el: _Element): void => { longitude = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mapDatumInformation": (_el: _Element): void => { mapDatumInformation = $._decode_implicit<OGCURN>(() => _decode_OGCURN)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GeographicalCoordinates,
        _extension_additions_list_spec_for_GeographicalCoordinates,
        _root_component_type_list_2_spec_for_GeographicalCoordinates,
        undefined,
    );
    return new GeographicalCoordinates(
        latitude,
        longitude,
        mapDatumInformation
    );
}; }
    return _cached_decoder_for_GeographicalCoordinates(el);
}

let _cached_encoder_for_GeographicalCoordinates: $.ASN1Encoder<GeographicalCoordinates> | null = null;

/**
 * @summary Encodes a(n) GeographicalCoordinates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicalCoordinates, encoded as an ASN.1 Element.
 */
export
function _encode_GeographicalCoordinates (value: GeographicalCoordinates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeographicalCoordinates) { _cached_encoder_for_GeographicalCoordinates = function (value: GeographicalCoordinates, elGetter: $.ASN1Encoder<GeographicalCoordinates>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.latitude, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.longitude, $.BER),
            /* IF_ABSENT  */ ((value.mapDatumInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_OGCURN, $.BER)(value.mapDatumInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GeographicalCoordinates(value, elGetter);
}


/* eslint-enable */
