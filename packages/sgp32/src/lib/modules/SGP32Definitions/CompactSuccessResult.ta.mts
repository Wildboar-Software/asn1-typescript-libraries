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
 * @summary CompactSuccessResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactSuccessResult ::= SEQUENCE {
 *     compactAid [APPLICATION 15] OCTET STRING (SIZE (2)), -- Byte 14 and 15 of ISD-P AID
 *     simaResponse OCTET STRING OPTIONAL -- MUST be present if the simaResponse value (EUICCResponse) is different from the 9-byte value ‘30 07 A0 05 30 03 80 01 00’ representing success
 * }
 * ```
 * 
 * @class
 */
export
class CompactSuccessResult {
    constructor (
        /**
         * @summary `compactAid`.
         * @public
         * @readonly
         */
        readonly compactAid: OCTET_STRING,
        /**
         * @summary `simaResponse`.
         * @public
         * @readonly
         */
        readonly simaResponse: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a CompactSuccessResult
     * @description
     * 
     * This takes an `object` and converts it to a `CompactSuccessResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactSuccessResult`.
     * @returns {CompactSuccessResult}
     */
    public static _from_object (_o: { [_K in keyof (CompactSuccessResult)]: (CompactSuccessResult)[_K] }): CompactSuccessResult {
        return new CompactSuccessResult(_o.compactAid, _o.simaResponse);
    }


}

/**
 * @summary The Leading Root Component Types of CompactSuccessResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactSuccessResult: $.ComponentSpec[] = [
    new $.ComponentSpec("compactAid", false, $.hasTag(_TagClass.application, 15)),
    new $.ComponentSpec("simaResponse", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CompactSuccessResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactSuccessResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactSuccessResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactSuccessResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactSuccessResult: $.ASN1Decoder<CompactSuccessResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactSuccessResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactSuccessResult (el: _Element): CompactSuccessResult {
    if (!_cached_decoder_for_CompactSuccessResult) { _cached_decoder_for_CompactSuccessResult = function (el: _Element): CompactSuccessResult {
    let compactAid!: OCTET_STRING;
    let simaResponse: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "compactAid": (_el: _Element): void => { compactAid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "simaResponse": (_el: _Element): void => { simaResponse = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompactSuccessResult,
        _extension_additions_list_spec_for_CompactSuccessResult,
        _root_component_type_list_2_spec_for_CompactSuccessResult,
        undefined,
    );
    return new CompactSuccessResult(
        compactAid,
        simaResponse
    );
}; }
    return _cached_decoder_for_CompactSuccessResult(el);
}

let _cached_encoder_for_CompactSuccessResult: $.ASN1Encoder<CompactSuccessResult> | null = null;

/**
 * @summary Encodes a(n) CompactSuccessResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactSuccessResult, encoded as an ASN.1 Element.
 */
export
function _encode_CompactSuccessResult (value: CompactSuccessResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactSuccessResult) { _cached_encoder_for_CompactSuccessResult = function (value: CompactSuccessResult, elGetter: $.ASN1Encoder<CompactSuccessResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 15, () => $._encodeOctetString, $.BER)(value.compactAid, $.BER),
            /* IF_ABSENT  */ ((value.simaResponse === undefined) ? undefined : $._encodeOctetString(value.simaResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactSuccessResult(value, elGetter);
}


/* eslint-enable */
