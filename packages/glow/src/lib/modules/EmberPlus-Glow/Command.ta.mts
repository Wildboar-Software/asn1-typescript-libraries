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
import { CommandType, CommandType_subscribe /* IMPORTED_LONG_NAMED_INTEGER */, subscribe /* IMPORTED_SHORT_NAMED_INTEGER */, CommandType_unsubscribe /* IMPORTED_LONG_NAMED_INTEGER */, unsubscribe /* IMPORTED_SHORT_NAMED_INTEGER */, CommandType_getDirectory /* IMPORTED_LONG_NAMED_INTEGER */, getDirectory /* IMPORTED_SHORT_NAMED_INTEGER */, CommandType_invoke /* IMPORTED_LONG_NAMED_INTEGER */, invoke /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CommandType, _encode_CommandType } from "../EmberPlus-Glow/CommandType.ta.mjs";
// export { CommandType, CommandType_subscribe /* IMPORTED_LONG_NAMED_INTEGER */, subscribe /* IMPORTED_SHORT_NAMED_INTEGER */, CommandType_unsubscribe /* IMPORTED_LONG_NAMED_INTEGER */, unsubscribe /* IMPORTED_SHORT_NAMED_INTEGER */, CommandType_getDirectory /* IMPORTED_LONG_NAMED_INTEGER */, getDirectory /* IMPORTED_SHORT_NAMED_INTEGER */, CommandType_invoke /* IMPORTED_LONG_NAMED_INTEGER */, invoke /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CommandType, _encode_CommandType } from "../EmberPlus-Glow/CommandType.ta.mjs";
import { Command_options, _decode_Command_options, _encode_Command_options } from "../EmberPlus-Glow/Command-options.ta.mjs";
// export { Command_options, _decode_Command_options, _encode_Command_options } from "../EmberPlus-Glow/Command-options.ta.mjs";


/**
 * @summary Command
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Command ::= [APPLICATION 2] IMPLICIT
 *         SEQUENCE {
 *             number    [0] CommandType,
 *             options       CHOICE {
 *                 dirFieldMask [1] FieldFlags, -- only valid if number is getDirectory(32)
 *                 invocation   [2] Invocation -- only valid if number is invoke(33)
 *             } OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class Command {
    constructor (
        /**
         * @summary `number_`.
         * @public
         * @readonly
         */
        readonly number_: CommandType,
        /**
         * @summary `options`.
         * @public
         * @readonly
         */
        readonly options: OPTIONAL<Command_options>
    ) {}

    /**
     * @summary Restructures an object into a Command
     * @description
     * 
     * This takes an `object` and converts it to a `Command`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Command`.
     * @returns {Command}
     */
    public static _from_object (_o: { [_K in keyof (Command)]: (Command)[_K] }): Command {
        return new Command(_o.number_, _o.options);
    }


}

/**
 * @summary The Leading Root Component Types of Command
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Command: $.ComponentSpec[] = [
    new $.ComponentSpec("number", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("options", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of Command
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Command: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Command
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Command: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Command: $.ASN1Decoder<Command> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Command
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Command (el: _Element): Command {
    if (!_cached_decoder_for_Command) { _cached_decoder_for_Command = $._decode_implicit<Command>(() => function (el: _Element): Command {
    let number_!: CommandType;
    let options: OPTIONAL<Command_options>;
    const callbacks: $.DecodingMap = {
        "number": (_el: _Element): void => { number_ = $._decode_explicit<CommandType>(() => _decode_CommandType)(_el); },
        "options": (_el: _Element): void => { options = _decode_Command_options(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Command,
        _extension_additions_list_spec_for_Command,
        _root_component_type_list_2_spec_for_Command,
        undefined,
    );
    return new Command(
        number_,
        options
    );
}); }
    return _cached_decoder_for_Command(el);
}

let _cached_encoder_for_Command: $.ASN1Encoder<Command> | null = null;

/**
 * @summary Encodes a(n) Command into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Command, encoded as an ASN.1 Element.
 */
export
function _encode_Command (value: Command, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Command) { _cached_encoder_for_Command = $._encode_implicit(_TagClass.application, 2, () => function (value: Command, elGetter: $.ASN1Encoder<Command>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_CommandType, $.BER)(value.number_, $.BER),
            /* IF_ABSENT  */ ((value.options === undefined) ? undefined : _encode_Command_options(value.options, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Command(value, elGetter);
}


/* eslint-enable */
