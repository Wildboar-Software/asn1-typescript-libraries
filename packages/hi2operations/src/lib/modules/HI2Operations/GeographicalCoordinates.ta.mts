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
import { GeographicalCoordinates_latitudeSign, _enum_for_GeographicalCoordinates_latitudeSign, GeographicalCoordinates_latitudeSign_north /* IMPORTED_LONG_ENUMERATION_ITEM */, north /* IMPORTED_SHORT_ENUMERATION_ITEM */, GeographicalCoordinates_latitudeSign_south /* IMPORTED_LONG_ENUMERATION_ITEM */, south /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GeographicalCoordinates_latitudeSign, _encode_GeographicalCoordinates_latitudeSign } from "../HI2Operations/GeographicalCoordinates-latitudeSign.ta.mjs";
// export { GeographicalCoordinates_latitudeSign, _enum_for_GeographicalCoordinates_latitudeSign, GeographicalCoordinates_latitudeSign_north /* IMPORTED_LONG_ENUMERATION_ITEM */, north /* IMPORTED_SHORT_ENUMERATION_ITEM */, GeographicalCoordinates_latitudeSign_south /* IMPORTED_LONG_ENUMERATION_ITEM */, south /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GeographicalCoordinates_latitudeSign, _encode_GeographicalCoordinates_latitudeSign } from "../HI2Operations/GeographicalCoordinates-latitudeSign.ta.mjs";


/**
 * @summary GeographicalCoordinates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalCoordinates ::= SEQUENCE
 * {
 *     latitudeSign    ENUMERATED
 *     {
 *         north,
 *         south
 *     },
 *     latitude        INTEGER (0..8388607),
 *     longitude        INTEGER (-8388608..8388607),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GeographicalCoordinates {
    constructor (
        /**
         * @summary `latitudeSign`.
         * @public
         * @readonly
         */
        readonly latitudeSign: GeographicalCoordinates_latitudeSign,
        /**
         * @summary `latitude`.
         * @public
         * @readonly
         */
        readonly latitude: INTEGER,
        /**
         * @summary `longitude`.
         * @public
         * @readonly
         */
        readonly longitude: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
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
        return new GeographicalCoordinates(_o.latitudeSign, _o.latitude, _o.longitude, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `latitudeSign`
         * @public
         * @static
         */

    public static _enum_for_latitudeSign = _enum_for_GeographicalCoordinates_latitudeSign;
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
    new $.ComponentSpec("latitudeSign", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("latitude", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("longitude", false, $.hasTag(_TagClass.universal, 2))
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
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GeographicalCoordinates contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "latitudeSign";
    sequence[1].name = "latitude";
    sequence[2].name = "longitude";
    let latitudeSign!: GeographicalCoordinates_latitudeSign;
    let latitude!: INTEGER;
    let longitude!: INTEGER;
    latitudeSign = _decode_GeographicalCoordinates_latitudeSign(sequence[0]);
    latitude = $._decodeInteger(sequence[1]);
    longitude = $._decodeInteger(sequence[2]);
    return new GeographicalCoordinates(
        latitudeSign,
        latitude,
        longitude,
        sequence.slice(3),
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
            /* REQUIRED   */ _encode_GeographicalCoordinates_latitudeSign(value.latitudeSign, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.latitude, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.longitude, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GeographicalCoordinates(value, elGetter);
}


/* eslint-enable */
