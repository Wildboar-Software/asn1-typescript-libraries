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
import { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
// export { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";


/**
 * @summary PointAltitude
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PointAltitude ::= SEQUENCE
 * {
 *     point                               [1] GeographicalCoordinates,
 *     altitude                            [2] Altitude
 * }
 * ```
 * 
 * @class
 */
export
class PointAltitude {
    constructor (
        /**
         * @summary `point`.
         * @public
         * @readonly
         */
        readonly point: GeographicalCoordinates,
        /**
         * @summary `altitude`.
         * @public
         * @readonly
         */
        readonly altitude: Altitude
    ) {}

    /**
     * @summary Restructures an object into a PointAltitude
     * @description
     * 
     * This takes an `object` and converts it to a `PointAltitude`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointAltitude`.
     * @returns {PointAltitude}
     */
    public static _from_object (_o: { [_K in keyof (PointAltitude)]: (PointAltitude)[_K] }): PointAltitude {
        return new PointAltitude(_o.point, _o.altitude);
    }


}

/**
 * @summary The Leading Root Component Types of PointAltitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PointAltitude: $.ComponentSpec[] = [
    new $.ComponentSpec("point", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("altitude", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PointAltitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PointAltitude: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PointAltitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PointAltitude: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PointAltitude: $.ASN1Decoder<PointAltitude> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PointAltitude
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PointAltitude (el: _Element): PointAltitude {
    if (!_cached_decoder_for_PointAltitude) { _cached_decoder_for_PointAltitude = function (el: _Element): PointAltitude {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PointAltitude contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "point";
    sequence[1].name = "altitude";
    let point!: GeographicalCoordinates;
    let altitude!: Altitude;
    point = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(sequence[0]);
    altitude = $._decode_implicit<Altitude>(() => _decode_Altitude)(sequence[1]);
    return new PointAltitude(
        point,
        altitude,

    );
}; }
    return _cached_decoder_for_PointAltitude(el);
}

let _cached_encoder_for_PointAltitude: $.ASN1Encoder<PointAltitude> | null = null;

/**
 * @summary Encodes a(n) PointAltitude into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointAltitude, encoded as an ASN.1 Element.
 */
export
function _encode_PointAltitude (value: PointAltitude, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PointAltitude) { _cached_encoder_for_PointAltitude = function (value: PointAltitude, elGetter: $.ASN1Encoder<PointAltitude>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.point, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Altitude, $.BER)(value.altitude, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PointAltitude(value, elGetter);
}


/* eslint-enable */
