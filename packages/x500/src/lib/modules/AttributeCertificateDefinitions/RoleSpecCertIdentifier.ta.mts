/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.mjs";
/**
 * @summary RoleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleSpecCertIdentifier ::= SEQUENCE {
 *   roleName              [0]  GeneralName,
 *   roleCertIssuer        [1]  GeneralName,
 *   roleCertSerialNumber  [2]  CertificateSerialNumber OPTIONAL,
 *   roleCertLocator       [3]  GeneralNames OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class RoleSpecCertIdentifier {
    constructor(
        /**
         * @summary `roleName`.
         * @public
         * @readonly
         */
        readonly roleName: GeneralName,
        /**
         * @summary `roleCertIssuer`.
         * @public
         * @readonly
         */
        readonly roleCertIssuer: GeneralName,
        /**
         * @summary `roleCertSerialNumber`.
         * @public
         * @readonly
         */
        readonly roleCertSerialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary `roleCertLocator`.
         * @public
         * @readonly
         */
        readonly roleCertLocator: OPTIONAL<GeneralNames>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoleSpecCertIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `RoleSpecCertIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoleSpecCertIdentifier`.
     * @returns {RoleSpecCertIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof RoleSpecCertIdentifier]: RoleSpecCertIdentifier[_K] }
    ): RoleSpecCertIdentifier {
        return new RoleSpecCertIdentifier(
            _o.roleName,
            _o.roleCertIssuer,
            _o.roleCertSerialNumber,
            _o.roleCertLocator,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of RoleSpecCertIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "roleName",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleCertIssuer",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleCertSerialNumber",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleCertLocator",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of RoleSpecCertIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RoleSpecCertIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [];

let _cached_decoder_for_RoleSpecCertIdentifier: $.ASN1Decoder<RoleSpecCertIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoleSpecCertIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleSpecCertIdentifier} The decoded data structure.
 */
export function _decode_RoleSpecCertIdentifier(el: _Element) {
    if (!_cached_decoder_for_RoleSpecCertIdentifier) {
        _cached_decoder_for_RoleSpecCertIdentifier = function (
            el: _Element
        ): RoleSpecCertIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let roleName!: GeneralName;
            let roleCertIssuer!: GeneralName;
            let roleCertSerialNumber: OPTIONAL<CertificateSerialNumber>;
            let roleCertLocator: OPTIONAL<GeneralNames>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                roleName: (_el: _Element): void => {
                    roleName = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                roleCertIssuer: (_el: _Element): void => {
                    roleCertIssuer = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                roleCertSerialNumber: (_el: _Element): void => {
                    roleCertSerialNumber = $._decode_implicit<CertificateSerialNumber>(
                        () => _decode_CertificateSerialNumber
                    )(_el);
                },
                roleCertLocator: (_el: _Element): void => {
                    roleCertLocator = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RoleSpecCertIdentifier,
                _extension_additions_list_spec_for_RoleSpecCertIdentifier,
                _root_component_type_list_2_spec_for_RoleSpecCertIdentifier,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RoleSpecCertIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ roleName,
                roleCertIssuer,
                roleCertSerialNumber,
                roleCertLocator,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RoleSpecCertIdentifier(el);
}

let _cached_encoder_for_RoleSpecCertIdentifier: $.ASN1Encoder<RoleSpecCertIdentifier> | null = null;

/**
 * @summary Encodes a(n) RoleSpecCertIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSpecCertIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RoleSpecCertIdentifier(
    value: RoleSpecCertIdentifier,
    elGetter: $.ASN1Encoder<RoleSpecCertIdentifier>
) {
    if (!_cached_encoder_for_RoleSpecCertIdentifier) {
        _cached_encoder_for_RoleSpecCertIdentifier = function (
            value: RoleSpecCertIdentifier        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_GeneralName,
                                $.DER
                            )(value.roleName, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_GeneralName,
                                $.DER
                            )(value.roleCertIssuer, $.DER),
                            /* IF_ABSENT  */ value.roleCertSerialNumber ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_CertificateSerialNumber,
                                      $.DER
                                  )(value.roleCertSerialNumber, $.DER),
                            /* IF_ABSENT  */ value.roleCertLocator === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_GeneralNames,
                                      $.DER
                                  )(value.roleCertLocator, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_RoleSpecCertIdentifier(value, elGetter);
}


/* eslint-enable */
