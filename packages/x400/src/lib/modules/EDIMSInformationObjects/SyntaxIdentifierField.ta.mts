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
    SyntaxIdentifier,
    _decode_SyntaxIdentifier,
    _encode_SyntaxIdentifier,
} from '../EDIMSInformationObjects/SyntaxIdentifier.ta.mjs';
export {
    SyntaxIdentifier,
    _decode_SyntaxIdentifier,
    _encode_SyntaxIdentifier,
} from '../EDIMSInformationObjects/SyntaxIdentifier.ta.mjs';
import {
    SyntaxVersion,
    _decode_SyntaxVersion,
    _encode_SyntaxVersion,
} from '../EDIMSInformationObjects/SyntaxVersion.ta.mjs';
export {
    SyntaxVersion,
    _decode_SyntaxVersion,
    _encode_SyntaxVersion,
} from '../EDIMSInformationObjects/SyntaxVersion.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SyntaxIdentifierField */
/**
 * @summary SyntaxIdentifierField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SyntaxIdentifierField ::= SEQUENCE {
 *   syntax-identifier  SyntaxIdentifier,
 *   syntax-version     SyntaxVersion
 * }
 * ```
 *
 * @class
 */
export class SyntaxIdentifierField {
    constructor(
        /**
         * @summary `syntax_identifier`.
         * @public
         * @readonly
         */
        readonly syntax_identifier: SyntaxIdentifier,
        /**
         * @summary `syntax_version`.
         * @public
         * @readonly
         */
        readonly syntax_version: SyntaxVersion
    ) {}

    /**
     * @summary Restructures an object into a SyntaxIdentifierField
     * @description
     *
     * This takes an `object` and converts it to a `SyntaxIdentifierField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SyntaxIdentifierField`.
     * @returns {SyntaxIdentifierField}
     */
    public static _from_object(
        _o: { [_K in keyof SyntaxIdentifierField]: SyntaxIdentifierField[_K] }
    ): SyntaxIdentifierField {
        return new SyntaxIdentifierField(
            _o.syntax_identifier,
            _o.syntax_version
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SyntaxIdentifierField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SyntaxIdentifierField */
/**
 * @summary The Leading Root Component Types of SyntaxIdentifierField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SyntaxIdentifierField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'syntax-identifier',
        false,
        $.hasTag(_TagClass.universal, 20),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'syntax-version',
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SyntaxIdentifierField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SyntaxIdentifierField */
/**
 * @summary The Trailing Root Component Types of SyntaxIdentifierField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SyntaxIdentifierField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SyntaxIdentifierField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SyntaxIdentifierField */
/**
 * @summary The Extension Addition Component Types of SyntaxIdentifierField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SyntaxIdentifierField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SyntaxIdentifierField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxIdentifierField */
let _cached_decoder_for_SyntaxIdentifierField: $.ASN1Decoder<SyntaxIdentifierField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxIdentifierField */

/* START_OF_SYMBOL_DEFINITION _decode_SyntaxIdentifierField */
/**
 * @summary Decodes an ASN.1 element into a(n) SyntaxIdentifierField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SyntaxIdentifierField} The decoded data structure.
 */
export function _decode_SyntaxIdentifierField(el: _Element) {
    if (!_cached_decoder_for_SyntaxIdentifierField) {
        _cached_decoder_for_SyntaxIdentifierField = function (
            el: _Element
        ): SyntaxIdentifierField {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'SyntaxIdentifierField contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'syntax-identifier';
            sequence[1].name = 'syntax-version';
            let syntax_identifier!: SyntaxIdentifier;
            let syntax_version!: SyntaxVersion;
            syntax_identifier = _decode_SyntaxIdentifier(sequence[0]);
            syntax_version = _decode_SyntaxVersion(sequence[1]);
            return new SyntaxIdentifierField(syntax_identifier, syntax_version);
        };
    }
    return _cached_decoder_for_SyntaxIdentifierField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SyntaxIdentifierField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxIdentifierField */
let _cached_encoder_for_SyntaxIdentifierField: $.ASN1Encoder<SyntaxIdentifierField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxIdentifierField */

/* START_OF_SYMBOL_DEFINITION _encode_SyntaxIdentifierField */
/**
 * @summary Encodes a(n) SyntaxIdentifierField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SyntaxIdentifierField, encoded as an ASN.1 Element.
 */
export function _encode_SyntaxIdentifierField(
    value: SyntaxIdentifierField,
    elGetter: $.ASN1Encoder<SyntaxIdentifierField>
) {
    if (!_cached_encoder_for_SyntaxIdentifierField) {
        _cached_encoder_for_SyntaxIdentifierField = function (
            value: SyntaxIdentifierField,
            elGetter: $.ASN1Encoder<SyntaxIdentifierField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SyntaxIdentifier(
                            value.syntax_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SyntaxVersion(
                            value.syntax_version,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SyntaxIdentifierField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SyntaxIdentifierField */

/* eslint-enable */
