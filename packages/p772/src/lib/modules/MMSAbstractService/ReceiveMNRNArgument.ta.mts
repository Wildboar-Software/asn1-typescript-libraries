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
import { MNRN, _decode_MNRN, _encode_MNRN } from "../MMSInformationObjects/MNRN.ta.mjs";
// export { MNRN, _decode_MNRN, _encode_MNRN } from "../MMSInformationObjects/MNRN.ta.mjs";


/**
 * @summary ReceiveMNRNArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceiveMNRNArgument ::= SET {
 *   envelope  [0]  MessageDeliveryEnvelope,
 *   content   [1]  MNRN}
 * ```
 * 
 * @class
 */
export
class ReceiveMNRNArgument {
    constructor (
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageDeliveryEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: MNRN
    ) {}

    /**
     * @summary Restructures an object into a ReceiveMNRNArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReceiveMNRNArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReceiveMNRNArgument`.
     * @returns {ReceiveMNRNArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReceiveMNRNArgument)]: (ReceiveMNRNArgument)[_K] }): ReceiveMNRNArgument {
        return new ReceiveMNRNArgument(_o.envelope, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of ReceiveMNRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReceiveMNRNArgument: $.ComponentSpec[] = [
    /* FIXME: envelope COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReceiveMNRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReceiveMNRNArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReceiveMNRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReceiveMNRNArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReceiveMNRNArgument: $.ASN1Decoder<ReceiveMNRNArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiveMNRNArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceiveMNRNArgument (el: _Element): ReceiveMNRNArgument {
    if (!_cached_decoder_for_ReceiveMNRNArgument) { _cached_decoder_for_ReceiveMNRNArgument = function (el: _Element): ReceiveMNRNArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: MessageDeliveryEnvelope;
    let content!: MNRN;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<MessageDeliveryEnvelope>(() => _decode_MessageDeliveryEnvelope)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<MNRN>(() => _decode_MNRN)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ReceiveMNRNArgument,
        _extension_additions_list_spec_for_ReceiveMNRNArgument,
        _root_component_type_list_2_spec_for_ReceiveMNRNArgument,
        undefined,
    );
    return new ReceiveMNRNArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        content
    );
}; }
    return _cached_decoder_for_ReceiveMNRNArgument(el);
}

let _cached_encoder_for_ReceiveMNRNArgument: $.ASN1Encoder<ReceiveMNRNArgument> | null = null;

/**
 * @summary Encodes a(n) ReceiveMNRNArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiveMNRNArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReceiveMNRNArgument (value: ReceiveMNRNArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceiveMNRNArgument) { _cached_encoder_for_ReceiveMNRNArgument = function (value: ReceiveMNRNArgument, elGetter: $.ASN1Encoder<ReceiveMNRNArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageDeliveryEnvelope, $.BER)(value.envelope, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MNRN, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReceiveMNRNArgument(value, elGetter);
}


/* eslint-enable */
