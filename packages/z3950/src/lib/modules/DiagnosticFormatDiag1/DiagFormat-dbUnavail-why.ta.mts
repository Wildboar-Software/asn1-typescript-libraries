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
import { DiagFormat_dbUnavail_why_reasonCode, DiagFormat_dbUnavail_why_reasonCode_doesNotExist /* IMPORTED_LONG_NAMED_INTEGER */, doesNotExist /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_dbUnavail_why_reasonCode_existsButUnavail /* IMPORTED_LONG_NAMED_INTEGER */, existsButUnavail /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_dbUnavail_why_reasonCode_locked /* IMPORTED_LONG_NAMED_INTEGER */, locked /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_dbUnavail_why_reasonCode_accessDenied /* IMPORTED_LONG_NAMED_INTEGER */, accessDenied /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_dbUnavail_why_reasonCode, _encode_DiagFormat_dbUnavail_why_reasonCode } from "../DiagnosticFormatDiag1/DiagFormat-dbUnavail-why-reasonCode.ta.mjs";
// export { DiagFormat_dbUnavail_why_reasonCode, DiagFormat_dbUnavail_why_reasonCode_doesNotExist /* IMPORTED_LONG_NAMED_INTEGER */, doesNotExist /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_dbUnavail_why_reasonCode_existsButUnavail /* IMPORTED_LONG_NAMED_INTEGER */, existsButUnavail /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_dbUnavail_why_reasonCode_locked /* IMPORTED_LONG_NAMED_INTEGER */, locked /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_dbUnavail_why_reasonCode_accessDenied /* IMPORTED_LONG_NAMED_INTEGER */, accessDenied /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_dbUnavail_why_reasonCode, _encode_DiagFormat_dbUnavail_why_reasonCode } from "../DiagnosticFormatDiag1/DiagFormat-dbUnavail-why-reasonCode.ta.mjs";


/**
 * @summary DiagFormat_dbUnavail_why
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-dbUnavail-why ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_dbUnavail_why {
    constructor (
        /**
         * @summary `reasonCode`.
         * @public
         * @readonly
         */
        readonly reasonCode: OPTIONAL<DiagFormat_dbUnavail_why_reasonCode>,
        /**
         * @summary `message`.
         * @public
         * @readonly
         */
        readonly message: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a DiagFormat_dbUnavail_why
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_dbUnavail_why`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_dbUnavail_why`.
     * @returns {DiagFormat_dbUnavail_why}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_dbUnavail_why)]: (DiagFormat_dbUnavail_why)[_K] }): DiagFormat_dbUnavail_why {
        return new DiagFormat_dbUnavail_why(_o.reasonCode, _o.message);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_dbUnavail_why
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_dbUnavail_why: $.ComponentSpec[] = [
    new $.ComponentSpec("reasonCode", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: message COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_dbUnavail_why
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_dbUnavail_why: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_dbUnavail_why
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_dbUnavail_why: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_dbUnavail_why: $.ASN1Decoder<DiagFormat_dbUnavail_why> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_dbUnavail_why
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_dbUnavail_why (el: _Element): DiagFormat_dbUnavail_why {
    if (!_cached_decoder_for_DiagFormat_dbUnavail_why) { _cached_decoder_for_DiagFormat_dbUnavail_why = function (el: _Element): DiagFormat_dbUnavail_why {
    let reasonCode: OPTIONAL<DiagFormat_dbUnavail_why_reasonCode>;
    let message: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "reasonCode": (_el: _Element): void => { reasonCode = $._decode_implicit<DiagFormat_dbUnavail_why_reasonCode>(() => _decode_DiagFormat_dbUnavail_why_reasonCode)(_el); },
        "message": (_el: _Element): void => { message = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_dbUnavail_why,
        _extension_additions_list_spec_for_DiagFormat_dbUnavail_why,
        _root_component_type_list_2_spec_for_DiagFormat_dbUnavail_why,
        undefined,
    );
    return new DiagFormat_dbUnavail_why(
        reasonCode,
        message
    );
}; }
    return _cached_decoder_for_DiagFormat_dbUnavail_why(el);
}

let _cached_encoder_for_DiagFormat_dbUnavail_why: $.ASN1Encoder<DiagFormat_dbUnavail_why> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_dbUnavail_why into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_dbUnavail_why, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_dbUnavail_why (value: DiagFormat_dbUnavail_why, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_dbUnavail_why) { _cached_encoder_for_DiagFormat_dbUnavail_why = function (value: DiagFormat_dbUnavail_why, elGetter: $.ASN1Encoder<DiagFormat_dbUnavail_why>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reasonCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DiagFormat_dbUnavail_why_reasonCode, $.BER)(value.reasonCode, $.BER)),
            /* IF_ABSENT  */ ((value.message === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.message, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiagFormat_dbUnavail_why(value, elGetter);
}


/* eslint-enable */
