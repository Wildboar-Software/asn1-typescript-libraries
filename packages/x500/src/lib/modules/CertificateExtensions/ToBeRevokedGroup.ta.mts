/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateGroup,
    _decode_CertificateGroup,
    _encode_CertificateGroup,
} from "../CertificateExtensions/CertificateGroup.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
import {
    ReasonInfo,
    _decode_ReasonInfo,
    _encode_ReasonInfo,
} from "../CertificateExtensions/ReasonInfo.ta.mjs";
/**
 * @summary ToBeRevokedGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeRevokedGroup ::= SEQUENCE {
 *   certificateIssuer  [0]  GeneralName OPTIONAL,
 *   reasonInfo         [1]  ReasonInfo OPTIONAL,
 *   revocationTime          GeneralizedTime,
 *   certificateGroup        CertificateGroup,
 *   ... }
 * ```
 *
 */
export class ToBeRevokedGroup {
    constructor(
        /**
         * @summary `certificateIssuer`.
         * @public
         * @readonly
         */
        readonly certificateIssuer: OPTIONAL<GeneralName>,
        /**
         * @summary `reasonInfo`.
         * @public
         * @readonly
         */
        readonly reasonInfo: OPTIONAL<ReasonInfo>,
        /**
         * @summary `revocationTime`.
         * @public
         * @readonly
         */
        readonly revocationTime: GeneralizedTime,
        /**
         * @summary `certificateGroup`.
         * @public
         * @readonly
         */
        readonly certificateGroup: CertificateGroup,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ToBeRevokedGroup
     * @description
     *
     * This takes an `object` and converts it to a `ToBeRevokedGroup`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ToBeRevokedGroup`.
     * @returns {ToBeRevokedGroup}
     */
    public static _from_object(
        _o: { [_K in keyof ToBeRevokedGroup]: ToBeRevokedGroup[_K] }
    ): ToBeRevokedGroup {
        return new ToBeRevokedGroup(
            _o.certificateIssuer,
            _o.reasonInfo,
            _o.revocationTime,
            _o.certificateGroup,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificateIssuer",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "reasonInfo",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "revocationTime",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "certificateGroup",
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [];

let _cached_decoder_for_ToBeRevokedGroup: $.ASN1Decoder<ToBeRevokedGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ToBeRevokedGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeRevokedGroup} The decoded data structure.
 */
export function _decode_ToBeRevokedGroup(el: _Element): ToBeRevokedGroup {
    if (!_cached_decoder_for_ToBeRevokedGroup) {
        _cached_decoder_for_ToBeRevokedGroup = function (
            el: _Element
        ): ToBeRevokedGroup {
            let certificateIssuer: OPTIONAL<GeneralName>;
            let reasonInfo: OPTIONAL<ReasonInfo>;
            let revocationTime!: GeneralizedTime;
            let certificateGroup!: CertificateGroup;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                certificateIssuer: (_el: _Element): void => {
                    certificateIssuer = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                reasonInfo: (_el: _Element): void => {
                    reasonInfo = $._decode_implicit<ReasonInfo>(
                        () => _decode_ReasonInfo
                    )(_el);
                },
                revocationTime: (_el: _Element): void => {
                    revocationTime = $._decodeGeneralizedTime(_el);
                },
                certificateGroup: (_el: _Element): void => {
                    certificateGroup = _decode_CertificateGroup(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ToBeRevokedGroup,
                _extension_additions_list_spec_for_ToBeRevokedGroup,
                _root_component_type_list_2_spec_for_ToBeRevokedGroup,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ToBeRevokedGroup(
                certificateIssuer,
                reasonInfo,
                revocationTime,
                certificateGroup,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ToBeRevokedGroup(el);
}

let _cached_encoder_for_ToBeRevokedGroup: $.ASN1Encoder<ToBeRevokedGroup> | null = null;

/**
 * @summary Encodes a(n) ToBeRevokedGroup into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeRevokedGroup, encoded as an ASN.1 Element.
 */
export function _encode_ToBeRevokedGroup(
    value: ToBeRevokedGroup,
    elGetter: $.ASN1Encoder<ToBeRevokedGroup>
): _Element {
    if (!_cached_encoder_for_ToBeRevokedGroup) {
        _cached_encoder_for_ToBeRevokedGroup = function (
            value: ToBeRevokedGroup        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificateIssuer ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.DER
                                  )(value.certificateIssuer, $.DER),
                            /* IF_ABSENT  */ value.reasonInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonInfo,
                                      $.DER
                                  )(value.reasonInfo, $.DER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.revocationTime,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertificateGroup(
                                value.certificateGroup,
                                $.DER
                            ),
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
    return _cached_encoder_for_ToBeRevokedGroup(value, elGetter);
}


/* eslint-enable */
