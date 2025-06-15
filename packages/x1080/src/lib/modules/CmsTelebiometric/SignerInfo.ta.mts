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
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from '../CmsTelebiometric/CMSVersion.ta.mjs';
import {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from '../CmsTelebiometric/SignerIdentifier.ta.mjs';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from '../CmsTelebiometric/Attributes.ta.mjs';
import {
    SignatureValue,
    _decode_SignatureValue,
    _encode_SignatureValue,
} from '../CmsTelebiometric/SignatureValue.ta.mjs';

/**
 * @summary SignerInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerInfo ::= SEQUENCE {
 *   version                 CMSVersion (v1),
 *   sid                     SignerIdentifier,
 *   digestAlgorithm         AlgorithmIdentifier {{Teleb-Hash-Algorithms}},
 *   signedAttrs        [0]  IMPLICIT Attributes{{SignedAttributes}} OPTIONAL,
 *   signatureAlgorithm      AlgorithmIdentifier {{Teleb-Signature-Algorithms}},
 *   signature               SignatureValue,
 *   unsignedAttrs      [1]  IMPLICIT Attributes {{UnsignedAttributes}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SignerInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `sid`.
         * @public
         * @readonly
         */
        readonly sid: SignerIdentifier,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signedAttrs`.
         * @public
         * @readonly
         */
        readonly signedAttrs: OPTIONAL<Attributes>,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: SignatureValue,
        /**
         * @summary `unsignedAttrs`.
         * @public
         * @readonly
         */
        readonly unsignedAttrs: OPTIONAL<Attributes>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SignerInfo
     * @description
     *
     * This takes an `object` and converts it to a `SignerInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignerInfo`.
     * @returns {SignerInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SignerInfo]: SignerInfo[_K] }
    ): SignerInfo {
        return new SignerInfo(
            _o.version,
            _o.sid,
            _o.digestAlgorithm,
            _o.signedAttrs,
            _o.signatureAlgorithm,
            _o.signature,
            _o.unsignedAttrs,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec('sid', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'digestAlgorithm',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signedAttrs',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signatureAlgorithm',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signature',
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'unsignedAttrs',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignerInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignerInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_SignerInfo: $.ASN1Decoder<SignerInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerInfo} The decoded data structure.
 */
export function _decode_SignerInfo(el: _Element) {
    if (!_cached_decoder_for_SignerInfo) {
        _cached_decoder_for_SignerInfo = function (el: _Element): SignerInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let sid!: SignerIdentifier;
            let digestAlgorithm!: AlgorithmIdentifier;
            let signedAttrs: OPTIONAL<Attributes>;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let signature!: SignatureValue;
            let unsignedAttrs: OPTIONAL<Attributes>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                sid: (_el: _Element): void => {
                    sid = _decode_SignerIdentifier(_el);
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                signedAttrs: (_el: _Element): void => {
                    signedAttrs = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_SignatureValue(_el);
                },
                unsignedAttrs: (_el: _Element): void => {
                    unsignedAttrs = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignerInfo,
                _extension_additions_list_spec_for_SignerInfo,
                _root_component_type_list_2_spec_for_SignerInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SignerInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                sid,
                digestAlgorithm,
                signedAttrs,
                signatureAlgorithm,
                signature,
                unsignedAttrs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SignerInfo(el);
}


let _cached_encoder_for_SignerInfo: $.ASN1Encoder<SignerInfo> | null = null;


/**
 * @summary Encodes a(n) SignerInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfo, encoded as an ASN.1 Element.
 */
export function _encode_SignerInfo(
    value: SignerInfo,
    elGetter: $.ASN1Encoder<SignerInfo>
) {
    if (!_cached_encoder_for_SignerInfo) {
        _cached_encoder_for_SignerInfo = function (
            value: SignerInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CMSVersion(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SignerIdentifier(
                                value.sid,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.digestAlgorithm,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.signedAttrs === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Attributes,
                                      $.BER
                                  )(value.signedAttrs, $.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signatureAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SignatureValue(
                                value.signature,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.unsignedAttrs === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Attributes,
                                      $.BER
                                  )(value.unsignedAttrs, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignerInfo(value, elGetter);
}


/* eslint-enable */
