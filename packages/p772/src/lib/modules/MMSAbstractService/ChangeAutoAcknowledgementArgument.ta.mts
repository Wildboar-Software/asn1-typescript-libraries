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
 * @summary ChangeAutoAcknowledgementArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAutoAcknowledgementArgument ::= SET {
 *   auto-acknowledge-MMs                 [0]  BOOLEAN,
 *   auto-acknowledge-suppl-receipt-info  [1]  SupplementaryInformation}
 * ```
 * 
 * @class
 */
export
class ChangeAutoAcknowledgementArgument {
    constructor (
        /**
         * @summary `auto_acknowledge_MMs`.
         * @public
         * @readonly
         */
        readonly auto_acknowledge_MMs: BOOLEAN,
        /**
         * @summary `auto_acknowledge_suppl_receipt_info`.
         * @public
         * @readonly
         */
        readonly auto_acknowledge_suppl_receipt_info: SupplementaryInformation
    ) {}

    /**
     * @summary Restructures an object into a ChangeAutoAcknowledgementArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAutoAcknowledgementArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAutoAcknowledgementArgument`.
     * @returns {ChangeAutoAcknowledgementArgument}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAutoAcknowledgementArgument)]: (ChangeAutoAcknowledgementArgument)[_K] }): ChangeAutoAcknowledgementArgument {
        return new ChangeAutoAcknowledgementArgument(_o.auto_acknowledge_MMs, _o.auto_acknowledge_suppl_receipt_info);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAutoAcknowledgementArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAutoAcknowledgementArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("auto-acknowledge-MMs", false, $.hasTag(_TagClass.context, 0)),
    /* FIXME: auto-acknowledge-suppl-receipt-info COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ChangeAutoAcknowledgementArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAutoAcknowledgementArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAutoAcknowledgementArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAutoAcknowledgementArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAutoAcknowledgementArgument: $.ASN1Decoder<ChangeAutoAcknowledgementArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAutoAcknowledgementArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAutoAcknowledgementArgument (el: _Element): ChangeAutoAcknowledgementArgument {
    if (!_cached_decoder_for_ChangeAutoAcknowledgementArgument) { _cached_decoder_for_ChangeAutoAcknowledgementArgument = function (el: _Element): ChangeAutoAcknowledgementArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let auto_acknowledge_MMs!: BOOLEAN;
    let auto_acknowledge_suppl_receipt_info!: SupplementaryInformation;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "auto-acknowledge-MMs": (_el: _Element): void => { auto_acknowledge_MMs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "auto-acknowledge-suppl-receipt-info": (_el: _Element): void => { auto_acknowledge_suppl_receipt_info = $._decode_implicit<SupplementaryInformation>(() => _decode_SupplementaryInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeAutoAcknowledgementArgument,
        _extension_additions_list_spec_for_ChangeAutoAcknowledgementArgument,
        _root_component_type_list_2_spec_for_ChangeAutoAcknowledgementArgument,
        undefined,
    );
    return new ChangeAutoAcknowledgementArgument( /* SET_CONSTRUCTOR_CALL */
        auto_acknowledge_MMs,
        auto_acknowledge_suppl_receipt_info
    );
}; }
    return _cached_decoder_for_ChangeAutoAcknowledgementArgument(el);
}

let _cached_encoder_for_ChangeAutoAcknowledgementArgument: $.ASN1Encoder<ChangeAutoAcknowledgementArgument> | null = null;

/**
 * @summary Encodes a(n) ChangeAutoAcknowledgementArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAutoAcknowledgementArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAutoAcknowledgementArgument (value: ChangeAutoAcknowledgementArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAutoAcknowledgementArgument) { _cached_encoder_for_ChangeAutoAcknowledgementArgument = function (value: ChangeAutoAcknowledgementArgument, elGetter: $.ASN1Encoder<ChangeAutoAcknowledgementArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.auto_acknowledge_MMs, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SupplementaryInformation, $.BER)(value.auto_acknowledge_suppl_receipt_info, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeAutoAcknowledgementArgument(value, elGetter);
}


/* eslint-enable */
