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
import { PositiveNegative, _decode_PositiveNegative, _encode_PositiveNegative } from "../IEC61850/PositiveNegative.ta.mjs";
// export { PositiveNegative, _decode_PositiveNegative, _encode_PositiveNegative } from "../IEC61850/PositiveNegative.ta.mjs";


/**
 * @summary GSEMngtResponsePdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSEMngtResponsePdu ::= SEQUENCE {
 *     ident        [0] IMPLICIT VisibleString, -- echos the value of the request
 *     confRev        [1] IMPLICIT INTEGER OPTIONAL,
 *     posNeg        PositiveNegative,
 * --    CHOICE {
 * --        responsePositive    [2] IMPLICIT SEQUENCE {
 * --            datSet                [0] IMPLICIT VisibleString OPTIONAL,
 * --            result                [1] IMPLICIT SEQUENCE OF RequestResults
 * --        },
 * --        responseNegative    [3] IMPLICIT GlbErrors
 * --    },
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GSEMngtResponsePdu {
    constructor (
        /**
         * @summary `ident`.
         * @public
         * @readonly
         */
        readonly ident: VisibleString,
        /**
         * @summary `confRev`.
         * @public
         * @readonly
         */
        readonly confRev: OPTIONAL<INTEGER>,
        /**
         * @summary `posNeg`.
         * @public
         * @readonly
         */
        readonly posNeg: PositiveNegative,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GSEMngtResponsePdu
     * @description
     * 
     * This takes an `object` and converts it to a `GSEMngtResponsePdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GSEMngtResponsePdu`.
     * @returns {GSEMngtResponsePdu}
     */
    public static _from_object (_o: { [_K in keyof (GSEMngtResponsePdu)]: (GSEMngtResponsePdu)[_K] }): GSEMngtResponsePdu {
        return new GSEMngtResponsePdu(_o.ident, _o.confRev, _o.posNeg, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GSEMngtResponsePdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GSEMngtResponsePdu: $.ComponentSpec[] = [
    new $.ComponentSpec("ident", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("confRev", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("posNeg", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of GSEMngtResponsePdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GSEMngtResponsePdu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GSEMngtResponsePdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GSEMngtResponsePdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GSEMngtResponsePdu: $.ASN1Decoder<GSEMngtResponsePdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSEMngtResponsePdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSEMngtResponsePdu (el: _Element): GSEMngtResponsePdu {
    if (!_cached_decoder_for_GSEMngtResponsePdu) { _cached_decoder_for_GSEMngtResponsePdu = function (el: _Element): GSEMngtResponsePdu {
    let ident!: VisibleString;
    let confRev: OPTIONAL<INTEGER>;
    let posNeg!: PositiveNegative;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ident": (_el: _Element): void => { ident = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "confRev": (_el: _Element): void => { confRev = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "posNeg": (_el: _Element): void => { posNeg = _decode_PositiveNegative(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GSEMngtResponsePdu,
        _extension_additions_list_spec_for_GSEMngtResponsePdu,
        _root_component_type_list_2_spec_for_GSEMngtResponsePdu,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GSEMngtResponsePdu(
        ident,
        confRev,
        posNeg,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GSEMngtResponsePdu(el);
}

let _cached_encoder_for_GSEMngtResponsePdu: $.ASN1Encoder<GSEMngtResponsePdu> | null = null;

/**
 * @summary Encodes a(n) GSEMngtResponsePdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSEMngtResponsePdu, encoded as an ASN.1 Element.
 */
export
function _encode_GSEMngtResponsePdu (value: GSEMngtResponsePdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSEMngtResponsePdu) { _cached_encoder_for_GSEMngtResponsePdu = function (value: GSEMngtResponsePdu, elGetter: $.ASN1Encoder<GSEMngtResponsePdu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.ident, $.BER),
            /* IF_ABSENT  */ ((value.confRev === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.confRev, $.BER)),
            /* REQUIRED   */ _encode_PositiveNegative(value.posNeg, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GSEMngtResponsePdu(value, elGetter);
}


/* eslint-enable */
