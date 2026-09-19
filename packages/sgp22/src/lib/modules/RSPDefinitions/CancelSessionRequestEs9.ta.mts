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
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { CancelSessionResponse, _decode_CancelSessionResponse, _encode_CancelSessionResponse } from "../RSPDefinitions/CancelSessionResponse.ta.mjs";
// export { CancelSessionResponse, _decode_CancelSessionResponse, _encode_CancelSessionResponse } from "../RSPDefinitions/CancelSessionResponse.ta.mjs";


/**
 * @summary CancelSessionRequestEs9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionRequestEs9 ::= [65] SEQUENCE { -- Tag 'BF41'
 *     transactionId TransactionId,
 *     cancelSessionResponse CancelSessionResponse -- data structure defined for ES10b.CancelSession function
 * }
 * ```
 * 
 * @class
 */
export
class CancelSessionRequestEs9 {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `cancelSessionResponse`.
         * @public
         * @readonly
         */
        readonly cancelSessionResponse: CancelSessionResponse
    ) {}

    /**
     * @summary Restructures an object into a CancelSessionRequestEs9
     * @description
     * 
     * This takes an `object` and converts it to a `CancelSessionRequestEs9`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelSessionRequestEs9`.
     * @returns {CancelSessionRequestEs9}
     */
    public static _from_object (_o: { [_K in keyof (CancelSessionRequestEs9)]: (CancelSessionRequestEs9)[_K] }): CancelSessionRequestEs9 {
        return new CancelSessionRequestEs9(_o.transactionId, _o.cancelSessionResponse);
    }


}

/**
 * @summary The Leading Root Component Types of CancelSessionRequestEs9
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelSessionRequestEs9: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cancelSessionResponse", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CancelSessionRequestEs9
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelSessionRequestEs9: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelSessionRequestEs9
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelSessionRequestEs9: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelSessionRequestEs9: $.ASN1Decoder<CancelSessionRequestEs9> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionRequestEs9
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionRequestEs9 (el: _Element): CancelSessionRequestEs9 {
    if (!_cached_decoder_for_CancelSessionRequestEs9) { _cached_decoder_for_CancelSessionRequestEs9 = $._decode_implicit<CancelSessionRequestEs9>(() => function (el: _Element): CancelSessionRequestEs9 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CancelSessionRequestEs9 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "cancelSessionResponse";
    let transactionId!: TransactionId;
    let cancelSessionResponse!: CancelSessionResponse;
    transactionId = _decode_TransactionId(sequence[0]);
    cancelSessionResponse = _decode_CancelSessionResponse(sequence[1]);
    return new CancelSessionRequestEs9(
        transactionId,
        cancelSessionResponse,

    );
}); }
    return _cached_decoder_for_CancelSessionRequestEs9(el);
}

let _cached_encoder_for_CancelSessionRequestEs9: $.ASN1Encoder<CancelSessionRequestEs9> | null = null;

/**
 * @summary Encodes a(n) CancelSessionRequestEs9 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionRequestEs9, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionRequestEs9 (value: CancelSessionRequestEs9, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionRequestEs9) { _cached_encoder_for_CancelSessionRequestEs9 = $._encode_implicit(_TagClass.context, 65, () => function (value: CancelSessionRequestEs9, elGetter: $.ASN1Encoder<CancelSessionRequestEs9>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TransactionId(value.transactionId, $.BER),
            /* REQUIRED   */ _encode_CancelSessionResponse(value.cancelSessionResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_CancelSessionRequestEs9(value, elGetter);
}


/* eslint-enable */
