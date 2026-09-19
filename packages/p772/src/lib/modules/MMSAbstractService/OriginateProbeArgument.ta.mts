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
import { MM, _decode_MM, _encode_MM } from "../MMSInformationObjects/MM.ta.mjs";
// export { MM, _decode_MM, _encode_MM } from "../MMSInformationObjects/MM.ta.mjs";


/**
 * @summary OriginateProbeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginateProbeArgument ::= SET {
 *   envelope  [0]  ProbeSubmissionEnvelope,
 *   content   [1]  MM}
 * ```
 * 
 * @class
 */
export
class OriginateProbeArgument {
    constructor (
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: ProbeSubmissionEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: MM
    ) {}

    /**
     * @summary Restructures an object into a OriginateProbeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `OriginateProbeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginateProbeArgument`.
     * @returns {OriginateProbeArgument}
     */
    public static _from_object (_o: { [_K in keyof (OriginateProbeArgument)]: (OriginateProbeArgument)[_K] }): OriginateProbeArgument {
        return new OriginateProbeArgument(_o.envelope, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of OriginateProbeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginateProbeArgument: $.ComponentSpec[] = [
    /* FIXME: envelope COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OriginateProbeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginateProbeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginateProbeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginateProbeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginateProbeArgument: $.ASN1Decoder<OriginateProbeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginateProbeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginateProbeArgument (el: _Element): OriginateProbeArgument {
    if (!_cached_decoder_for_OriginateProbeArgument) { _cached_decoder_for_OriginateProbeArgument = function (el: _Element): OriginateProbeArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: ProbeSubmissionEnvelope;
    let content!: MM;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<ProbeSubmissionEnvelope>(() => _decode_ProbeSubmissionEnvelope)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<MM>(() => _decode_MM)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OriginateProbeArgument,
        _extension_additions_list_spec_for_OriginateProbeArgument,
        _root_component_type_list_2_spec_for_OriginateProbeArgument,
        undefined,
    );
    return new OriginateProbeArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        content
    );
}; }
    return _cached_decoder_for_OriginateProbeArgument(el);
}

let _cached_encoder_for_OriginateProbeArgument: $.ASN1Encoder<OriginateProbeArgument> | null = null;

/**
 * @summary Encodes a(n) OriginateProbeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginateProbeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_OriginateProbeArgument (value: OriginateProbeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginateProbeArgument) { _cached_encoder_for_OriginateProbeArgument = function (value: OriginateProbeArgument, elGetter: $.ASN1Encoder<OriginateProbeArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProbeSubmissionEnvelope, $.BER)(value.envelope, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MM, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OriginateProbeArgument(value, elGetter);
}


/* eslint-enable */
