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
 * @summary LogExpPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogExpPointer ::= SEQUENCE {
 *     kValue [0] IMPLICIT INTEGER OPTIONAL,
 *     fValue [1] IMPLICIT INTEGER OPTIONAL,
 *     zValue [2] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LogExpPointer {
    constructor (
        /**
         * @summary `kValue`.
         * @public
         * @readonly
         */
        readonly kValue: OPTIONAL<INTEGER>,
        /**
         * @summary `fValue`.
         * @public
         * @readonly
         */
        readonly fValue: OPTIONAL<INTEGER>,
        /**
         * @summary `zValue`.
         * @public
         * @readonly
         */
        readonly zValue: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a LogExpPointer
     * @description
     * 
     * This takes an `object` and converts it to a `LogExpPointer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogExpPointer`.
     * @returns {LogExpPointer}
     */
    public static _from_object (_o: { [_K in keyof (LogExpPointer)]: (LogExpPointer)[_K] }): LogExpPointer {
        return new LogExpPointer(_o.kValue, _o.fValue, _o.zValue);
    }


}

/**
 * @summary The Leading Root Component Types of LogExpPointer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogExpPointer: $.ComponentSpec[] = [
    new $.ComponentSpec("kValue", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fValue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("zValue", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LogExpPointer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogExpPointer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogExpPointer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogExpPointer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogExpPointer: $.ASN1Decoder<LogExpPointer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogExpPointer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogExpPointer (el: _Element): LogExpPointer {
    if (!_cached_decoder_for_LogExpPointer) { _cached_decoder_for_LogExpPointer = function (el: _Element): LogExpPointer {
    let kValue: OPTIONAL<INTEGER>;
    let fValue: OPTIONAL<INTEGER>;
    let zValue: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "kValue": (_el: _Element): void => { kValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "fValue": (_el: _Element): void => { fValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "zValue": (_el: _Element): void => { zValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogExpPointer,
        _extension_additions_list_spec_for_LogExpPointer,
        _root_component_type_list_2_spec_for_LogExpPointer,
        undefined,
    );
    return new LogExpPointer(
        kValue,
        fValue,
        zValue
    );
}; }
    return _cached_decoder_for_LogExpPointer(el);
}

let _cached_encoder_for_LogExpPointer: $.ASN1Encoder<LogExpPointer> | null = null;

/**
 * @summary Encodes a(n) LogExpPointer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogExpPointer, encoded as an ASN.1 Element.
 */
export
function _encode_LogExpPointer (value: LogExpPointer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogExpPointer) { _cached_encoder_for_LogExpPointer = function (value: LogExpPointer, elGetter: $.ASN1Encoder<LogExpPointer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.kValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.kValue, $.BER)),
            /* IF_ABSENT  */ ((value.fValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.fValue, $.BER)),
            /* IF_ABSENT  */ ((value.zValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.zValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogExpPointer(value, elGetter);
}


/* eslint-enable */
