/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    Version,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
} from '../AuthenticationContextForBiometrics/Version.ta.mjs';
import {
    HashList,
    _decode_HashList,
    _encode_HashList,
} from '../AuthenticationContextForBiometrics/HashList.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';
import {
    PatronFormat,
    _decode_PatronFormat,
    _encode_PatronFormat,
} from '@wildboar/cbeff/src/lib/modules/CBEFF-DATA-ELEMENTS/PatronFormat.ta.mjs';
import {
    UserInformation,
    _decode_UserInformation,
    _encode_UserInformation,
} from '../AuthenticationContextForBiometrics/UserInformation.ta.mjs';
import {
    PKICertificateInformation,
    _decode_PKICertificateInformation,
    _encode_PKICertificateInformation,
} from '../AuthenticationContextForBiometrics/PKICertificateInformation.ta.mjs';
import {
    SequenceOfACBioInstances,
    _decode_SequenceOfACBioInstances,
    _encode_SequenceOfACBioInstances,
} from '../AuthenticationContextForBiometrics/SequenceOfACBioInstances.ta.mjs';

/**
 * @summary BDBForBRTC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BDBForBRTC ::= SEQUENCE {
 *     version                     Version DEFAULT v0,
 *     originalBDBHashList         HashList,
 *     originalBIRReferrer         URI OPTIONAL,
 *     originalBIRPatronFormat     PatronFormat,
 *     originalBDBPosition         INTEGER,
 *     userInformation             UserInformation OPTIONAL,
 *     pkiCertificateInformation   PKICertificateInformation OPTIONAL,
 *     enrolmentACBioInstances     SequenceOfACBioInstances OPTIONAL }
 * ```
 *
 * @class
 */
export class BDBForBRTC {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `originalBDBHashList`.
         * @public
         * @readonly
         */
        readonly originalBDBHashList: HashList,
        /**
         * @summary `originalBIRReferrer`.
         * @public
         * @readonly
         */
        readonly originalBIRReferrer: OPTIONAL<URI>,
        /**
         * @summary `originalBIRPatronFormat`.
         * @public
         * @readonly
         */
        readonly originalBIRPatronFormat: PatronFormat,
        /**
         * @summary `originalBDBPosition`.
         * @public
         * @readonly
         */
        readonly originalBDBPosition: INTEGER,
        /**
         * @summary `userInformation`.
         * @public
         * @readonly
         */
        readonly userInformation: OPTIONAL<UserInformation>,
        /**
         * @summary `pkiCertificateInformation`.
         * @public
         * @readonly
         */
        readonly pkiCertificateInformation: OPTIONAL<PKICertificateInformation>,
        /**
         * @summary `enrolmentACBioInstances`.
         * @public
         * @readonly
         */
        readonly enrolmentACBioInstances: OPTIONAL<SequenceOfACBioInstances>
    ) {}

    /**
     * @summary Restructures an object into a BDBForBRTC
     * @description
     *
     * This takes an `object` and converts it to a `BDBForBRTC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDBForBRTC`.
     * @returns {BDBForBRTC}
     */
    public static _from_object(
        _o: { [_K in keyof BDBForBRTC]: BDBForBRTC[_K] }
    ): BDBForBRTC {
        return new BDBForBRTC(
            _o.version,
            _o.originalBDBHashList,
            _o.originalBIRReferrer,
            _o.originalBIRPatronFormat,
            _o.originalBDBPosition,
            _o.userInformation,
            _o.pkiCertificateInformation,
            _o.enrolmentACBioInstances
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return v0;
    }
}


/**
 * @summary The Leading Root Component Types of BDBForBRTC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BDBForBRTC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'originalBDBHashList',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'originalBIRReferrer',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'originalBIRPatronFormat',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'originalBDBPosition',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'userInformation',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'pkiCertificateInformation',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'enrolmentACBioInstances',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
];


/**
 * @summary The Trailing Root Component Types of BDBForBRTC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BDBForBRTC: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BDBForBRTC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BDBForBRTC: $.ComponentSpec[] = [];


let _cached_decoder_for_BDBForBRTC: $.ASN1Decoder<BDBForBRTC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BDBForBRTC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BDBForBRTC} The decoded data structure.
 */
export function _decode_BDBForBRTC(el: _Element) {
    if (!_cached_decoder_for_BDBForBRTC) {
        _cached_decoder_for_BDBForBRTC = function (el: _Element): BDBForBRTC {
            let version: OPTIONAL<Version> =
                BDBForBRTC._default_value_for_version;
            let originalBDBHashList!: HashList;
            let originalBIRReferrer: OPTIONAL<URI>;
            let originalBIRPatronFormat!: PatronFormat;
            let originalBDBPosition!: INTEGER;
            let userInformation: OPTIONAL<UserInformation>;
            let pkiCertificateInformation: OPTIONAL<PKICertificateInformation>;
            let enrolmentACBioInstances: OPTIONAL<SequenceOfACBioInstances>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                originalBDBHashList: (_el: _Element): void => {
                    originalBDBHashList = _decode_HashList(_el);
                },
                originalBIRReferrer: (_el: _Element): void => {
                    originalBIRReferrer = _decode_URI(_el);
                },
                originalBIRPatronFormat: (_el: _Element): void => {
                    originalBIRPatronFormat = _decode_PatronFormat(_el);
                },
                originalBDBPosition: (_el: _Element): void => {
                    originalBDBPosition = $._decodeInteger(_el);
                },
                userInformation: (_el: _Element): void => {
                    userInformation = _decode_UserInformation(_el);
                },
                pkiCertificateInformation: (_el: _Element): void => {
                    pkiCertificateInformation = _decode_PKICertificateInformation(
                        _el
                    );
                },
                enrolmentACBioInstances: (_el: _Element): void => {
                    enrolmentACBioInstances = _decode_SequenceOfACBioInstances(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BDBForBRTC,
                _extension_additions_list_spec_for_BDBForBRTC,
                _root_component_type_list_2_spec_for_BDBForBRTC,
                undefined
            );
            return new BDBForBRTC (
                version,
                originalBDBHashList,
                originalBIRReferrer,
                originalBIRPatronFormat,
                originalBDBPosition,
                userInformation,
                pkiCertificateInformation,
                enrolmentACBioInstances
            );
        };
    }
    return _cached_decoder_for_BDBForBRTC(el);
}


let _cached_encoder_for_BDBForBRTC: $.ASN1Encoder<BDBForBRTC> | null = null;


/**
 * @summary Encodes a(n) BDBForBRTC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDBForBRTC, encoded as an ASN.1 Element.
 */
export function _encode_BDBForBRTC(
    value: BDBForBRTC,
    elGetter: $.ASN1Encoder<BDBForBRTC>
) {
    if (!_cached_encoder_for_BDBForBRTC) {
        _cached_encoder_for_BDBForBRTC = function (
            value: BDBForBRTC        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.version === undefined ||
                        $.deepEq(
                            value.version,
                            BDBForBRTC._default_value_for_version
                        )
                            ? undefined
                            : _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ _encode_HashList(
                            value.originalBDBHashList,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.originalBIRReferrer === undefined
                            ? undefined
                            : _encode_URI(value.originalBIRReferrer, $.BER),
                        /* REQUIRED   */ _encode_PatronFormat(
                            value.originalBIRPatronFormat,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.originalBDBPosition,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.userInformation === undefined
                            ? undefined
                            : _encode_UserInformation(
                                  value.userInformation,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.pkiCertificateInformation ===
                        undefined
                            ? undefined
                            : _encode_PKICertificateInformation(
                                  value.pkiCertificateInformation,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.enrolmentACBioInstances ===
                        undefined
                            ? undefined
                            : _encode_SequenceOfACBioInstances(
                                  value.enrolmentACBioInstances,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BDBForBRTC(value, elGetter);
}


/* eslint-enable */
