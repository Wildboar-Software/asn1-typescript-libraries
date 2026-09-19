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
import { JWSTokenType, _enum_for_JWSTokenType, JWSTokenType_passport /* IMPORTED_LONG_ENUMERATION_ITEM */, passport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_JWSTokenType, _encode_JWSTokenType } from "../TS33128Payloads/JWSTokenType.ta.mjs";
// export { JWSTokenType, _enum_for_JWSTokenType, JWSTokenType_passport /* IMPORTED_LONG_ENUMERATION_ITEM */, passport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_JWSTokenType, _encode_JWSTokenType } from "../TS33128Payloads/JWSTokenType.ta.mjs";


/**
 * @summary PASSporTHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PASSporTHeader ::= SEQUENCE
 * {
 *     type          [1] JWSTokenType,
 *     algorithm     [2] UTF8String,
 *     ppt           [3] UTF8String OPTIONAL,
 *     x5u           [4] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class PASSporTHeader {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: JWSTokenType,
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: UTF8String,
        /**
         * @summary `ppt`.
         * @public
         * @readonly
         */
        readonly ppt: OPTIONAL<UTF8String>,
        /**
         * @summary `x5u`.
         * @public
         * @readonly
         */
        readonly x5u: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a PASSporTHeader
     * @description
     * 
     * This takes an `object` and converts it to a `PASSporTHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PASSporTHeader`.
     * @returns {PASSporTHeader}
     */
    public static _from_object (_o: { [_K in keyof (PASSporTHeader)]: (PASSporTHeader)[_K] }): PASSporTHeader {
        return new PASSporTHeader(_o.type_, _o.algorithm, _o.ppt, _o.x5u);
    }

        /**
         * @summary The enum used as the type of the component `type_`
         * @public
         * @static
         */

    public static _enum_for_type_ = _enum_for_JWSTokenType;
}

/**
 * @summary The Leading Root Component Types of PASSporTHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PASSporTHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("algorithm", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ppt", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("x5u", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PASSporTHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PASSporTHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PASSporTHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PASSporTHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PASSporTHeader: $.ASN1Decoder<PASSporTHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PASSporTHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PASSporTHeader (el: _Element): PASSporTHeader {
    if (!_cached_decoder_for_PASSporTHeader) { _cached_decoder_for_PASSporTHeader = function (el: _Element): PASSporTHeader {
    let type_!: JWSTokenType;
    let algorithm!: UTF8String;
    let ppt: OPTIONAL<UTF8String>;
    let x5u!: UTF8String;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<JWSTokenType>(() => _decode_JWSTokenType)(_el); },
        "algorithm": (_el: _Element): void => { algorithm = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "ppt": (_el: _Element): void => { ppt = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "x5u": (_el: _Element): void => { x5u = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PASSporTHeader,
        _extension_additions_list_spec_for_PASSporTHeader,
        _root_component_type_list_2_spec_for_PASSporTHeader,
        undefined,
    );
    return new PASSporTHeader(
        type_,
        algorithm,
        ppt,
        x5u
    );
}; }
    return _cached_decoder_for_PASSporTHeader(el);
}

let _cached_encoder_for_PASSporTHeader: $.ASN1Encoder<PASSporTHeader> | null = null;

/**
 * @summary Encodes a(n) PASSporTHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PASSporTHeader, encoded as an ASN.1 Element.
 */
export
function _encode_PASSporTHeader (value: PASSporTHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PASSporTHeader) { _cached_encoder_for_PASSporTHeader = function (value: PASSporTHeader, elGetter: $.ASN1Encoder<PASSporTHeader>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_JWSTokenType, $.BER)(value.type_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.algorithm, $.BER),
            /* IF_ABSENT  */ ((value.ppt === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.ppt, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.x5u, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PASSporTHeader(value, elGetter);
}


/* eslint-enable */
