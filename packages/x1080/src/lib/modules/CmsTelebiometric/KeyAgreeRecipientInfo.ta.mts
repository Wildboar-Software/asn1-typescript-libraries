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
    OriginatorIdentifierOrKey,
    _decode_OriginatorIdentifierOrKey,
    _encode_OriginatorIdentifierOrKey,
} from '../CmsTelebiometric/OriginatorIdentifierOrKey.ta.mjs';
import {
    UserKeyingMaterial,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from '../CmsTelebiometric/UserKeyingMaterial.ta.mjs';
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from '../CmsTelebiometric/KeyEncryptionAlgorithmIdentifier.ta.mjs';
import {
    RecipientEncryptedKeys,
    _decode_RecipientEncryptedKeys,
    _encode_RecipientEncryptedKeys,
} from '../CmsTelebiometric/RecipientEncryptedKeys.ta.mjs';
/* START_OF_SYMBOL_DEFINITION KeyAgreeRecipientInfo */
/**
 * @summary KeyAgreeRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreeRecipientInfo ::= SEQUENCE {
 *   version                CMSVersion (v3),
 *   originator         [0] EXPLICIT OriginatorIdentifierOrKey,
 *   ukm                [1] EXPLICIT UserKeyingMaterial OPTIONAL,
 *   keyEncryptionAlgorithm KeyEncryptionAlgorithmIdentifier,
 *   recipientEncryptedKeys RecipientEncryptedKeys,
 *   ... }
 * ```
 *
 * @class
 */
export class KeyAgreeRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OriginatorIdentifierOrKey,
        /**
         * @summary `ukm`.
         * @public
         * @readonly
         */
        readonly ukm: OPTIONAL<UserKeyingMaterial>,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        /**
         * @summary `recipientEncryptedKeys`.
         * @public
         * @readonly
         */
        readonly recipientEncryptedKeys: RecipientEncryptedKeys,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreeRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreeRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreeRecipientInfo`.
     * @returns {KeyAgreeRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof KeyAgreeRecipientInfo]: KeyAgreeRecipientInfo[_K] }
    ): KeyAgreeRecipientInfo {
        return new KeyAgreeRecipientInfo(
            _o.version,
            _o.originator,
            _o.ukm,
            _o.keyEncryptionAlgorithm,
            _o.recipientEncryptedKeys,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo */
/**
 * @summary The Leading Root Component Types of KeyAgreeRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ukm',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'keyEncryptionAlgorithm',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'recipientEncryptedKeys',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo */
/**
 * @summary The Trailing Root Component Types of KeyAgreeRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreeRecipientInfo */
/**
 * @summary The Extension Addition Component Types of KeyAgreeRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientInfo */
let _cached_decoder_for_KeyAgreeRecipientInfo: $.ASN1Decoder<KeyAgreeRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreeRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreeRecipientInfo} The decoded data structure.
 */
export function _decode_KeyAgreeRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_KeyAgreeRecipientInfo) {
        _cached_decoder_for_KeyAgreeRecipientInfo = function (
            el: _Element
        ): KeyAgreeRecipientInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let originator!: OriginatorIdentifierOrKey;
            let ukm: OPTIONAL<UserKeyingMaterial>;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let recipientEncryptedKeys!: RecipientEncryptedKeys;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                originator: (_el: _Element): void => {
                    originator = $._decode_explicit<OriginatorIdentifierOrKey>(
                        () => _decode_OriginatorIdentifierOrKey
                    )(_el);
                },
                ukm: (_el: _Element): void => {
                    ukm = $._decode_explicit<UserKeyingMaterial>(
                        () => _decode_UserKeyingMaterial
                    )(_el);
                },
                keyEncryptionAlgorithm: (_el: _Element): void => {
                    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                recipientEncryptedKeys: (_el: _Element): void => {
                    recipientEncryptedKeys = _decode_RecipientEncryptedKeys(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo,
                _extension_additions_list_spec_for_KeyAgreeRecipientInfo,
                _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new KeyAgreeRecipientInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                originator,
                ukm,
                keyEncryptionAlgorithm,
                recipientEncryptedKeys,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_KeyAgreeRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientInfo */
let _cached_encoder_for_KeyAgreeRecipientInfo: $.ASN1Encoder<KeyAgreeRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientInfo */
/**
 * @summary Encodes a(n) KeyAgreeRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreeRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreeRecipientInfo(
    value: KeyAgreeRecipientInfo,
    elGetter: $.ASN1Encoder<KeyAgreeRecipientInfo>
) {
    if (!_cached_encoder_for_KeyAgreeRecipientInfo) {
        _cached_encoder_for_KeyAgreeRecipientInfo = function (
            value: KeyAgreeRecipientInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CMSVersion(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_OriginatorIdentifierOrKey,
                                $.BER
                            )(value.originator, $.BER),
                            /* IF_ABSENT  */ value.ukm === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_UserKeyingMaterial,
                                      $.BER
                                  )(value.ukm, $.BER),
                            /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                                value.keyEncryptionAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_RecipientEncryptedKeys(
                                value.recipientEncryptedKeys,
                                $.BER
                            ),
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
    return _cached_encoder_for_KeyAgreeRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientInfo */

/* eslint-enable */
