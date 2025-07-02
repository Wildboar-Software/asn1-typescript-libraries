/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CRLScopeSyntax,
    _decode_CRLScopeSyntax,
    _encode_CRLScopeSyntax,
} from "../CertificateExtensions/CRLScopeSyntax.ta.mjs";
import {
    DeltaRefInfo,
    _decode_DeltaRefInfo,
    _encode_DeltaRefInfo,
} from "../CertificateExtensions/DeltaRefInfo.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary CRLReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLReferral ::= SEQUENCE {
 *   issuer          [0]  GeneralName OPTIONAL,
 *   location        [1]  GeneralName OPTIONAL,
 *   deltaRefInfo    [2]  DeltaRefInfo OPTIONAL,
 *   cRLScope             CRLScopeSyntax,
 *   lastUpdate      [3]  GeneralizedTime OPTIONAL,
 *   lastChangedCRL  [4]  GeneralizedTime OPTIONAL,
 *   ...
 * }
 * ```
 *
 */
export class CRLReferral {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralName>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<GeneralName>,
        /**
         * @summary `deltaRefInfo`.
         * @public
         * @readonly
         */
        readonly deltaRefInfo: OPTIONAL<DeltaRefInfo>,
        /**
         * @summary `cRLScope`.
         * @public
         * @readonly
         */
        readonly cRLScope: CRLScopeSyntax,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `lastChangedCRL`.
         * @public
         * @readonly
         */
        readonly lastChangedCRL: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CRLReferral
     * @description
     *
     * This takes an `object` and converts it to a `CRLReferral`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CRLReferral`.
     * @returns {CRLReferral}
     */
    public static _from_object(
        _o: { [_K in keyof CRLReferral]: CRLReferral[_K] }
    ): CRLReferral {
        return new CRLReferral(
            _o.issuer,
            _o.location,
            _o.deltaRefInfo,
            _o.cRLScope,
            _o.lastUpdate,
            _o.lastChangedCRL,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CRLReferral
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CRLReferral: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "location",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "deltaRefInfo",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "cRLScope",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "lastChangedCRL",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of CRLReferral
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CRLReferral: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CRLReferral
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CRLReferral: $.ComponentSpec[] = [];

let _cached_decoder_for_CRLReferral: $.ASN1Decoder<CRLReferral> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLReferral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLReferral} The decoded data structure.
 */
export function _decode_CRLReferral(el: _Element): CRLReferral {
    if (!_cached_decoder_for_CRLReferral) {
        _cached_decoder_for_CRLReferral = function (el: _Element): CRLReferral {
            let issuer: OPTIONAL<GeneralName>;
            let location: OPTIONAL<GeneralName>;
            let deltaRefInfo: OPTIONAL<DeltaRefInfo>;
            let cRLScope!: CRLScopeSyntax;
            let lastUpdate: OPTIONAL<GeneralizedTime>;
            let lastChangedCRL: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                location: (_el: _Element): void => {
                    location = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                deltaRefInfo: (_el: _Element): void => {
                    deltaRefInfo = $._decode_implicit<DeltaRefInfo>(
                        () => _decode_DeltaRefInfo
                    )(_el);
                },
                cRLScope: (_el: _Element): void => {
                    cRLScope = _decode_CRLScopeSyntax(_el);
                },
                lastUpdate: (_el: _Element): void => {
                    lastUpdate = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                lastChangedCRL: (_el: _Element): void => {
                    lastChangedCRL = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CRLReferral,
                _extension_additions_list_spec_for_CRLReferral,
                _root_component_type_list_2_spec_for_CRLReferral,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CRLReferral(
                issuer,
                location,
                deltaRefInfo,
                cRLScope,
                lastUpdate,
                lastChangedCRL,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CRLReferral(el);
}

let _cached_encoder_for_CRLReferral: $.ASN1Encoder<CRLReferral> | null = null;

/**
 * @summary Encodes a(n) CRLReferral into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReferral, encoded as an ASN.1 Element.
 */
export function _encode_CRLReferral(
    value: CRLReferral,
    elGetter: $.ASN1Encoder<CRLReferral>
): _Element {
    if (!_cached_encoder_for_CRLReferral) {
        _cached_encoder_for_CRLReferral = function (
            value: CRLReferral        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.DER
                                  )(value.issuer, $.DER),
                            /* IF_ABSENT  */ value.location === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralName,
                                      $.DER
                                  )(value.location, $.DER),
                            /* IF_ABSENT  */ value.deltaRefInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_DeltaRefInfo,
                                      $.DER
                                  )(value.deltaRefInfo, $.DER),
                            /* REQUIRED   */ _encode_CRLScopeSyntax(
                                value.cRLScope,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.lastUpdate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.lastUpdate, $.DER),
                            /* IF_ABSENT  */ value.lastChangedCRL === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.lastChangedCRL, $.DER),
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
    return _cached_encoder_for_CRLReferral(value, elGetter);
}


/* eslint-enable */
