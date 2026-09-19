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
import { Command, _decode_Command, _encode_Command } from "../MEDIA-GATEWAY-CONTROL/Command.ta.mjs";
// export { Command, _decode_Command, _encode_Command } from "../MEDIA-GATEWAY-CONTROL/Command.ta.mjs";


/**
 * @summary CommandRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommandRequest ::= SEQUENCE
 *     {
 *         command            [0] Command,
 *         optional        [1]    NULL OPTIONAL,
 *         wildcardReturn    [2] NULL OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class CommandRequest {
    constructor (
        /**
         * @summary `command`.
         * @public
         * @readonly
         */
        readonly command: Command,
        /**
         * @summary `optional`.
         * @public
         * @readonly
         */
        readonly optional: OPTIONAL<NULL>,
        /**
         * @summary `wildcardReturn`.
         * @public
         * @readonly
         */
        readonly wildcardReturn: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommandRequest
     * @description
     * 
     * This takes an `object` and converts it to a `CommandRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommandRequest`.
     * @returns {CommandRequest}
     */
    public static _from_object (_o: { [_K in keyof (CommandRequest)]: (CommandRequest)[_K] }): CommandRequest {
        return new CommandRequest(_o.command, _o.optional, _o.wildcardReturn, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommandRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommandRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("command", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("optional", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("wildcardReturn", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CommandRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommandRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommandRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommandRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommandRequest: $.ASN1Decoder<CommandRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommandRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommandRequest (el: _Element): CommandRequest {
    if (!_cached_decoder_for_CommandRequest) { _cached_decoder_for_CommandRequest = function (el: _Element): CommandRequest {
    let command!: Command;
    let optional: OPTIONAL<NULL>;
    let wildcardReturn: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "command": (_el: _Element): void => { command = $._decode_explicit<Command>(() => _decode_Command)(_el); },
        "optional": (_el: _Element): void => { optional = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "wildcardReturn": (_el: _Element): void => { wildcardReturn = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommandRequest,
        _extension_additions_list_spec_for_CommandRequest,
        _root_component_type_list_2_spec_for_CommandRequest,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommandRequest(
        command,
        optional,
        wildcardReturn,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommandRequest(el);
}

let _cached_encoder_for_CommandRequest: $.ASN1Encoder<CommandRequest> | null = null;

/**
 * @summary Encodes a(n) CommandRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommandRequest, encoded as an ASN.1 Element.
 */
export
function _encode_CommandRequest (value: CommandRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommandRequest) { _cached_encoder_for_CommandRequest = function (value: CommandRequest, elGetter: $.ASN1Encoder<CommandRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Command, $.BER)(value.command, $.BER),
            /* IF_ABSENT  */ ((value.optional === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.optional, $.BER)),
            /* IF_ABSENT  */ ((value.wildcardReturn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.wildcardReturn, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommandRequest(value, elGetter);
}


/* eslint-enable */
