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
 * @summary ChangeAutoForwardingArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAutoForwardingArgument ::= SET {
 *   autoforward-MMs          [0]  BOOLEAN,
 *   auto-forward-recipients  [1]  SEQUENCE OF ORName OPTIONAL,
 *   auto-forward-heading     [2]  Heading OPTIONAL,
 *   auto-forward-comment     [3]  AutoForwardComment OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeAutoForwardingArgument {
    constructor (
        /**
         * @summary `autoforward_MMs`.
         * @public
         * @readonly
         */
        readonly autoforward_MMs: BOOLEAN,
        /**
         * @summary `auto_forward_recipients`.
         * @public
         * @readonly
         */
        readonly auto_forward_recipients: OPTIONAL<ORName[]>,
        /**
         * @summary `auto_forward_heading`.
         * @public
         * @readonly
         */
        readonly auto_forward_heading: OPTIONAL<Heading>,
        /**
         * @summary `auto_forward_comment`.
         * @public
         * @readonly
         */
        readonly auto_forward_comment: OPTIONAL<AutoForwardComment>
    ) {}

    /**
     * @summary Restructures an object into a ChangeAutoForwardingArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAutoForwardingArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAutoForwardingArgument`.
     * @returns {ChangeAutoForwardingArgument}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAutoForwardingArgument)]: (ChangeAutoForwardingArgument)[_K] }): ChangeAutoForwardingArgument {
        return new ChangeAutoForwardingArgument(_o.autoforward_MMs, _o.auto_forward_recipients, _o.auto_forward_heading, _o.auto_forward_comment);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAutoForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAutoForwardingArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("autoforward-MMs", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auto-forward-recipients", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: auto-forward-heading COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: auto-forward-comment COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ChangeAutoForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAutoForwardingArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAutoForwardingArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAutoForwardingArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAutoForwardingArgument: $.ASN1Decoder<ChangeAutoForwardingArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAutoForwardingArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAutoForwardingArgument (el: _Element): ChangeAutoForwardingArgument {
    if (!_cached_decoder_for_ChangeAutoForwardingArgument) { _cached_decoder_for_ChangeAutoForwardingArgument = function (el: _Element): ChangeAutoForwardingArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let autoforward_MMs!: BOOLEAN;
    let auto_forward_recipients: OPTIONAL<ORName[]>;
    let auto_forward_heading: OPTIONAL<Heading>;
    let auto_forward_comment: OPTIONAL<AutoForwardComment>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "autoforward-MMs": (_el: _Element): void => { autoforward_MMs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "auto-forward-recipients": (_el: _Element): void => { auto_forward_recipients = $._decode_implicit<ORName[]>(() => $._decodeSequenceOf<ORName>(() => _decode_ORName))(_el); },
        "auto-forward-heading": (_el: _Element): void => { auto_forward_heading = $._decode_implicit<Heading>(() => _decode_Heading)(_el); },
        "auto-forward-comment": (_el: _Element): void => { auto_forward_comment = $._decode_implicit<AutoForwardComment>(() => _decode_AutoForwardComment)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeAutoForwardingArgument,
        _extension_additions_list_spec_for_ChangeAutoForwardingArgument,
        _root_component_type_list_2_spec_for_ChangeAutoForwardingArgument,
        undefined,
    );
    return new ChangeAutoForwardingArgument( /* SET_CONSTRUCTOR_CALL */
        autoforward_MMs,
        auto_forward_recipients,
        auto_forward_heading,
        auto_forward_comment
    );
}; }
    return _cached_decoder_for_ChangeAutoForwardingArgument(el);
}

let _cached_encoder_for_ChangeAutoForwardingArgument: $.ASN1Encoder<ChangeAutoForwardingArgument> | null = null;

/**
 * @summary Encodes a(n) ChangeAutoForwardingArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAutoForwardingArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAutoForwardingArgument (value: ChangeAutoForwardingArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAutoForwardingArgument) { _cached_encoder_for_ChangeAutoForwardingArgument = function (value: ChangeAutoForwardingArgument, elGetter: $.ASN1Encoder<ChangeAutoForwardingArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.autoforward_MMs, $.BER),
            /* IF_ABSENT  */ ((value.auto_forward_recipients === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ORName>(() => _encode_ORName, $.BER), $.BER)(value.auto_forward_recipients, $.BER)),
            /* IF_ABSENT  */ ((value.auto_forward_heading === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Heading, $.BER)(value.auto_forward_heading, $.BER)),
            /* IF_ABSENT  */ ((value.auto_forward_comment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AutoForwardComment, $.BER)(value.auto_forward_comment, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeAutoForwardingArgument(value, elGetter);
}


/* eslint-enable */
