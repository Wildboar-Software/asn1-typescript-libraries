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
    IpnSecurityResponse_content_or_arguments,
    _decode_IpnSecurityResponse_content_or_arguments,
    _encode_IpnSecurityResponse_content_or_arguments,
} from '../IPMSSecurityExtensions/IpnSecurityResponse-content-or-arguments.ta.mjs';
import {
    SecurityDiagnosticCode,
    _decode_SecurityDiagnosticCode,
    _encode_SecurityDiagnosticCode,
} from '../IPMSSecurityExtensions/SecurityDiagnosticCode.ta.mjs';
/**
 * @summary IpnSecurityResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IpnSecurityResponse ::= SET {
 *   content-or-arguments
 *     CHOICE {original-content             OriginalContent,
 *             original-security-arguments
 *               SET {original-content-integrity-check
 *                      [0]  OriginalContentIntegrityCheck OPTIONAL,
 *                    original-message-origin-authentication-check
 *                      [1]  OriginalMessageOriginAuthenticationCheck OPTIONAL,
 *                    original-message-token
 *                      [2]  OriginalMessageToken OPTIONAL}},
 *   security-diagnostic-code  SecurityDiagnosticCode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IpnSecurityResponse {
    constructor(
        /**
         * @summary `content_or_arguments`.
         * @public
         * @readonly
         */
        readonly content_or_arguments: IpnSecurityResponse_content_or_arguments,
        /**
         * @summary `security_diagnostic_code`.
         * @public
         * @readonly
         */
        readonly security_diagnostic_code: OPTIONAL<SecurityDiagnosticCode>
    ) {}

    /**
     * @summary Restructures an object into a IpnSecurityResponse
     * @description
     *
     * This takes an `object` and converts it to a `IpnSecurityResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpnSecurityResponse`.
     * @returns {IpnSecurityResponse}
     */
    public static _from_object(
        _o: { [_K in keyof IpnSecurityResponse]: IpnSecurityResponse[_K] }
    ): IpnSecurityResponse {
        return new IpnSecurityResponse(
            _o.content_or_arguments,
            _o.security_diagnostic_code
        );
    }
}

/**
 * @summary The Leading Root Component Types of IpnSecurityResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IpnSecurityResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-or-arguments',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'security-diagnostic-code',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of IpnSecurityResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IpnSecurityResponse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IpnSecurityResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IpnSecurityResponse: $.ComponentSpec[] = [];

let _cached_decoder_for_IpnSecurityResponse: $.ASN1Decoder<IpnSecurityResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpnSecurityResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IpnSecurityResponse} The decoded data structure.
 */
export function _decode_IpnSecurityResponse(el: _Element) {
    if (!_cached_decoder_for_IpnSecurityResponse) {
        _cached_decoder_for_IpnSecurityResponse = function (
            el: _Element
        ): IpnSecurityResponse {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let content_or_arguments!: IpnSecurityResponse_content_or_arguments;
            let security_diagnostic_code: OPTIONAL<SecurityDiagnosticCode>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-or-arguments': (_el: _Element): void => {
                    content_or_arguments = _decode_IpnSecurityResponse_content_or_arguments(
                        _el
                    );
                },
                'security-diagnostic-code': (_el: _Element): void => {
                    security_diagnostic_code = _decode_SecurityDiagnosticCode(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IpnSecurityResponse,
                _extension_additions_list_spec_for_IpnSecurityResponse,
                _root_component_type_list_2_spec_for_IpnSecurityResponse,
                undefined
            );
            return new IpnSecurityResponse /* SET_CONSTRUCTOR_CALL */(
                content_or_arguments,
                security_diagnostic_code
            );
        };
    }
    return _cached_decoder_for_IpnSecurityResponse(el);
}

let _cached_encoder_for_IpnSecurityResponse: $.ASN1Encoder<IpnSecurityResponse> | null = null;

/**
 * @summary Encodes a(n) IpnSecurityResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpnSecurityResponse, encoded as an ASN.1 Element.
 */
export function _encode_IpnSecurityResponse(
    value: IpnSecurityResponse,
    elGetter: $.ASN1Encoder<IpnSecurityResponse>
) {
    if (!_cached_encoder_for_IpnSecurityResponse) {
        _cached_encoder_for_IpnSecurityResponse = function (
            value: IpnSecurityResponse        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IpnSecurityResponse_content_or_arguments(
                            value.content_or_arguments,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.security_diagnostic_code ===
                        undefined
                            ? undefined
                            : _encode_SecurityDiagnosticCode(
                                  value.security_diagnostic_code,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IpnSecurityResponse(value, elGetter);
}


/* eslint-enable */
