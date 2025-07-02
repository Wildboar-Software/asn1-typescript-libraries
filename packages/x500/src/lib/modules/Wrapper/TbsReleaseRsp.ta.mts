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
/**
 * @summary TbsReleaseRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsReleaseRsp ::= SEQUENCE {
 *   version      Version DEFAULT {v1},
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   ... }
 * ```
 *
 */
export class TbsReleaseRsp {
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsReleaseRsp
     * @description
     *
     * This takes an `object` and converts it to a `TbsReleaseRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsReleaseRsp`.
     * @returns {TbsReleaseRsp}
     */
    public static _from_object(
        _o: { [_K in keyof TbsReleaseRsp]: TbsReleaseRsp[_K] }
    ): TbsReleaseRsp {
        return new TbsReleaseRsp(
            _o.version,
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version(): Version {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of TbsReleaseRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsReleaseRsp: $.ComponentSpec[] = [
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
];

/**
 * @summary The Trailing Root Component Types of TbsReleaseRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsReleaseRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TbsReleaseRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsReleaseRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_TbsReleaseRsp: $.ASN1Decoder<TbsReleaseRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbsReleaseRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsReleaseRsp} The decoded data structure.
 */
export function _decode_TbsReleaseRsp(el: _Element): TbsReleaseRsp {
    if (!_cached_decoder_for_TbsReleaseRsp) {
        _cached_decoder_for_TbsReleaseRsp = function (
            el: _Element
        ): TbsReleaseRsp {
            let version: OPTIONAL<Version> =
                TbsReleaseRsp._default_value_for_version;
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
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
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsReleaseRsp,
                _extension_additions_list_spec_for_TbsReleaseRsp,
                _root_component_type_list_2_spec_for_TbsReleaseRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsReleaseRsp(
                version,
                sigAlg,
                assoID,
                time,
                pkiPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsReleaseRsp(el);
}

let _cached_encoder_for_TbsReleaseRsp: $.ASN1Encoder<TbsReleaseRsp> | null = null;

/**
 * @summary Encodes a(n) TbsReleaseRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsReleaseRsp, encoded as an ASN.1 Element.
 */
export function _encode_TbsReleaseRsp(
    value: TbsReleaseRsp,
    elGetter: $.ASN1Encoder<TbsReleaseRsp>
): _Element {
    if (!_cached_encoder_for_TbsReleaseRsp) {
        _cached_encoder_for_TbsReleaseRsp = function (
            value: TbsReleaseRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsReleaseRsp._default_value_for_version
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
    return _cached_encoder_for_TbsReleaseRsp(value, elGetter);
}


/* eslint-enable */
