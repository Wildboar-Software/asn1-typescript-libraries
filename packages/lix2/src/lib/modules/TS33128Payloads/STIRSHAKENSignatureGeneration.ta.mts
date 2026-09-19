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
import { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
// export { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";


/**
 * @summary STIRSHAKENSignatureGeneration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STIRSHAKENSignatureGeneration ::= SEQUENCE
 * {
 *     pASSporTs                 [1] SEQUENCE OF PASSporT,
 *     encapsulatedSIPMessage    [2] SIPMessage OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class STIRSHAKENSignatureGeneration {
    constructor (
        /**
         * @summary `pASSporTs`.
         * @public
         * @readonly
         */
        readonly pASSporTs: PASSporT[],
        /**
         * @summary `encapsulatedSIPMessage`.
         * @public
         * @readonly
         */
        readonly encapsulatedSIPMessage: OPTIONAL<SIPMessage>
    ) {}

    /**
     * @summary Restructures an object into a STIRSHAKENSignatureGeneration
     * @description
     * 
     * This takes an `object` and converts it to a `STIRSHAKENSignatureGeneration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `STIRSHAKENSignatureGeneration`.
     * @returns {STIRSHAKENSignatureGeneration}
     */
    public static _from_object (_o: { [_K in keyof (STIRSHAKENSignatureGeneration)]: (STIRSHAKENSignatureGeneration)[_K] }): STIRSHAKENSignatureGeneration {
        return new STIRSHAKENSignatureGeneration(_o.pASSporTs, _o.encapsulatedSIPMessage);
    }


}

/**
 * @summary The Leading Root Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    new $.ComponentSpec("pASSporTs", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("encapsulatedSIPMessage", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_STIRSHAKENSignatureGeneration: $.ASN1Decoder<STIRSHAKENSignatureGeneration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STIRSHAKENSignatureGeneration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STIRSHAKENSignatureGeneration (el: _Element): STIRSHAKENSignatureGeneration {
    if (!_cached_decoder_for_STIRSHAKENSignatureGeneration) { _cached_decoder_for_STIRSHAKENSignatureGeneration = function (el: _Element): STIRSHAKENSignatureGeneration {
    let pASSporTs!: PASSporT[];
    let encapsulatedSIPMessage: OPTIONAL<SIPMessage>;
    const callbacks: $.DecodingMap = {
        "pASSporTs": (_el: _Element): void => { pASSporTs = $._decode_implicit<PASSporT[]>(() => $._decodeSequenceOf<PASSporT>(() => _decode_PASSporT))(_el); },
        "encapsulatedSIPMessage": (_el: _Element): void => { encapsulatedSIPMessage = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_STIRSHAKENSignatureGeneration,
        _extension_additions_list_spec_for_STIRSHAKENSignatureGeneration,
        _root_component_type_list_2_spec_for_STIRSHAKENSignatureGeneration,
        undefined,
    );
    return new STIRSHAKENSignatureGeneration(
        pASSporTs,
        encapsulatedSIPMessage
    );
}; }
    return _cached_decoder_for_STIRSHAKENSignatureGeneration(el);
}

let _cached_encoder_for_STIRSHAKENSignatureGeneration: $.ASN1Encoder<STIRSHAKENSignatureGeneration> | null = null;

/**
 * @summary Encodes a(n) STIRSHAKENSignatureGeneration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STIRSHAKENSignatureGeneration, encoded as an ASN.1 Element.
 */
export
function _encode_STIRSHAKENSignatureGeneration (value: STIRSHAKENSignatureGeneration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STIRSHAKENSignatureGeneration) { _cached_encoder_for_STIRSHAKENSignatureGeneration = function (value: STIRSHAKENSignatureGeneration, elGetter: $.ASN1Encoder<STIRSHAKENSignatureGeneration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PASSporT>(() => _encode_PASSporT, $.BER), $.BER)(value.pASSporTs, $.BER),
            /* IF_ABSENT  */ ((value.encapsulatedSIPMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SIPMessage, $.BER)(value.encapsulatedSIPMessage, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_STIRSHAKENSignatureGeneration(value, elGetter);
}


/* eslint-enable */
