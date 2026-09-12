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
import { DataParameters_floating_point, _decode_DataParameters_floating_point, _encode_DataParameters_floating_point } from "../MMS-SCI-Module-1/DataParameters-floating-point.ta.mjs";
// export { DataParameters_floating_point, _decode_DataParameters_floating_point, _encode_DataParameters_floating_point } from "../MMS-SCI-Module-1/DataParameters-floating-point.ta.mjs";


/**
 * @summary DataParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataParameters ::= SEQUENCE {
 *     bit-string                 [0] IMPLICIT INTEGER OPTIONAL,
 *     integer                       [1] IMPLICIT INTEGER OPTIONAL,
 *     unsigned                   [2] IMPLICIT INTEGER OPTIONAL,
 *     floating-point             [3] IMPLICIT SEQUENCE {
 *         total                      [4] IMPLICIT INTEGER,
 *         exponent                   [5] IMPLICIT INTEGER } OPTIONAL,
 *     octet-string               [10] IMPLICIT INTEGER OPTIONAL,
 *     visible-string             [11] IMPLICIT INTEGER OPTIONAL,
 *     binary-time                [12] IMPLICIT BOOLEAN OPTIONAL,
 *     bcd                        [13] IMPLICIT INTEGER OPTIONAL,
 *     mmsString                  [14] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DataParameters {
    constructor (
        /**
         * @summary `bit_string`.
         * @public
         * @readonly
         */
        readonly bit_string: OPTIONAL<INTEGER>,
        /**
         * @summary `integer`.
         * @public
         * @readonly
         */
        readonly integer: OPTIONAL<INTEGER>,
        /**
         * @summary `unsigned`.
         * @public
         * @readonly
         */
        readonly unsigned: OPTIONAL<INTEGER>,
        /**
         * @summary `floating_point`.
         * @public
         * @readonly
         */
        readonly floating_point: OPTIONAL<DataParameters_floating_point>,
        /**
         * @summary `octet_string`.
         * @public
         * @readonly
         */
        readonly octet_string: OPTIONAL<INTEGER>,
        /**
         * @summary `visible_string`.
         * @public
         * @readonly
         */
        readonly visible_string: OPTIONAL<INTEGER>,
        /**
         * @summary `binary_time`.
         * @public
         * @readonly
         */
        readonly binary_time: OPTIONAL<BOOLEAN>,
        /**
         * @summary `bcd`.
         * @public
         * @readonly
         */
        readonly bcd: OPTIONAL<INTEGER>,
        /**
         * @summary `mmsString`.
         * @public
         * @readonly
         */
        readonly mmsString: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DataParameters
     * @description
     * 
     * This takes an `object` and converts it to a `DataParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataParameters`.
     * @returns {DataParameters}
     */
    public static _from_object (_o: { [_K in keyof (DataParameters)]: (DataParameters)[_K] }): DataParameters {
        return new DataParameters(_o.bit_string, _o.integer, _o.unsigned, _o.floating_point, _o.octet_string, _o.visible_string, _o.binary_time, _o.bcd, _o.mmsString);
    }


}

/**
 * @summary The Leading Root Component Types of DataParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("bit-string", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("integer", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unsigned", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("floating-point", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("octet-string", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("visible-string", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("binary-time", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("bcd", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("mmsString", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of DataParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataParameters: $.ASN1Decoder<DataParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataParameters (el: _Element): DataParameters {
    if (!_cached_decoder_for_DataParameters) { _cached_decoder_for_DataParameters = function (el: _Element): DataParameters {
    let bit_string: OPTIONAL<INTEGER>;
    let integer: OPTIONAL<INTEGER>;
    let unsigned: OPTIONAL<INTEGER>;
    let floating_point: OPTIONAL<DataParameters_floating_point>;
    let octet_string: OPTIONAL<INTEGER>;
    let visible_string: OPTIONAL<INTEGER>;
    let binary_time: OPTIONAL<BOOLEAN>;
    let bcd: OPTIONAL<INTEGER>;
    let mmsString: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "bit-string": (_el: _Element): void => { bit_string = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "integer": (_el: _Element): void => { integer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "unsigned": (_el: _Element): void => { unsigned = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "floating-point": (_el: _Element): void => { floating_point = $._decode_implicit<DataParameters_floating_point>(() => _decode_DataParameters_floating_point)(_el); },
        "octet-string": (_el: _Element): void => { octet_string = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "visible-string": (_el: _Element): void => { visible_string = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "binary-time": (_el: _Element): void => { binary_time = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "bcd": (_el: _Element): void => { bcd = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mmsString": (_el: _Element): void => { mmsString = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataParameters,
        _extension_additions_list_spec_for_DataParameters,
        _root_component_type_list_2_spec_for_DataParameters,
        undefined,
    );
    return new DataParameters(
        bit_string,
        integer,
        unsigned,
        floating_point,
        octet_string,
        visible_string,
        binary_time,
        bcd,
        mmsString
    );
}; }
    return _cached_decoder_for_DataParameters(el);
}

let _cached_encoder_for_DataParameters: $.ASN1Encoder<DataParameters> | null = null;

/**
 * @summary Encodes a(n) DataParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataParameters, encoded as an ASN.1 Element.
 */
export
function _encode_DataParameters (value: DataParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataParameters) { _cached_encoder_for_DataParameters = function (value: DataParameters, elGetter: $.ASN1Encoder<DataParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bit_string === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.bit_string, $.BER)),
            /* IF_ABSENT  */ ((value.integer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.integer, $.BER)),
            /* IF_ABSENT  */ ((value.unsigned === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.unsigned, $.BER)),
            /* IF_ABSENT  */ ((value.floating_point === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DataParameters_floating_point, $.BER)(value.floating_point, $.BER)),
            /* IF_ABSENT  */ ((value.octet_string === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.octet_string, $.BER)),
            /* IF_ABSENT  */ ((value.visible_string === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.visible_string, $.BER)),
            /* IF_ABSENT  */ ((value.binary_time === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.binary_time, $.BER)),
            /* IF_ABSENT  */ ((value.bcd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.bcd, $.BER)),
            /* IF_ABSENT  */ ((value.mmsString === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.mmsString, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataParameters(value, elGetter);
}


/* eslint-enable */
