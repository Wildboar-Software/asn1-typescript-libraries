/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    GeneralizedTime,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "@wildboar/pki-stub";
import {
    Accuracy,
    _decode_Accuracy,
    _encode_Accuracy,
} from "../PKIXTSP/Accuracy.ta.mjs";
import {
    MessageImprint,
    _decode_MessageImprint,
    _encode_MessageImprint,
} from "../PKIXTSP/MessageImprint.ta.mjs";
import {
    TSAPolicyId,
    _decode_TSAPolicyId,
    _encode_TSAPolicyId,
} from "../PKIXTSP/TSAPolicyId.ta.mjs";
import {
    TSTInfo_version,
    _decode_TSTInfo_version,
    _encode_TSTInfo_version,
} from "../PKIXTSP/TSTInfo-version.ta.mjs";

/**
 * @summary TSTInfo
 * @description
 *
 * Time-stamp token info: DER-encoded as the `SignedData` encapsulated
 * content (`eContent`) of a `TimeStampToken`, with `eContentType`
 * `id-ct-TSTInfo`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * Conforming TSA servers MUST provide version 1 tokens. Among optional
 * fields, only `nonce` MUST be supported by servers. Conforming
 * requesters MUST recognize version 1 tokens with all optional fields
 * present, but need not understand extension semantics.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSTInfo ::= SEQUENCE  {
 *     version                      INTEGER  { v1(1) },
 *     policy                       TSAPolicyId,
 *     messageImprint               MessageImprint,
 *     -- MUST have the same value as the similar field in
 *     -- TimeStampReq
 *     serialNumber                 INTEGER,
 *     -- Time-Stamping users MUST be ready to accommodate integers
 *     -- up to 160 bits.
 *     genTime                      GeneralizedTime,
 *     accuracy                     Accuracy                 OPTIONAL,
 *     ordering                     BOOLEAN             DEFAULT FALSE,
 *     nonce                        INTEGER                  OPTIONAL,
 *     -- MUST be present if the similar field was present
 *     -- in TimeStampReq.  In that case it MUST have the same value.
 *     tsa                          [0] GeneralName          OPTIONAL,
 *     extensions                   [1] IMPLICIT Extensions  OPTIONAL   }
 * ```
 *
 */
export class TSTInfo {
    constructor(
        /**
         * @summary `version`.
         * @description
         *
         * Version of the time-stamp token; currently `v1(1)`. Conforming
         * servers MUST be able to provide version 1 tokens
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly version: TSTInfo_version,
        /**
         * @summary `policy`.
         * @description
         *
         * TSA policy under which the response was produced. If
         * `TimeStampReq.reqPolicy` was present, MUST equal that value;
         * otherwise return `unacceptedPolicy`. Policy MAY describe
         * conditions of use, token-log availability, etc.
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly policy: TSAPolicyId,
        /**
         * @summary `messageImprint`.
         * @description
         *
         * MUST have the same value as `TimeStampReq.messageImprint`,
         * provided the hash size matches `hashAlgorithm`
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly messageImprint: MessageImprint,
        /**
         * @summary `serialNumber`.
         * @description
         *
         * Integer assigned by the TSA to each `TimeStampToken`. MUST be
         * unique for each token from a given TSA (TSA name + serial
         * identify a unique token), including across service
         * interruptions. Users MUST accommodate integers up to 160 bits
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly serialNumber: OCTET_STRING,
        /**
         * @summary `genTime`.
         * @description
         *
         * Time at which the TSA created the token, as UTC
         * (`GeneralizedTime`). Syntax `YYYYMMDDhhmmss[.s...]Z`; MUST
         * include seconds. Fractional seconds allowed (unlike the
         * one-second limit in
         * [RFC 2459](https://datatracker.ietf.org/doc/html/rfc2459)
         * §4.1.2.5.2). DER: terminate with `Z`; decimal point is `.`;
         * omit trailing fractional zeros
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly genTime: GeneralizedTime,
        /**
         * @summary `accuracy`.
         * @description
         *
         * Optional time deviation around `genTime`. If absent, accuracy
         * MAY be available via `policy` (e.g., `TSAPolicyId`)
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly accuracy?: OPTIONAL<Accuracy>,
        /**
         * @summary `ordering`.
         * @description
         *
         * Default `FALSE`. If missing or `FALSE`, `genTime` only marks
         * creation time; ordering tokens (same or different TSAs)
         * requires the `genTime` difference to exceed the sum of
         * accuracies. If `TRUE`, every token from the same TSA can
         * always be ordered by `genTime` regardless of accuracy
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly ordering?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nonce`.
         * @description
         *
         * MUST be present if present in `TimeStampReq`, and MUST equal
         * that value. Only optional field that conforming servers MUST
         * support
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly nonce?: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tsa`.
         * @description
         *
         * Hint naming the TSA. If present, MUST match one of the subject
         * names in the certificate used to verify the token. Actual
         * signer identification is via `ESSCertID` in
         * `SigningCertificate` on `signerInfo` (ESS §5)
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly tsa?: OPTIONAL<GeneralName>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Generic extension point (`Extensions` as in
         * [RFC 2459](https://datatracker.ietf.org/doc/html/rfc2459)).
         * Extension types may be defined in standards or registered by
         * organizations
         * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
         *
         * @public
         * @readonly
         */
        readonly extensions?: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TSTInfo
     * @description
     *
     * This takes an `object` and converts it to a `TSTInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSTInfo`.
     * @returns {TSTInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TSTInfo]: TSTInfo[_K] }
    ): TSTInfo {
        return new TSTInfo(
            _o.version,
            _o.policy,
            _o.messageImprint,
            _o.serialNumber,
            _o.genTime,
            _o.accuracy,
            _o.ordering,
            _o.nonce,
            _o.tsa,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `ordering`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_ordering(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of TSTInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TSTInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "policy",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "messageImprint",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "genTime",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "accuracy",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "ordering",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        "nonce",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "tsa",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TSTInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TSTInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TSTInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TSTInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_TSTInfo: $.ASN1Decoder<TSTInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSTInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TSTInfo} The decoded data structure.
 */
export function _decode_TSTInfo(el: _Element): TSTInfo {
    if (!_cached_decoder_for_TSTInfo) {
        _cached_decoder_for_TSTInfo = function (el: _Element): TSTInfo {
            let version!: TSTInfo_version;
            let policy!: TSAPolicyId;
            let messageImprint!: MessageImprint;
            let serialNumber!: OCTET_STRING;
            let genTime!: GeneralizedTime;
            let accuracy: OPTIONAL<Accuracy>;
            let ordering: OPTIONAL<BOOLEAN> =
                TSTInfo._default_value_for_ordering;
            let nonce: OPTIONAL<OCTET_STRING>;
            let tsa: OPTIONAL<GeneralName>;
            let extensions: OPTIONAL<Extensions>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_TSTInfo_version(_el);
                },
                policy: (_el: _Element): void => {
                    policy = _decode_TSAPolicyId(_el);
                },
                messageImprint: (_el: _Element): void => {
                    messageImprint = _decode_MessageImprint(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = $._decodeBigInt(_el);
                },
                genTime: (_el: _Element): void => {
                    genTime = $._decodeGeneralizedTime(_el);
                },
                accuracy: (_el: _Element): void => {
                    accuracy = _decode_Accuracy(_el);
                },
                ordering: (_el: _Element): void => {
                    ordering = $._decodeBoolean(_el);
                },
                nonce: (_el: _Element): void => {
                    nonce = $._decodeBigInt(_el);
                },
                tsa: (_el: _Element): void => {
                    tsa = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TSTInfo,
                _extension_additions_list_spec_for_TSTInfo,
                _root_component_type_list_2_spec_for_TSTInfo,
                undefined
            );
            return new TSTInfo(
                version,
                policy,
                messageImprint,
                serialNumber,
                genTime,
                accuracy,
                ordering,
                nonce,
                tsa,
                extensions
            );
        };
    }
    return _cached_decoder_for_TSTInfo(el);
}

let _cached_encoder_for_TSTInfo: $.ASN1Encoder<TSTInfo> | null = null;

/**
 * @summary Encodes a(n) TSTInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSTInfo, encoded as an ASN.1 Element.
 */
export function _encode_TSTInfo(
    value: TSTInfo,
    elGetter: $.ASN1Encoder<TSTInfo>
): _Element {
    if (!_cached_encoder_for_TSTInfo) {
        _cached_encoder_for_TSTInfo = function (
            value: TSTInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TSTInfo_version(
                            value.version,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_TSAPolicyId(
                            value.policy,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_MessageImprint(
                            value.messageImprint,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.serialNumber,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.genTime,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.accuracy === undefined
                            ? undefined
                            : _encode_Accuracy(value.accuracy, $.DER),
                        /* IF_DEFAULT */ value.ordering === undefined ||
                        $.deepEq(
                            value.ordering,
                            TSTInfo._default_value_for_ordering
                        )
                            ? undefined
                            : $._encodeBoolean(value.ordering, $.DER),
                        /* IF_ABSENT  */ value.nonce === undefined
                            ? undefined
                            : $._encodeBigInt(value.nonce, $.DER),
                        /* IF_ABSENT  */ value.tsa === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_GeneralName,
                                  $.DER
                              )(value.tsa, $.DER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Extensions,
                                  $.DER
                              )(value.extensions, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TSTInfo(value, elGetter);
}


/* eslint-enable */
