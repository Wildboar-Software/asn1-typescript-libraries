/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    CertificateListContent_revokedCertificates_Item,
    _decode_CertificateListContent_revokedCertificates_Item,
    _encode_CertificateListContent_revokedCertificates_Item,
} from "../AuthenticationFramework/CertificateListContent-revokedCertificates-Item.ta.mjs";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../AuthenticationFramework/Extensions.ta.mjs";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta.mjs";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "../AuthenticationFramework/Version.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary CertificateListContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListContent ::= SEQUENCE {
 *   version              Version OPTIONAL,
 *   -- if present, version shall be v2
 *   signature            AlgorithmIdentifier{{SupportedAlgorithms}},
 *   issuer               Name,
 *   thisUpdate           Time,
 *   nextUpdate           Time OPTIONAL,
 *   revokedCertificates  SEQUENCE OF SEQUENCE {
 *     serialNumber         CertificateSerialNumber,
 *     revocationDate       Time,
 *     crlEntryExtensions   Extensions OPTIONAL,
 *     ...} OPTIONAL,
 *   ...,
 *   ...,
 *   crlExtensions   [0]  Extensions OPTIONAL }
 * ```
 *
 */
export class CertificateListContent {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `thisUpdate`.
         * @public
         * @readonly
         */
        readonly thisUpdate: Time,
        /**
         * @summary `nextUpdate`.
         * @public
         * @readonly
         */
        readonly nextUpdate: OPTIONAL<Time>,
        /**
         * @summary `revokedCertificates`.
         * @public
         * @readonly
         */
        readonly revokedCertificates: OPTIONAL<
            CertificateListContent_revokedCertificates_Item[]
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `crlExtensions`.
         * @public
         * @readonly
         */
        readonly crlExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a CertificateListContent
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListContent`.
     * @returns {CertificateListContent}
     */
    public static _from_object(
        _o: { [_K in keyof CertificateListContent]: CertificateListContent[_K] }
    ): CertificateListContent {
        return new CertificateListContent(
            _o.version,
            _o.signature,
            _o.issuer,
            _o.thisUpdate,
            _o.nextUpdate,
            _o.revokedCertificates,
            _o._unrecognizedExtensionsList,
            _o.crlExtensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificateListContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec(
        "thisUpdate",
        false,
        $.or(
            $.hasTag(_TagClass.universal, 23),
            $.hasTag(_TagClass.universal, 24)
        )
    ),
    new $.ComponentSpec(
        'nextUpdate',
        true,
        $.or(
            $.hasTag(_TagClass.universal, 23),
            $.hasTag(_TagClass.universal, 24)
        )
    ),
    new $.ComponentSpec(
        "revokedCertificates",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificateListContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "crlExtensions",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Extension Addition Component Types of CertificateListContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListContent: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificateListContent: $.ASN1Decoder<CertificateListContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListContent} The decoded data structure.
 */
export function _decode_CertificateListContent(el: _Element): CertificateListContent {
    if (!_cached_decoder_for_CertificateListContent) {
        _cached_decoder_for_CertificateListContent = function (
            el: _Element
        ): CertificateListContent {
            let version: OPTIONAL<Version>;
            let signature!: AlgorithmIdentifier;
            let issuer!: Name;
            let thisUpdate!: Time;
            let nextUpdate: OPTIONAL<Time>;
            let revokedCertificates: OPTIONAL<
                CertificateListContent_revokedCertificates_Item[]
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            let crlExtensions: OPTIONAL<Extensions>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                thisUpdate: (_el: _Element): void => {
                    thisUpdate = _decode_Time(_el);
                },
                nextUpdate: (_el: _Element): void => {
                    nextUpdate = _decode_Time(_el);
                },
                revokedCertificates: (_el: _Element): void => {
                    revokedCertificates = $._decodeSequenceOf<CertificateListContent_revokedCertificates_Item>(
                        () =>
                            _decode_CertificateListContent_revokedCertificates_Item
                    )(_el);
                },
                crlExtensions: (_el: _Element): void => {
                    crlExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListContent,
                _extension_additions_list_spec_for_CertificateListContent,
                _root_component_type_list_2_spec_for_CertificateListContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateListContent(
                version,
                signature,
                issuer,
                thisUpdate,
                nextUpdate,
                revokedCertificates,
                _unrecognizedExtensionsList,
                crlExtensions
            );
        };
    }
    return _cached_decoder_for_CertificateListContent(el);
}

let _cached_encoder_for_CertificateListContent: $.ASN1Encoder<CertificateListContent> | null = null;

/**
 * @summary Encodes a(n) CertificateListContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListContent, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListContent(
    value: CertificateListContent,
    elGetter: $.ASN1Encoder<CertificateListContent>
): _Element {
    if (!_cached_encoder_for_CertificateListContent) {
        _cached_encoder_for_CertificateListContent = function (
            value: CertificateListContent        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.version === undefined
                                ? undefined
                                : _encode_Version(value.version, $.DER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.DER),
                            /* REQUIRED   */ _encode_Time(
                                value.thisUpdate,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.nextUpdate === undefined
                                ? undefined
                                : _encode_Time(value.nextUpdate, $.DER),
                            /* IF_ABSENT  */ value.revokedCertificates ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<CertificateListContent_revokedCertificates_Item>(
                                      () =>
                                          _encode_CertificateListContent_revokedCertificates_Item,
                                      $.DER
                                  )(value.revokedCertificates, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.crlExtensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Extensions,
                                      $.DER
                                  )(value.crlExtensions, $.DER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertificateListContent(value, elGetter);
}


/* eslint-enable */
