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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { INTERACTIVE_MESSAGE } from '../E-health-command-response/INTERACTIVE-MESSAGE.oca';
export { INTERACTIVE_MESSAGE } from '../E-health-command-response/INTERACTIVE-MESSAGE.oca';

/* START_OF_SYMBOL_DEFINITION Identified_Command_Response_command */
/**
 * @summary Identified_Command_Response_command
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identified-Command-Response-command ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Identified_Command_Response_command {
    constructor(
        /**
         * @summary `message_id`.
         * @public
         * @readonly
         */
        readonly message_id: INTEGER,
        /**
         * @summary `message_content`.
         * @public
         * @readonly
         */
        readonly message_content: _Element
    ) {}

    /**
     * @summary Restructures an object into a Identified_Command_Response_command
     * @description
     *
     * This takes an `object` and converts it to a `Identified_Command_Response_command`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Identified_Command_Response_command`.
     * @returns {Identified_Command_Response_command}
     */
    public static _from_object(
        _o: {
            [_K in keyof Identified_Command_Response_command]: Identified_Command_Response_command[_K];
        }
    ): Identified_Command_Response_command {
        return new Identified_Command_Response_command(
            _o.message_id,
            _o.message_content
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Identified_Command_Response_command */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Identified_Command_Response_command */
/**
 * @summary The Leading Root Component Types of Identified_Command_Response_command
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Identified_Command_Response_command: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-id',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-content',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Identified_Command_Response_command */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Identified_Command_Response_command */
/**
 * @summary The Trailing Root Component Types of Identified_Command_Response_command
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Identified_Command_Response_command: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Identified_Command_Response_command */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Identified_Command_Response_command */
/**
 * @summary The Extension Addition Component Types of Identified_Command_Response_command
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Identified_Command_Response_command: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Identified_Command_Response_command */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identified_Command_Response_command */
let _cached_decoder_for_Identified_Command_Response_command: $.ASN1Decoder<Identified_Command_Response_command> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identified_Command_Response_command */

/* START_OF_SYMBOL_DEFINITION _decode_Identified_Command_Response_command */
/**
 * @summary Decodes an ASN.1 element into a(n) Identified_Command_Response_command
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identified_Command_Response_command} The decoded data structure.
 */
export function _decode_Identified_Command_Response_command(el: _Element) {
    if (!_cached_decoder_for_Identified_Command_Response_command) {
        _cached_decoder_for_Identified_Command_Response_command = function (
            el: _Element
        ): Identified_Command_Response_command {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Identified-Command-Response-command contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'message-id';
            sequence[1].name = 'message-content';
            let message_id!: INTEGER;
            let message_content!: _Element;
            message_id = $._decodeInteger(sequence[0]);
            message_content = $._decodeAny(sequence[1]);
            return new Identified_Command_Response_command(
                message_id,
                message_content
            );
        };
    }
    return _cached_decoder_for_Identified_Command_Response_command(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Identified_Command_Response_command */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identified_Command_Response_command */
let _cached_encoder_for_Identified_Command_Response_command: $.ASN1Encoder<Identified_Command_Response_command> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identified_Command_Response_command */

/* START_OF_SYMBOL_DEFINITION _encode_Identified_Command_Response_command */
/**
 * @summary Encodes a(n) Identified_Command_Response_command into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identified_Command_Response_command, encoded as an ASN.1 Element.
 */
export function _encode_Identified_Command_Response_command(
    value: Identified_Command_Response_command,
    elGetter: $.ASN1Encoder<Identified_Command_Response_command>
) {
    if (!_cached_encoder_for_Identified_Command_Response_command) {
        _cached_encoder_for_Identified_Command_Response_command = function (
            value: Identified_Command_Response_command,
            elGetter: $.ASN1Encoder<Identified_Command_Response_command>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(
                            value.message_id,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.message_content,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Identified_Command_Response_command(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Identified_Command_Response_command */

/* eslint-enable */
