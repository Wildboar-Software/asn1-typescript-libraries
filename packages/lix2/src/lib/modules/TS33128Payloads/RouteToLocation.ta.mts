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
import { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";
// export { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";
import { RouteInfo, _decode_RouteInfo, _encode_RouteInfo } from "../TS33128Payloads/RouteInfo.ta.mjs";
// export { RouteInfo, _decode_RouteInfo, _encode_RouteInfo } from "../TS33128Payloads/RouteInfo.ta.mjs";


/**
 * @summary RouteToLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteToLocation ::= SEQUENCE
 * {
 *     dNAI            [1] DNAI,
 *     routeInfo       [2] RouteInfo
 * }
 * ```
 * 
 * @class
 */
export
class RouteToLocation {
    constructor (
        /**
         * @summary `dNAI`.
         * @public
         * @readonly
         */
        readonly dNAI: DNAI,
        /**
         * @summary `routeInfo`.
         * @public
         * @readonly
         */
        readonly routeInfo: RouteInfo
    ) {}

    /**
     * @summary Restructures an object into a RouteToLocation
     * @description
     * 
     * This takes an `object` and converts it to a `RouteToLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteToLocation`.
     * @returns {RouteToLocation}
     */
    public static _from_object (_o: { [_K in keyof (RouteToLocation)]: (RouteToLocation)[_K] }): RouteToLocation {
        return new RouteToLocation(_o.dNAI, _o.routeInfo);
    }


}

/**
 * @summary The Leading Root Component Types of RouteToLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteToLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("dNAI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("routeInfo", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RouteToLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteToLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteToLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteToLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteToLocation: $.ASN1Decoder<RouteToLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteToLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteToLocation (el: _Element): RouteToLocation {
    if (!_cached_decoder_for_RouteToLocation) { _cached_decoder_for_RouteToLocation = function (el: _Element): RouteToLocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RouteToLocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dNAI";
    sequence[1].name = "routeInfo";
    let dNAI!: DNAI;
    let routeInfo!: RouteInfo;
    dNAI = $._decode_implicit<DNAI>(() => _decode_DNAI)(sequence[0]);
    routeInfo = $._decode_implicit<RouteInfo>(() => _decode_RouteInfo)(sequence[1]);
    return new RouteToLocation(
        dNAI,
        routeInfo,

    );
}; }
    return _cached_decoder_for_RouteToLocation(el);
}

let _cached_encoder_for_RouteToLocation: $.ASN1Encoder<RouteToLocation> | null = null;

/**
 * @summary Encodes a(n) RouteToLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteToLocation, encoded as an ASN.1 Element.
 */
export
function _encode_RouteToLocation (value: RouteToLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteToLocation) { _cached_encoder_for_RouteToLocation = function (value: RouteToLocation, elGetter: $.ASN1Encoder<RouteToLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DNAI, $.BER)(value.dNAI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RouteInfo, $.BER)(value.routeInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteToLocation(value, elGetter);
}


/* eslint-enable */
