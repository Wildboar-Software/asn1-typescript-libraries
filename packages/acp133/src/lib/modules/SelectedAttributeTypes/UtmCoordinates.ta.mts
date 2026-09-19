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



/**
 * @summary UtmCoordinates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtmCoordinates ::= SEQUENCE {
 *   zone      PrintableString,
 *   easting   NumericString,
 *   northing  NumericString }
 * ```
 * 
 * @class
 */
export
class UtmCoordinates {
    constructor (
        /**
         * @summary `zone`.
         * @public
         * @readonly
         */
        readonly zone: PrintableString,
        /**
         * @summary `easting`.
         * @public
         * @readonly
         */
        readonly easting: NumericString,
        /**
         * @summary `northing`.
         * @public
         * @readonly
         */
        readonly northing: NumericString
    ) {}

    /**
     * @summary Restructures an object into a UtmCoordinates
     * @description
     * 
     * This takes an `object` and converts it to a `UtmCoordinates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UtmCoordinates`.
     * @returns {UtmCoordinates}
     */
    public static _from_object (_o: { [_K in keyof (UtmCoordinates)]: (UtmCoordinates)[_K] }): UtmCoordinates {
        return new UtmCoordinates(_o.zone, _o.easting, _o.northing);
    }


}

/**
 * @summary The Leading Root Component Types of UtmCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UtmCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("zone", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("easting", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("northing", false, $.hasTag(_TagClass.universal, 18))
];

/**
 * @summary The Trailing Root Component Types of UtmCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UtmCoordinates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UtmCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UtmCoordinates: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UtmCoordinates: $.ASN1Decoder<UtmCoordinates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UtmCoordinates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UtmCoordinates (el: _Element): UtmCoordinates {
    if (!_cached_decoder_for_UtmCoordinates) { _cached_decoder_for_UtmCoordinates = function (el: _Element): UtmCoordinates {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("UtmCoordinates contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "zone";
    sequence[1].name = "easting";
    sequence[2].name = "northing";
    let zone!: PrintableString;
    let easting!: NumericString;
    let northing!: NumericString;
    zone = $._decodePrintableString(sequence[0]);
    easting = $._decodeNumericString(sequence[1]);
    northing = $._decodeNumericString(sequence[2]);
    return new UtmCoordinates(
        zone,
        easting,
        northing,

    );
}; }
    return _cached_decoder_for_UtmCoordinates(el);
}

let _cached_encoder_for_UtmCoordinates: $.ASN1Encoder<UtmCoordinates> | null = null;

/**
 * @summary Encodes a(n) UtmCoordinates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtmCoordinates, encoded as an ASN.1 Element.
 */
export
function _encode_UtmCoordinates (value: UtmCoordinates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UtmCoordinates) { _cached_encoder_for_UtmCoordinates = function (value: UtmCoordinates, elGetter: $.ASN1Encoder<UtmCoordinates>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.zone, $.BER),
            /* REQUIRED   */ $._encodeNumericString(value.easting, $.BER),
            /* REQUIRED   */ $._encodeNumericString(value.northing, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UtmCoordinates(value, elGetter);
}


/* eslint-enable */
