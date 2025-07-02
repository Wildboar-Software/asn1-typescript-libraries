/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    EDIApplicationSecurityElement,
    _decode_EDIApplicationSecurityElement,
    _encode_EDIApplicationSecurityElement,
} from '../EDIMSInformationObjects/EDIApplicationSecurityElement.ta.mjs';
import {
    EDIApplicationSecurityExtensions,
    _decode_EDIApplicationSecurityExtensions,
    _encode_EDIApplicationSecurityExtensions,
} from '../EDIMSInformationObjects/EDIApplicationSecurityExtensions.ta.mjs';
/**
 * @summary EDIApplicationSecurityElementsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIApplicationSecurityElementsField ::= SEQUENCE {
 *   edi-application-security-element
 *     [0]  EDIApplicationSecurityElement OPTIONAL,
 *   edi-encrypted-primary-bodypart       [1]  BOOLEAN OPTIONAL,
 *   edi-application-security-extensions
 *     [2]  EDIApplicationSecurityExtensions OPTIONAL
 * }
 * ```
 *
 */
export class EDIApplicationSecurityElementsField {
    constructor(
        /**
         * @summary `edi_application_security_element`.
         * @public
         * @readonly
         */
        readonly edi_application_security_element: OPTIONAL<EDIApplicationSecurityElement>,
        /**
         * @summary `edi_encrypted_primary_bodypart`.
         * @public
         * @readonly
         */
        readonly edi_encrypted_primary_bodypart: OPTIONAL<BOOLEAN>,
        /**
         * @summary `edi_application_security_extensions`.
         * @public
         * @readonly
         */
        readonly edi_application_security_extensions: OPTIONAL<EDIApplicationSecurityExtensions>
    ) {}

    /**
     * @summary Restructures an object into a EDIApplicationSecurityElementsField
     * @description
     *
     * This takes an `object` and converts it to a `EDIApplicationSecurityElementsField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIApplicationSecurityElementsField`.
     * @returns {EDIApplicationSecurityElementsField}
     */
    public static _from_object(
        _o: {
            [_K in keyof EDIApplicationSecurityElementsField]: EDIApplicationSecurityElementsField[_K];
        }
    ): EDIApplicationSecurityElementsField {
        return new EDIApplicationSecurityElementsField(
            _o.edi_application_security_element,
            _o.edi_encrypted_primary_bodypart,
            _o.edi_application_security_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of EDIApplicationSecurityElementsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIApplicationSecurityElementsField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'edi-application-security-element',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'edi-encrypted-primary-bodypart',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'edi-application-security-extensions',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDIApplicationSecurityElementsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIApplicationSecurityElementsField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIApplicationSecurityElementsField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIApplicationSecurityElementsField: $.ComponentSpec[] = [];

let _cached_decoder_for_EDIApplicationSecurityElementsField: $.ASN1Decoder<EDIApplicationSecurityElementsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIApplicationSecurityElementsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIApplicationSecurityElementsField} The decoded data structure.
 */
export function _decode_EDIApplicationSecurityElementsField(el: _Element): EDIApplicationSecurityElementsField {
    if (!_cached_decoder_for_EDIApplicationSecurityElementsField) {
        _cached_decoder_for_EDIApplicationSecurityElementsField = function (
            el: _Element
        ): EDIApplicationSecurityElementsField {
            let edi_application_security_element: OPTIONAL<EDIApplicationSecurityElement>;
            let edi_encrypted_primary_bodypart: OPTIONAL<BOOLEAN>;
            let edi_application_security_extensions: OPTIONAL<EDIApplicationSecurityExtensions>;
            const callbacks: $.DecodingMap = {
                'edi-application-security-element': (_el: _Element): void => {
                    edi_application_security_element = $._decode_implicit<EDIApplicationSecurityElement>(
                        () => _decode_EDIApplicationSecurityElement
                    )(_el);
                },
                'edi-encrypted-primary-bodypart': (_el: _Element): void => {
                    edi_encrypted_primary_bodypart = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'edi-application-security-extensions': (
                    _el: _Element
                ): void => {
                    edi_application_security_extensions = $._decode_implicit<EDIApplicationSecurityExtensions>(
                        () => _decode_EDIApplicationSecurityExtensions
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIApplicationSecurityElementsField,
                _extension_additions_list_spec_for_EDIApplicationSecurityElementsField,
                _root_component_type_list_2_spec_for_EDIApplicationSecurityElementsField,
                undefined
            );
            return new EDIApplicationSecurityElementsField (
                edi_application_security_element,
                edi_encrypted_primary_bodypart,
                edi_application_security_extensions
            );
        };
    }
    return _cached_decoder_for_EDIApplicationSecurityElementsField(el);
}

let _cached_encoder_for_EDIApplicationSecurityElementsField: $.ASN1Encoder<EDIApplicationSecurityElementsField> | null = null;

/**
 * @summary Encodes a(n) EDIApplicationSecurityElementsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIApplicationSecurityElementsField, encoded as an ASN.1 Element.
 */
export function _encode_EDIApplicationSecurityElementsField(
    value: EDIApplicationSecurityElementsField,
    elGetter: $.ASN1Encoder<EDIApplicationSecurityElementsField>
): _Element {
    if (!_cached_encoder_for_EDIApplicationSecurityElementsField) {
        _cached_encoder_for_EDIApplicationSecurityElementsField = function (
            value: EDIApplicationSecurityElementsField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.edi_application_security_element ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EDIApplicationSecurityElement,
                                  $.BER
                              )(value.edi_application_security_element, $.BER),
                        /* IF_ABSENT  */ value.edi_encrypted_primary_bodypart ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.edi_encrypted_primary_bodypart, $.BER),
                        /* IF_ABSENT  */ value.edi_application_security_extensions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      _encode_EDIApplicationSecurityExtensions,
                                  $.BER
                              )(
                                  value.edi_application_security_extensions,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIApplicationSecurityElementsField(
        value,
        elGetter
    );
}


/* eslint-enable */
