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
import { AE_title, _decode_AE_title, _encode_AE_title } from "../DOR-definition/AE-title.ta.mjs";
// export { AE_title, _decode_AE_title, _encode_AE_title } from "../DOR-definition/AE-title.ta.mjs";


/**
 * @summary Locational_identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Locational-identifier ::= SEQUENCE {
 *   presentation-address  [0]  PresentationAddress,
 *   ae-title              [1]  AE-title OPTIONAL,
 *   -- as defined in ISO 8650:1988/Cor.1:1990
 *   application-contexts  SET OF OBJECT IDENTIFIER
 * }
 * ```
 * 
 * @class
 */
export
class Locational_identifier {
    constructor (
        /**
         * @summary `presentation_address`.
         * @public
         * @readonly
         */
        readonly presentation_address: PresentationAddress,
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: OPTIONAL<AE_title>,
        /**
         * @summary `application_contexts`.
         * @public
         * @readonly
         */
        readonly application_contexts: OBJECT_IDENTIFIER[]
    ) {}

    /**
     * @summary Restructures an object into a Locational_identifier
     * @description
     * 
     * This takes an `object` and converts it to a `Locational_identifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Locational_identifier`.
     * @returns {Locational_identifier}
     */
    public static _from_object (_o: { [_K in keyof (Locational_identifier)]: (Locational_identifier)[_K] }): Locational_identifier {
        return new Locational_identifier(_o.presentation_address, _o.ae_title, _o.application_contexts);
    }


}

/**
 * @summary The Leading Root Component Types of Locational_identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Locational_identifier: $.ComponentSpec[] = [
    /* FIXME: presentation-address COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("ae-title", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("application-contexts", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of Locational_identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Locational_identifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Locational_identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Locational_identifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Locational_identifier: $.ASN1Decoder<Locational_identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Locational_identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Locational_identifier (el: _Element): Locational_identifier {
    if (!_cached_decoder_for_Locational_identifier) { _cached_decoder_for_Locational_identifier = function (el: _Element): Locational_identifier {
    let presentation_address!: PresentationAddress;
    let ae_title: OPTIONAL<AE_title>;
    let application_contexts!: OBJECT_IDENTIFIER[];
    const callbacks: $.DecodingMap = {
        "presentation-address": (_el: _Element): void => { presentation_address = $._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "ae-title": (_el: _Element): void => { ae_title = $._decode_explicit<AE_title>(() => _decode_AE_title)(_el); },
        "application-contexts": (_el: _Element): void => { application_contexts = $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Locational_identifier,
        _extension_additions_list_spec_for_Locational_identifier,
        _root_component_type_list_2_spec_for_Locational_identifier,
        undefined,
    );
    return new Locational_identifier(
        presentation_address,
        ae_title,
        application_contexts
    );
}; }
    return _cached_decoder_for_Locational_identifier(el);
}

let _cached_encoder_for_Locational_identifier: $.ASN1Encoder<Locational_identifier> | null = null;

/**
 * @summary Encodes a(n) Locational_identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Locational_identifier, encoded as an ASN.1 Element.
 */
export
function _encode_Locational_identifier (value: Locational_identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Locational_identifier) { _cached_encoder_for_Locational_identifier = function (value: Locational_identifier, elGetter: $.ASN1Encoder<Locational_identifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_PresentationAddress, $.BER)(value.presentation_address, $.BER),
            /* IF_ABSENT  */ ((value.ae_title === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_AE_title, $.BER)(value.ae_title, $.BER)),
            /* REQUIRED   */ $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER)(value.application_contexts, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Locational_identifier(value, elGetter);
}


/* eslint-enable */
