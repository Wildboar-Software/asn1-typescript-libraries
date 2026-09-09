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
 * @summary BackwardServiceInteractionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BackwardServiceInteractionInd ::= SEQUENCE {
 *   conferenceTreatmentIndicator      [1]  OCTET STRING(SIZE (1)) OPTIONAL,
 *   -- acceptConferenceRequest    'xxxx xx01'B
 *   -- rejectConferenceRequest        'xxxx xx10'B
 *   -- network default is accept conference request,
 *   callCompletionTreatmentIndicator  [2]  OCTET STRING(SIZE (1)) OPTIONAL
 *   -- acceptCallCompletionServiceRequest        'xxxx xx01'B,
 *   -- rejectCallCompletionServiceRequest        'xxxx xx10'B
 *   -- network default is accept call completion service request
 * }
 * ```
 * 
 * @class
 */
export
class BackwardServiceInteractionInd {
    constructor (
        /**
         * @summary `conferenceTreatmentIndicator`.
         * @public
         * @readonly
         */
        readonly conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `callCompletionTreatmentIndicator`.
         * @public
         * @readonly
         */
        readonly callCompletionTreatmentIndicator: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a BackwardServiceInteractionInd
     * @description
     * 
     * This takes an `object` and converts it to a `BackwardServiceInteractionInd`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BackwardServiceInteractionInd`.
     * @returns {BackwardServiceInteractionInd}
     */
    public static _from_object (_o: { [_K in keyof (BackwardServiceInteractionInd)]: (BackwardServiceInteractionInd)[_K] }): BackwardServiceInteractionInd {
        return new BackwardServiceInteractionInd(_o.conferenceTreatmentIndicator, _o.callCompletionTreatmentIndicator);
    }


}

/**
 * @summary The Leading Root Component Types of BackwardServiceInteractionInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BackwardServiceInteractionInd: $.ComponentSpec[] = [
    new $.ComponentSpec("conferenceTreatmentIndicator", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("callCompletionTreatmentIndicator", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BackwardServiceInteractionInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BackwardServiceInteractionInd: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BackwardServiceInteractionInd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BackwardServiceInteractionInd: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BackwardServiceInteractionInd: $.ASN1Decoder<BackwardServiceInteractionInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackwardServiceInteractionInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BackwardServiceInteractionInd (el: _Element): BackwardServiceInteractionInd {
    if (!_cached_decoder_for_BackwardServiceInteractionInd) { _cached_decoder_for_BackwardServiceInteractionInd = function (el: _Element): BackwardServiceInteractionInd {
    let conferenceTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let callCompletionTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "conferenceTreatmentIndicator": (_el: _Element): void => { conferenceTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callCompletionTreatmentIndicator": (_el: _Element): void => { callCompletionTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BackwardServiceInteractionInd,
        _extension_additions_list_spec_for_BackwardServiceInteractionInd,
        _root_component_type_list_2_spec_for_BackwardServiceInteractionInd,
        undefined,
    );
    return new BackwardServiceInteractionInd(
        conferenceTreatmentIndicator,
        callCompletionTreatmentIndicator
    );
}; }
    return _cached_decoder_for_BackwardServiceInteractionInd(el);
}

let _cached_encoder_for_BackwardServiceInteractionInd: $.ASN1Encoder<BackwardServiceInteractionInd> | null = null;

/**
 * @summary Encodes a(n) BackwardServiceInteractionInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackwardServiceInteractionInd, encoded as an ASN.1 Element.
 */
export
function _encode_BackwardServiceInteractionInd (value: BackwardServiceInteractionInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BackwardServiceInteractionInd) { _cached_encoder_for_BackwardServiceInteractionInd = function (value: BackwardServiceInteractionInd, elGetter: $.ASN1Encoder<BackwardServiceInteractionInd>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.conferenceTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.conferenceTreatmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.callCompletionTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.callCompletionTreatmentIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BackwardServiceInteractionInd(value, elGetter);
}


/* eslint-enable */
