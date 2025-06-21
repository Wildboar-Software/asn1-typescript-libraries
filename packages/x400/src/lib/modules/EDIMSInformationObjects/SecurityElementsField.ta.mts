/* eslint-disable */
import {
    OPTIONAL,
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
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
import {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.mjs';
import {
    EDIApplicationSecurityElementsField,
    _decode_EDIApplicationSecurityElementsField,
    _encode_EDIApplicationSecurityElementsField,
} from '../EDIMSInformationObjects/EDIApplicationSecurityElementsField.ta.mjs';
import {
    SecurityExtensionsField,
    _decode_SecurityExtensionsField,
    _encode_SecurityExtensionsField,
} from '../EDIMSInformationObjects/SecurityExtensionsField.ta.mjs';
/**
 * @summary SecurityElementsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityElementsField ::= SEQUENCE {
 *   original-content                   [0]  Content OPTIONAL,
 *   original-content-integrity-check   [1]  ContentIntegrityCheck OPTIONAL,
 *   edi-application-security-elements
 *     [2]  EDIApplicationSecurityElementsField OPTIONAL,
 *   security-extensions                [3]  SecurityExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SecurityElementsField {
    constructor(
        /**
         * @summary `original_content`.
         * @public
         * @readonly
         */
        readonly original_content: OPTIONAL<Content>,
        /**
         * @summary `original_content_integrity_check`.
         * @public
         * @readonly
         */
        readonly original_content_integrity_check: OPTIONAL<ContentIntegrityCheck>,
        /**
         * @summary `edi_application_security_elements`.
         * @public
         * @readonly
         */
        readonly edi_application_security_elements: OPTIONAL<EDIApplicationSecurityElementsField>,
        /**
         * @summary `security_extensions`.
         * @public
         * @readonly
         */
        readonly security_extensions: OPTIONAL<SecurityExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a SecurityElementsField
     * @description
     *
     * This takes an `object` and converts it to a `SecurityElementsField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityElementsField`.
     * @returns {SecurityElementsField}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityElementsField]: SecurityElementsField[_K] }
    ): SecurityElementsField {
        return new SecurityElementsField(
            _o.original_content,
            _o.original_content_integrity_check,
            _o.edi_application_security_elements,
            _o.security_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of SecurityElementsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityElementsField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'original-content',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'original-content-integrity-check',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'edi-application-security-elements',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'security-extensions',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SecurityElementsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityElementsField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SecurityElementsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityElementsField: $.ComponentSpec[] = [];

let _cached_decoder_for_SecurityElementsField: $.ASN1Decoder<SecurityElementsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityElementsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityElementsField} The decoded data structure.
 */
export function _decode_SecurityElementsField(el: _Element) {
    if (!_cached_decoder_for_SecurityElementsField) {
        _cached_decoder_for_SecurityElementsField = function (
            el: _Element
        ): SecurityElementsField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let original_content: OPTIONAL<Content>;
            let original_content_integrity_check: OPTIONAL<ContentIntegrityCheck>;
            let edi_application_security_elements: OPTIONAL<EDIApplicationSecurityElementsField>;
            let security_extensions: OPTIONAL<SecurityExtensionsField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'original-content': (_el: _Element): void => {
                    original_content = $._decode_implicit<Content>(
                        () => _decode_Content
                    )(_el);
                },
                'original-content-integrity-check': (_el: _Element): void => {
                    original_content_integrity_check = $._decode_implicit<ContentIntegrityCheck>(
                        () => _decode_ContentIntegrityCheck
                    )(_el);
                },
                'edi-application-security-elements': (_el: _Element): void => {
                    edi_application_security_elements = $._decode_implicit<EDIApplicationSecurityElementsField>(
                        () => _decode_EDIApplicationSecurityElementsField
                    )(_el);
                },
                'security-extensions': (_el: _Element): void => {
                    security_extensions = $._decode_implicit<SecurityExtensionsField>(
                        () => _decode_SecurityExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityElementsField,
                _extension_additions_list_spec_for_SecurityElementsField,
                _root_component_type_list_2_spec_for_SecurityElementsField,
                undefined
            );
            return new SecurityElementsField /* SEQUENCE_CONSTRUCTOR_CALL */(
                original_content,
                original_content_integrity_check,
                edi_application_security_elements,
                security_extensions
            );
        };
    }
    return _cached_decoder_for_SecurityElementsField(el);
}

let _cached_encoder_for_SecurityElementsField: $.ASN1Encoder<SecurityElementsField> | null = null;

/**
 * @summary Encodes a(n) SecurityElementsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityElementsField, encoded as an ASN.1 Element.
 */
export function _encode_SecurityElementsField(
    value: SecurityElementsField,
    elGetter: $.ASN1Encoder<SecurityElementsField>
) {
    if (!_cached_encoder_for_SecurityElementsField) {
        _cached_encoder_for_SecurityElementsField = function (
            value: SecurityElementsField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.original_content === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Content,
                                  $.BER
                              )(value.original_content, $.BER),
                        /* IF_ABSENT  */ value.original_content_integrity_check ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ContentIntegrityCheck,
                                  $.BER
                              )(value.original_content_integrity_check, $.BER),
                        /* IF_ABSENT  */ value.edi_application_security_elements ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      _encode_EDIApplicationSecurityElementsField,
                                  $.BER
                              )(value.edi_application_security_elements, $.BER),
                        /* IF_ABSENT  */ value.security_extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_SecurityExtensionsField,
                                  $.BER
                              )(value.security_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SecurityElementsField(value, elGetter);
}


/* eslint-enable */
