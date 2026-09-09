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
 * @summary ControlConditionByCallParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlConditionByCallParty ::= SEQUENCE {
 *   endOfMessageSendingDigit  [0]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *   replayDigit               [1]  OCTET STRING(SIZE (1..2)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ControlConditionByCallParty {
    constructor (
        /**
         * @summary `endOfMessageSendingDigit`.
         * @public
         * @readonly
         */
        readonly endOfMessageSendingDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `replayDigit`.
         * @public
         * @readonly
         */
        readonly replayDigit: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ControlConditionByCallParty
     * @description
     * 
     * This takes an `object` and converts it to a `ControlConditionByCallParty`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlConditionByCallParty`.
     * @returns {ControlConditionByCallParty}
     */
    public static _from_object (_o: { [_K in keyof (ControlConditionByCallParty)]: (ControlConditionByCallParty)[_K] }): ControlConditionByCallParty {
        return new ControlConditionByCallParty(_o.endOfMessageSendingDigit, _o.replayDigit);
    }


}

/**
 * @summary The Leading Root Component Types of ControlConditionByCallParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ControlConditionByCallParty: $.ComponentSpec[] = [
    new $.ComponentSpec("endOfMessageSendingDigit", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("replayDigit", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ControlConditionByCallParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ControlConditionByCallParty: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ControlConditionByCallParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ControlConditionByCallParty: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ControlConditionByCallParty: $.ASN1Decoder<ControlConditionByCallParty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlConditionByCallParty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlConditionByCallParty (el: _Element): ControlConditionByCallParty {
    if (!_cached_decoder_for_ControlConditionByCallParty) { _cached_decoder_for_ControlConditionByCallParty = function (el: _Element): ControlConditionByCallParty {
    let endOfMessageSendingDigit: OPTIONAL<OCTET_STRING>;
    let replayDigit: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "endOfMessageSendingDigit": (_el: _Element): void => { endOfMessageSendingDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "replayDigit": (_el: _Element): void => { replayDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ControlConditionByCallParty,
        _extension_additions_list_spec_for_ControlConditionByCallParty,
        _root_component_type_list_2_spec_for_ControlConditionByCallParty,
        undefined,
    );
    return new ControlConditionByCallParty(
        endOfMessageSendingDigit,
        replayDigit
    );
}; }
    return _cached_decoder_for_ControlConditionByCallParty(el);
}

let _cached_encoder_for_ControlConditionByCallParty: $.ASN1Encoder<ControlConditionByCallParty> | null = null;

/**
 * @summary Encodes a(n) ControlConditionByCallParty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlConditionByCallParty, encoded as an ASN.1 Element.
 */
export
function _encode_ControlConditionByCallParty (value: ControlConditionByCallParty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlConditionByCallParty) { _cached_encoder_for_ControlConditionByCallParty = function (value: ControlConditionByCallParty, elGetter: $.ASN1Encoder<ControlConditionByCallParty>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.endOfMessageSendingDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.endOfMessageSendingDigit, $.BER)),
            /* IF_ABSENT  */ ((value.replayDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.replayDigit, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ControlConditionByCallParty(value, elGetter);
}


/* eslint-enable */
