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
 * @summary GetReferenceRequestPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetReferenceRequestPdu ::= SEQUENCE {
 *     ident    [0] IMPLICIT VisibleString, -- size shall support up to 65 octets
 *     offset    [1] IMPLICIT SEQUENCE OF INTEGER,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GetReferenceRequestPdu {
    constructor (
        /**
         * @summary `ident`.
         * @public
         * @readonly
         */
        readonly ident: VisibleString,
        /**
         * @summary `offset`.
         * @public
         * @readonly
         */
        readonly offset: INTEGER[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GetReferenceRequestPdu
     * @description
     * 
     * This takes an `object` and converts it to a `GetReferenceRequestPdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetReferenceRequestPdu`.
     * @returns {GetReferenceRequestPdu}
     */
    public static _from_object (_o: { [_K in keyof (GetReferenceRequestPdu)]: (GetReferenceRequestPdu)[_K] }): GetReferenceRequestPdu {
        return new GetReferenceRequestPdu(_o.ident, _o.offset, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GetReferenceRequestPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetReferenceRequestPdu: $.ComponentSpec[] = [
    new $.ComponentSpec("ident", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("offset", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetReferenceRequestPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetReferenceRequestPdu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetReferenceRequestPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetReferenceRequestPdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetReferenceRequestPdu: $.ASN1Decoder<GetReferenceRequestPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetReferenceRequestPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetReferenceRequestPdu (el: _Element): GetReferenceRequestPdu {
    if (!_cached_decoder_for_GetReferenceRequestPdu) { _cached_decoder_for_GetReferenceRequestPdu = function (el: _Element): GetReferenceRequestPdu {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetReferenceRequestPdu contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ident";
    sequence[1].name = "offset";
    let ident!: VisibleString;
    let offset!: INTEGER[];
    ident = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(sequence[0]);
    offset = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(sequence[1]);
    return new GetReferenceRequestPdu(
        ident,
        offset,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_GetReferenceRequestPdu(el);
}

let _cached_encoder_for_GetReferenceRequestPdu: $.ASN1Encoder<GetReferenceRequestPdu> | null = null;

/**
 * @summary Encodes a(n) GetReferenceRequestPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetReferenceRequestPdu, encoded as an ASN.1 Element.
 */
export
function _encode_GetReferenceRequestPdu (value: GetReferenceRequestPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetReferenceRequestPdu) { _cached_encoder_for_GetReferenceRequestPdu = function (value: GetReferenceRequestPdu, elGetter: $.ASN1Encoder<GetReferenceRequestPdu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.ident, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.offset, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetReferenceRequestPdu(value, elGetter);
}


/* eslint-enable */
