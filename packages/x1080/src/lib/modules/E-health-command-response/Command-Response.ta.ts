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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    EncryptionOptions,
    _decode_EncryptionOptions,
    _encode_EncryptionOptions,
} from '../E-health-setup/EncryptionOptions.ta.js';
export {
    EncryptionOptions,
    _decode_EncryptionOptions,
    _encode_EncryptionOptions,
} from '../E-health-setup/EncryptionOptions.ta.js';
import {
    IntegrityOptions,
    _decode_IntegrityOptions,
    _encode_IntegrityOptions,
} from '../E-health-setup/IntegrityOptions.ta.js';
export {
    IntegrityOptions,
    _decode_IntegrityOptions,
    _encode_IntegrityOptions,
} from '../E-health-setup/IntegrityOptions.ta.js';

/* START_OF_SYMBOL_DEFINITION Command_Response */
/**
 * @summary Command_Response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Command-Response ::= SEQUENCE {
 *   encryptionOptions  EncryptionOptions,
 *   integrityOptions   IntegrityOptions,
 *   content
 *     OCTET STRING
 *       (CONSTRAINED BY {-- encoding of an Identified-Command-Response value by the current ---- encoding rules followed by an encryption operation if --
 *
 *          -- encryptionOptions is TRUE -- })
 * }
 * ```
 *
 * @class
 */
export class Command_Response {
    constructor(
        /**
         * @summary `encryptionOptions`.
         * @public
         * @readonly
         */
        readonly encryptionOptions: EncryptionOptions,
        /**
         * @summary `integrityOptions`.
         * @public
         * @readonly
         */
        readonly integrityOptions: IntegrityOptions,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a Command_Response
     * @description
     *
     * This takes an `object` and converts it to a `Command_Response`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Command_Response`.
     * @returns {Command_Response}
     */
    public static _from_object(
        _o: { [_K in keyof Command_Response]: Command_Response[_K] }
    ): Command_Response {
        return new Command_Response(
            _o.encryptionOptions,
            _o.integrityOptions,
            _o.content
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Command_Response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Command_Response */
/**
 * @summary The Leading Root Component Types of Command_Response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Command_Response: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'encryptionOptions',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'integrityOptions',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Command_Response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Command_Response */
/**
 * @summary The Trailing Root Component Types of Command_Response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Command_Response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Command_Response */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Command_Response */
/**
 * @summary The Extension Addition Component Types of Command_Response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Command_Response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Command_Response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Command_Response */
let _cached_decoder_for_Command_Response: $.ASN1Decoder<Command_Response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Command_Response */

/* START_OF_SYMBOL_DEFINITION _decode_Command_Response */
/**
 * @summary Decodes an ASN.1 element into a(n) Command_Response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Command_Response} The decoded data structure.
 */
export function _decode_Command_Response(el: _Element) {
    if (!_cached_decoder_for_Command_Response) {
        _cached_decoder_for_Command_Response = function (
            el: _Element
        ): Command_Response {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'Command-Response contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'encryptionOptions';
            sequence[1].name = 'integrityOptions';
            sequence[2].name = 'content';
            let encryptionOptions!: EncryptionOptions;
            let integrityOptions!: IntegrityOptions;
            let content!: OCTET_STRING;
            encryptionOptions = _decode_EncryptionOptions(sequence[0]);
            integrityOptions = _decode_IntegrityOptions(sequence[1]);
            content = $._decodeOctetString(sequence[2]);
            return new Command_Response(
                encryptionOptions,
                integrityOptions,
                content
            );
        };
    }
    return _cached_decoder_for_Command_Response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Command_Response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Command_Response */
let _cached_encoder_for_Command_Response: $.ASN1Encoder<Command_Response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Command_Response */

/* START_OF_SYMBOL_DEFINITION _encode_Command_Response */
/**
 * @summary Encodes a(n) Command_Response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Command_Response, encoded as an ASN.1 Element.
 */
export function _encode_Command_Response(
    value: Command_Response,
    elGetter: $.ASN1Encoder<Command_Response>
) {
    if (!_cached_encoder_for_Command_Response) {
        _cached_encoder_for_Command_Response = function (
            value: Command_Response,
            elGetter: $.ASN1Encoder<Command_Response>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EncryptionOptions(
                            value.encryptionOptions,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_IntegrityOptions(
                            value.integrityOptions,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.content,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Command_Response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Command_Response */

/* eslint-enable */
