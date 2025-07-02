/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SyntaxIdentifier,
    _decode_SyntaxIdentifier,
    _encode_SyntaxIdentifier,
} from '../EDIMSInformationObjects/SyntaxIdentifier.ta.mjs';
import {
    SyntaxVersion,
    _decode_SyntaxVersion,
    _encode_SyntaxVersion,
} from '../EDIMSInformationObjects/SyntaxVersion.ta.mjs';
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
        $.hasTag(_TagClass.universal, 20)
    ),
    new $.ComponentSpec(
        'syntax-version',
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of SyntaxIdentifierField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SyntaxIdentifierField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SyntaxIdentifierField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SyntaxIdentifierField: $.ComponentSpec[] = [];

let _cached_decoder_for_SyntaxIdentifierField: $.ASN1Decoder<SyntaxIdentifierField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SyntaxIdentifierField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SyntaxIdentifierField} The decoded data structure.
 */
export function _decode_SyntaxIdentifierField(el: _Element): SyntaxIdentifierField {
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

let _cached_encoder_for_SyntaxIdentifierField: $.ASN1Encoder<SyntaxIdentifierField> | null = null;

/**
 * @summary Encodes a(n) SyntaxIdentifierField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SyntaxIdentifierField, encoded as an ASN.1 Element.
 */
export function _encode_SyntaxIdentifierField(
    value: SyntaxIdentifierField,
    elGetter: $.ASN1Encoder<SyntaxIdentifierField>
): _Element {
    if (!_cached_encoder_for_SyntaxIdentifierField) {
        _cached_encoder_for_SyntaxIdentifierField = function (
            value: SyntaxIdentifierField        ): _Element {
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


/* eslint-enable */
