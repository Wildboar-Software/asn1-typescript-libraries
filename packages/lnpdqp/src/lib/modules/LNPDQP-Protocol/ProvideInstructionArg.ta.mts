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
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../LNPDQP-Protocol/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../LNPDQP-Protocol/ServiceKey.ta.mjs";
import { Digits, _decode_Digits, _encode_Digits } from "../LNPDQP-Protocol/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../LNPDQP-Protocol/Digits.ta.mjs";
import { OriginatingStationType, _decode_OriginatingStationType, _encode_OriginatingStationType } from "../LNPDQP-Protocol/OriginatingStationType.ta.mjs";
// export { OriginatingStationType, _decode_OriginatingStationType, _encode_OriginatingStationType } from "../LNPDQP-Protocol/OriginatingStationType.ta.mjs";


/**
 * @summary ProvideInstructionArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideInstructionArg ::= [PRIVATE 18] SET {
 *             calledPartyNumber [10] ServiceKey,
 * --            callingPartyANI [4] Digits OPTIONAL,
 * --            originatingLATA [4] Digits OPTIONAL,
 * -- as2wrs does not like two equal tags
 *             digits    [4] Digits,
 *             oli [PRIVATE 69] OriginatingStationType
 *         }
 * ```
 * 
 * @class
 */
export
class ProvideInstructionArg {
    constructor (
        /**
         * @summary `calledPartyNumber`.
         * @public
         * @readonly
         */
        readonly calledPartyNumber: ServiceKey,
        /**
         * @summary `digits`.
         * @public
         * @readonly
         */
        readonly digits: Digits,
        /**
         * @summary `oli`.
         * @public
         * @readonly
         */
        readonly oli: OriginatingStationType
    ) {}

    /**
     * @summary Restructures an object into a ProvideInstructionArg
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideInstructionArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideInstructionArg`.
     * @returns {ProvideInstructionArg}
     */
    public static _from_object (_o: { [_K in keyof (ProvideInstructionArg)]: (ProvideInstructionArg)[_K] }): ProvideInstructionArg {
        return new ProvideInstructionArg(_o.calledPartyNumber, _o.digits, _o.oli);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideInstructionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideInstructionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyNumber", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("digits", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("oli", false, $.hasTag(_TagClass.private, 69))
];

/**
 * @summary The Trailing Root Component Types of ProvideInstructionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideInstructionArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideInstructionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideInstructionArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvideInstructionArg: $.ASN1Decoder<ProvideInstructionArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideInstructionArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideInstructionArg (el: _Element): ProvideInstructionArg {
    if (!_cached_decoder_for_ProvideInstructionArg) { _cached_decoder_for_ProvideInstructionArg = $._decode_implicit<ProvideInstructionArg>(() => function (el: _Element): ProvideInstructionArg {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let calledPartyNumber!: ServiceKey;
    let digits!: Digits;
    let oli!: OriginatingStationType;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_explicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "digits": (_el: _Element): void => { digits = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "oli": (_el: _Element): void => { oli = $._decode_implicit<OriginatingStationType>(() => _decode_OriginatingStationType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideInstructionArg,
        _extension_additions_list_spec_for_ProvideInstructionArg,
        _root_component_type_list_2_spec_for_ProvideInstructionArg,
        undefined,
    );
    return new ProvideInstructionArg( /* SET_CONSTRUCTOR_CALL */
        calledPartyNumber,
        digits,
        oli
    );
}); }
    return _cached_decoder_for_ProvideInstructionArg(el);
}

let _cached_encoder_for_ProvideInstructionArg: $.ASN1Encoder<ProvideInstructionArg> | null = null;

/**
 * @summary Encodes a(n) ProvideInstructionArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideInstructionArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideInstructionArg (value: ProvideInstructionArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideInstructionArg) { _cached_encoder_for_ProvideInstructionArg = $._encode_implicit(_TagClass.private, 18, () => function (value: ProvideInstructionArg, elGetter: $.ASN1Encoder<ProvideInstructionArg>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 10, () => _encode_ServiceKey, $.BER)(value.calledPartyNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Digits, $.BER)(value.digits, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.private, 69, () => _encode_OriginatingStationType, $.BER)(value.oli, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProvideInstructionArg(value, elGetter);
}


/* eslint-enable */
