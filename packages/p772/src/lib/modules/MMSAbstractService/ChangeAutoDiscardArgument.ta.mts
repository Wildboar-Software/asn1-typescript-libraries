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
 * @summary ChangeAutoDiscardArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAutoDiscardArgument ::= SET {
 *   auto-discard-expired-MMs   [0]  BOOLEAN,
 *   auto-discard-obsolete-MMs  [1]  BOOLEAN}
 * ```
 * 
 * @class
 */
export
class ChangeAutoDiscardArgument {
    constructor (
        /**
         * @summary `auto_discard_expired_MMs`.
         * @public
         * @readonly
         */
        readonly auto_discard_expired_MMs: BOOLEAN,
        /**
         * @summary `auto_discard_obsolete_MMs`.
         * @public
         * @readonly
         */
        readonly auto_discard_obsolete_MMs: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ChangeAutoDiscardArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAutoDiscardArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAutoDiscardArgument`.
     * @returns {ChangeAutoDiscardArgument}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAutoDiscardArgument)]: (ChangeAutoDiscardArgument)[_K] }): ChangeAutoDiscardArgument {
        return new ChangeAutoDiscardArgument(_o.auto_discard_expired_MMs, _o.auto_discard_obsolete_MMs);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAutoDiscardArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAutoDiscardArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("auto-discard-expired-MMs", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auto-discard-obsolete-MMs", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChangeAutoDiscardArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAutoDiscardArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAutoDiscardArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAutoDiscardArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAutoDiscardArgument: $.ASN1Decoder<ChangeAutoDiscardArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAutoDiscardArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAutoDiscardArgument (el: _Element): ChangeAutoDiscardArgument {
    if (!_cached_decoder_for_ChangeAutoDiscardArgument) { _cached_decoder_for_ChangeAutoDiscardArgument = function (el: _Element): ChangeAutoDiscardArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let auto_discard_expired_MMs!: BOOLEAN;
    let auto_discard_obsolete_MMs!: BOOLEAN;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "auto-discard-expired-MMs": (_el: _Element): void => { auto_discard_expired_MMs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "auto-discard-obsolete-MMs": (_el: _Element): void => { auto_discard_obsolete_MMs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeAutoDiscardArgument,
        _extension_additions_list_spec_for_ChangeAutoDiscardArgument,
        _root_component_type_list_2_spec_for_ChangeAutoDiscardArgument,
        undefined,
    );
    return new ChangeAutoDiscardArgument( /* SET_CONSTRUCTOR_CALL */
        auto_discard_expired_MMs,
        auto_discard_obsolete_MMs
    );
}; }
    return _cached_decoder_for_ChangeAutoDiscardArgument(el);
}

let _cached_encoder_for_ChangeAutoDiscardArgument: $.ASN1Encoder<ChangeAutoDiscardArgument> | null = null;

/**
 * @summary Encodes a(n) ChangeAutoDiscardArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAutoDiscardArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAutoDiscardArgument (value: ChangeAutoDiscardArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAutoDiscardArgument) { _cached_encoder_for_ChangeAutoDiscardArgument = function (value: ChangeAutoDiscardArgument, elGetter: $.ASN1Encoder<ChangeAutoDiscardArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.auto_discard_expired_MMs, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.auto_discard_obsolete_MMs, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeAutoDiscardArgument(value, elGetter);
}


/* eslint-enable */
