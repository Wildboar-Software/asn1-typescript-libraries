/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta.mjs";
import {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta.mjs";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta.mjs";
import {
    Version,
    Version_v1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Version,
    _encode_Version,
} from "../Wrapper/Version.ta.mjs";
import {
    WrpError,
    _decode_WrpError,
    _encode_WrpError,
    _enum_for_WrpError,
} from "../Wrapper/WrpError.ta.mjs";
/**
 * @summary TbsHandshakeSecAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeSecAbort ::= SEQUENCE {
 *   version      Version DEFAULT {v1},
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   diag         WrpError OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsHandshakeSecAbort {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: OPTIONAL<WrpError>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeSecAbort
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeSecAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeSecAbort`.
     * @returns {TbsHandshakeSecAbort}
     */
    public static _from_object(
        _o: { [_K in keyof TbsHandshakeSecAbort]: TbsHandshakeSecAbort[_K] }
    ): TbsHandshakeSecAbort {
        return new TbsHandshakeSecAbort(
            _o.version,
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.diag,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_WrpError;
}

/**
 * @summary The Leading Root Component Types of TbsHandshakeSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeSecAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "diag",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of TbsHandshakeSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeSecAbort: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TbsHandshakeSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeSecAbort: $.ComponentSpec[] = [];

let _cached_decoder_for_TbsHandshakeSecAbort: $.ASN1Decoder<TbsHandshakeSecAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeSecAbort} The decoded data structure.
 */
export function _decode_TbsHandshakeSecAbort(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeSecAbort) {
        _cached_decoder_for_TbsHandshakeSecAbort = function (
            el: _Element
        ): TbsHandshakeSecAbort {
            let version: OPTIONAL<Version> =
                TbsHandshakeSecAbort._default_value_for_version;
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let diag: OPTIONAL<WrpError>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                sigAlg: (_el: _Element): void => {
                    sigAlg = _decode_AlgorithmIdentifier(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
                diag: (_el: _Element): void => {
                    diag = _decode_WrpError(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeSecAbort,
                _extension_additions_list_spec_for_TbsHandshakeSecAbort,
                _root_component_type_list_2_spec_for_TbsHandshakeSecAbort,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsHandshakeSecAbort(
                version,
                sigAlg,
                assoID,
                time,
                pkiPath,
                diag,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeSecAbort(el);
}

let _cached_encoder_for_TbsHandshakeSecAbort: $.ASN1Encoder<TbsHandshakeSecAbort> | null = null;

/**
 * @summary Encodes a(n) TbsHandshakeSecAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeSecAbort(
    value: TbsHandshakeSecAbort,
    elGetter: $.ASN1Encoder<TbsHandshakeSecAbort>
) {
    if (!_cached_encoder_for_TbsHandshakeSecAbort) {
        _cached_encoder_for_TbsHandshakeSecAbort = function (
            value: TbsHandshakeSecAbort        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsHandshakeSecAbort._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.DER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.diag === undefined
                                ? undefined
                                : _encode_WrpError(value.diag, $.DER),
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
    return _cached_encoder_for_TbsHandshakeSecAbort(value, elGetter);
}


/* eslint-enable */
