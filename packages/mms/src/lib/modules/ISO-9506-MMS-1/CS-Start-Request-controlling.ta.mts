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
import { StartCount, _decode_StartCount, _encode_StartCount } from "../ISO-9506-MMS-1/StartCount.ta.mjs";
// export { StartCount, _decode_StartCount, _encode_StartCount } from "../ISO-9506-MMS-1/StartCount.ta.mjs";


/**
 * @summary CS_Start_Request_controlling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Start-Request-controlling ::= SEQUENCE {
 *     startLocation [0] IMPLICIT VisibleString OPTIONAL,
 *     startCount [1] StartCount DEFAULT cycleCount: 1
 * }
 * ```
 * 
 * @class
 */
export
class CS_Start_Request_controlling {
    constructor (
        /**
         * @summary `startLocation`.
         * @public
         * @readonly
         */
        readonly startLocation: OPTIONAL<VisibleString>,
        /**
         * @summary `startCount`.
         * @public
         * @readonly
         */
        readonly startCount: OPTIONAL<StartCount>
    ) {}

    /**
     * @summary Restructures an object into a CS_Start_Request_controlling
     * @description
     * 
     * This takes an `object` and converts it to a `CS_Start_Request_controlling`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CS_Start_Request_controlling`.
     * @returns {CS_Start_Request_controlling}
     */
    public static _from_object (_o: { [_K in keyof (CS_Start_Request_controlling)]: (CS_Start_Request_controlling)[_K] }): CS_Start_Request_controlling {
        return new CS_Start_Request_controlling(_o.startLocation, _o.startCount);
    }

    /**
     * @summary Getter that returns the default value for `startCount`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_startCount () { return { cycleCount: 1 }; }
}

/**
 * @summary The Leading Root Component Types of CS_Start_Request_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CS_Start_Request_controlling: $.ComponentSpec[] = [
    new $.ComponentSpec("startLocation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("startCount", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CS_Start_Request_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CS_Start_Request_controlling: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CS_Start_Request_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CS_Start_Request_controlling: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CS_Start_Request_controlling: $.ASN1Decoder<CS_Start_Request_controlling> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Start_Request_controlling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Start_Request_controlling (el: _Element): CS_Start_Request_controlling {
    if (!_cached_decoder_for_CS_Start_Request_controlling) { _cached_decoder_for_CS_Start_Request_controlling = function (el: _Element): CS_Start_Request_controlling {
    let startLocation: OPTIONAL<VisibleString>;
    let startCount: OPTIONAL<StartCount> = CS_Start_Request_controlling._default_value_for_startCount;
    const callbacks: $.DecodingMap = {
        "startLocation": (_el: _Element): void => { startLocation = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "startCount": (_el: _Element): void => { startCount = $._decode_explicit<StartCount>(() => _decode_StartCount)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CS_Start_Request_controlling,
        _extension_additions_list_spec_for_CS_Start_Request_controlling,
        _root_component_type_list_2_spec_for_CS_Start_Request_controlling,
        undefined,
    );
    return new CS_Start_Request_controlling(
        startLocation,
        startCount
    );
}; }
    return _cached_decoder_for_CS_Start_Request_controlling(el);
}

let _cached_encoder_for_CS_Start_Request_controlling: $.ASN1Encoder<CS_Start_Request_controlling> | null = null;

/**
 * @summary Encodes a(n) CS_Start_Request_controlling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Start_Request_controlling, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Start_Request_controlling (value: CS_Start_Request_controlling, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Start_Request_controlling) { _cached_encoder_for_CS_Start_Request_controlling = function (value: CS_Start_Request_controlling, elGetter: $.ASN1Encoder<CS_Start_Request_controlling>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.startLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.startLocation, $.BER)),
            /* IF_DEFAULT */ (value.startCount === undefined || $.deepEq(value.startCount, CS_Start_Request_controlling._default_value_for_startCount) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_StartCount, $.BER)(value.startCount, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CS_Start_Request_controlling(value, elGetter);
}


/* eslint-enable */
