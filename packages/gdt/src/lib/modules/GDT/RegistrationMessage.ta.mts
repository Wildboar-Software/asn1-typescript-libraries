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
import { RegistrationAction, RegistrationAction_ra_reg_request /* IMPORTED_LONG_NAMED_INTEGER */, ra_reg_request /* IMPORTED_SHORT_NAMED_INTEGER */, RegistrationAction_ra_reg_result /* IMPORTED_LONG_NAMED_INTEGER */, ra_reg_result /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RegistrationAction, _encode_RegistrationAction } from "../GDT/RegistrationAction.ta.mjs";
// export { RegistrationAction, RegistrationAction_ra_reg_request /* IMPORTED_LONG_NAMED_INTEGER */, ra_reg_request /* IMPORTED_SHORT_NAMED_INTEGER */, RegistrationAction_ra_reg_result /* IMPORTED_LONG_NAMED_INTEGER */, ra_reg_result /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RegistrationAction, _encode_RegistrationAction } from "../GDT/RegistrationAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary RegistrationMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationMessage ::= SEQUENCE {
 *     reg-action      RegistrationAction,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RegistrationMessage {
    constructor (
        /**
         * @summary `reg_action`.
         * @public
         * @readonly
         */
        readonly reg_action: RegistrationAction,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RegistrationMessage
     * @description
     * 
     * This takes an `object` and converts it to a `RegistrationMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegistrationMessage`.
     * @returns {RegistrationMessage}
     */
    public static _from_object (_o: { [_K in keyof (RegistrationMessage)]: (RegistrationMessage)[_K] }): RegistrationMessage {
        return new RegistrationMessage(_o.reg_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RegistrationMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegistrationMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("reg-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RegistrationMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegistrationMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegistrationMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegistrationMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RegistrationMessage: $.ASN1Decoder<RegistrationMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationMessage (el: _Element): RegistrationMessage {
    if (!_cached_decoder_for_RegistrationMessage) { _cached_decoder_for_RegistrationMessage = function (el: _Element): RegistrationMessage {
    let reg_action!: RegistrationAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "reg-action": (_el: _Element): void => { reg_action = _decode_RegistrationAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RegistrationMessage,
        _extension_additions_list_spec_for_RegistrationMessage,
        _root_component_type_list_2_spec_for_RegistrationMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RegistrationMessage(
        reg_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RegistrationMessage(el);
}

let _cached_encoder_for_RegistrationMessage: $.ASN1Encoder<RegistrationMessage> | null = null;

/**
 * @summary Encodes a(n) RegistrationMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationMessage, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationMessage (value: RegistrationMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationMessage) { _cached_encoder_for_RegistrationMessage = function (value: RegistrationMessage, elGetter: $.ASN1Encoder<RegistrationMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RegistrationAction(value.reg_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RegistrationMessage(value, elGetter);
}


/* eslint-enable */
