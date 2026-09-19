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
import { MN_choice, _decode_MN_choice, _encode_MN_choice } from "../MMSInformationObjects/MN-choice.ta.mjs";
// export { MN_choice, _decode_MN_choice, _encode_MN_choice } from "../MMSInformationObjects/MN-choice.ta.mjs";


/**
 * @summary MN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MN ::= SET {
 *   COMPONENTS OF CommonFields,
 *   choice
 *     [0]  CHOICE {mn-non-receipt-fields              [0]  NonReceiptFields,
 *                  mn-receipt-fields                  [1]  ReceiptFields,
 *                  mn-other-notification-type-fields
 *                    [2]  OtherNotificationTypeFields}}
 * ```
 * 
 * @class
 */
export
class MN {
    constructor (
readonly _componentsOf_CommonFields: CommonFields,
        /**
         * @summary `choice`.
         * @public
         * @readonly
         */
        readonly choice: MN_choice
    ) {}

    /**
     * @summary Restructures an object into a MN
     * @description
     * 
     * This takes an `object` and converts it to a `MN`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MN`.
     * @returns {MN}
     */
    public static _from_object (_o: { [_K in keyof (MN)]: (MN)[_K] }): MN {
        return new MN(_o._componentsOf_CommonFields, _o.choice);
    }


}

/**
 * @summary The Leading Root Component Types of MN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MN: $.ComponentSpec[] = [
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */,
    new $.ComponentSpec("choice", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of MN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MN: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MN: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MN: $.ASN1Decoder<MN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MN (el: _Element): MN {
    if (!_cached_decoder_for_MN) { _cached_decoder_for_MN = function (el: _Element): MN {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let _componentsOf!: CommonFields;
    let choice!: MN_choice;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */,
        "choice": (_el: _Element): void => { choice = $._decode_explicit<MN_choice>(() => _decode_MN_choice)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MN,
        _extension_additions_list_spec_for_MN,
        _root_component_type_list_2_spec_for_MN,
        undefined,
    );
    return new MN( /* SET_CONSTRUCTOR_CALL */
        _componentsOf,
        choice
    );
}; }
    return _cached_decoder_for_MN(el);
}

let _cached_encoder_for_MN: $.ASN1Encoder<MN> | null = null;

/**
 * @summary Encodes a(n) MN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MN, encoded as an ASN.1 Element.
 */
export
function _encode_MN (value: MN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MN) { _cached_encoder_for_MN = function (value: MN, elGetter: $.ASN1Encoder<MN>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */,
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MN_choice, $.BER)(value.choice, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MN(value, elGetter);
}


/* eslint-enable */
