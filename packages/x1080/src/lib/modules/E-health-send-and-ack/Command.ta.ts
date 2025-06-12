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

/* START_OF_SYMBOL_DEFINITION Command */
/**
 * @summary Command
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Command ::= SEQUENCE {
 *   encryptionOptions  EncryptionOptions,
 *   integrityOptions   IntegrityOptions,
 *   content
 *     OCTET STRING
 *       (CONSTRAINED BY {-- encoding of an Identified-Simple-Message value by the current ---- encoding rules included in a CMS ContentInfo sequence for encryption --
 *
 *          -- and/or integrity if needed -- })
 * }
 * ```
 *
 * @class
 */
export class Command {
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
    public static _from_object(
        _o: { [_K in keyof Command]: Command[_K] }
    ): Command {
        return new Command(
            _o.encryptionOptions,
            _o.integrityOptions,
            _o.content
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Command */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Command */
/**
 * @summary The Leading Root Component Types of Command
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Command: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Command */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Command */
/**
 * @summary The Trailing Root Component Types of Command
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Command: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Command */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Command */
/**
 * @summary The Extension Addition Component Types of Command
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Command: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Command */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Command */
let _cached_decoder_for_Command: $.ASN1Decoder<Command> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Command */

/* START_OF_SYMBOL_DEFINITION _decode_Command */
/**
 * @summary Decodes an ASN.1 element into a(n) Command
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Command} The decoded data structure.
 */
export function _decode_Command(el: _Element) {
    if (!_cached_decoder_for_Command) {
        _cached_decoder_for_Command = function (el: _Element): Command {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'Command contained only ' +
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
            return new Command(encryptionOptions, integrityOptions, content);
        };
    }
    return _cached_decoder_for_Command(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Command */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Command */
let _cached_encoder_for_Command: $.ASN1Encoder<Command> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Command */

/* START_OF_SYMBOL_DEFINITION _encode_Command */
/**
 * @summary Encodes a(n) Command into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Command, encoded as an ASN.1 Element.
 */
export function _encode_Command(
    value: Command,
    elGetter: $.ASN1Encoder<Command>
) {
    if (!_cached_encoder_for_Command) {
        _cached_encoder_for_Command = function (
            value: Command,
            elGetter: $.ASN1Encoder<Command>
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
    return _cached_encoder_for_Command(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Command */

/* eslint-enable */
