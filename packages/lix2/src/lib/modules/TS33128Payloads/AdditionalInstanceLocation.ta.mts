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
import { SIPEndpoint, _decode_SIPEndpoint, _encode_SIPEndpoint } from "../TS33128Payloads/SIPEndpoint.ta.mjs";
// export { SIPEndpoint, _decode_SIPEndpoint, _encode_SIPEndpoint } from "../TS33128Payloads/SIPEndpoint.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary AdditionalInstanceLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalInstanceLocation ::= SEQUENCE
 * {
 *     instance [1] SIPEndpoint,
 *     location [2] Location
 * }
 * ```
 * 
 * @class
 */
export
class AdditionalInstanceLocation {
    constructor (
        /**
         * @summary `instance`.
         * @public
         * @readonly
         */
        readonly instance: SIPEndpoint,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: Location
    ) {}

    /**
     * @summary Restructures an object into a AdditionalInstanceLocation
     * @description
     * 
     * This takes an `object` and converts it to a `AdditionalInstanceLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalInstanceLocation`.
     * @returns {AdditionalInstanceLocation}
     */
    public static _from_object (_o: { [_K in keyof (AdditionalInstanceLocation)]: (AdditionalInstanceLocation)[_K] }): AdditionalInstanceLocation {
        return new AdditionalInstanceLocation(_o.instance, _o.location);
    }


}

/**
 * @summary The Leading Root Component Types of AdditionalInstanceLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdditionalInstanceLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("instance", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AdditionalInstanceLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdditionalInstanceLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdditionalInstanceLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AdditionalInstanceLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AdditionalInstanceLocation: $.ASN1Decoder<AdditionalInstanceLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalInstanceLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalInstanceLocation (el: _Element): AdditionalInstanceLocation {
    if (!_cached_decoder_for_AdditionalInstanceLocation) { _cached_decoder_for_AdditionalInstanceLocation = function (el: _Element): AdditionalInstanceLocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AdditionalInstanceLocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "instance";
    sequence[1].name = "location";
    let instance!: SIPEndpoint;
    let location!: Location;
    instance = $._decode_implicit<SIPEndpoint>(() => _decode_SIPEndpoint)(sequence[0]);
    location = $._decode_implicit<Location>(() => _decode_Location)(sequence[1]);
    return new AdditionalInstanceLocation(
        instance,
        location,

    );
}; }
    return _cached_decoder_for_AdditionalInstanceLocation(el);
}

let _cached_encoder_for_AdditionalInstanceLocation: $.ASN1Encoder<AdditionalInstanceLocation> | null = null;

/**
 * @summary Encodes a(n) AdditionalInstanceLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalInstanceLocation, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalInstanceLocation (value: AdditionalInstanceLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalInstanceLocation) { _cached_encoder_for_AdditionalInstanceLocation = function (value: AdditionalInstanceLocation, elGetter: $.ASN1Encoder<AdditionalInstanceLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SIPEndpoint, $.BER)(value.instance, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Location, $.BER)(value.location, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AdditionalInstanceLocation(value, elGetter);
}


/* eslint-enable */
