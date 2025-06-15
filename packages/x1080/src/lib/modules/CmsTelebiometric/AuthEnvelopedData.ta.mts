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
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from '../CmsTelebiometric/RecipientInfos.ta.mjs';
import {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from '../CmsTelebiometric/EncryptedContentInfo.ta.mjs';
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from '../CmsTelebiometric/Attributes.ta.mjs';
import {
    MessageAuthenticationCode,
    _decode_MessageAuthenticationCode,
    _encode_MessageAuthenticationCode,
} from '../CmsTelebiometric/MessageAuthenticationCode.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AuthEnvelopedData */
/**
 * @summary AuthEnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthEnvelopedData ::= SEQUENCE {
 *   version                  CMSVersion (v0),
 * --originatorInfo       [0] IMPLICIT OriginatorInfo OPTIONAL,
 *   recipientInfos           RecipientInfos,
 *   authEncryptedContentInfo EncryptedContentInfo,
 *   authAttrs            [1] IMPLICIT Attributes {{AuthAttributes}} OPTIONAL,
 *   mac                      MessageAuthenticationCode,
 *   unauthAttrs          [2] IMPLICIT Attributes {{UnauthAttributes}} OPTIONAL }
 * ```
 *
 * @class
 */
export class AuthEnvelopedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: RecipientInfos,
        /**
         * @summary `authEncryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly authEncryptedContentInfo: EncryptedContentInfo,
        /**
         * @summary `authAttrs`.
         * @public
         * @readonly
         */
        readonly authAttrs: OPTIONAL<Attributes>,
        /**
         * @summary `mac`.
         * @public
         * @readonly
         */
        readonly mac: MessageAuthenticationCode,
        /**
         * @summary `unauthAttrs`.
         * @public
         * @readonly
         */
        readonly unauthAttrs: OPTIONAL<Attributes>
    ) {}

    /**
     * @summary Restructures an object into a AuthEnvelopedData
     * @description
     *
     * This takes an `object` and converts it to a `AuthEnvelopedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthEnvelopedData`.
     * @returns {AuthEnvelopedData}
     */
    public static _from_object(
        _o: { [_K in keyof AuthEnvelopedData]: AuthEnvelopedData[_K] }
    ): AuthEnvelopedData {
        return new AuthEnvelopedData(
            _o.version,
            _o.recipientInfos,
            _o.authEncryptedContentInfo,
            _o.authAttrs,
            _o.mac,
            _o.unauthAttrs
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AuthEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthEnvelopedData */
/**
 * @summary The Leading Root Component Types of AuthEnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthEnvelopedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'recipientInfos',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'authEncryptedContentInfo',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'authAttrs',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mac',
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'unauthAttrs',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthEnvelopedData */
/**
 * @summary The Trailing Root Component Types of AuthEnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthEnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthEnvelopedData */
/**
 * @summary The Extension Addition Component Types of AuthEnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthEnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthEnvelopedData */
let _cached_decoder_for_AuthEnvelopedData: $.ASN1Decoder<AuthEnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _decode_AuthEnvelopedData */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthEnvelopedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthEnvelopedData} The decoded data structure.
 */
export function _decode_AuthEnvelopedData(el: _Element) {
    if (!_cached_decoder_for_AuthEnvelopedData) {
        _cached_decoder_for_AuthEnvelopedData = function (
            el: _Element
        ): AuthEnvelopedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let recipientInfos!: RecipientInfos;
            let authEncryptedContentInfo!: EncryptedContentInfo;
            let authAttrs: OPTIONAL<Attributes>;
            let mac!: MessageAuthenticationCode;
            let unauthAttrs: OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                recipientInfos: (_el: _Element): void => {
                    recipientInfos = _decode_RecipientInfos(_el);
                },
                authEncryptedContentInfo: (_el: _Element): void => {
                    authEncryptedContentInfo = _decode_EncryptedContentInfo(
                        _el
                    );
                },
                authAttrs: (_el: _Element): void => {
                    authAttrs = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
                mac: (_el: _Element): void => {
                    mac = _decode_MessageAuthenticationCode(_el);
                },
                unauthAttrs: (_el: _Element): void => {
                    unauthAttrs = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthEnvelopedData,
                _extension_additions_list_spec_for_AuthEnvelopedData,
                _root_component_type_list_2_spec_for_AuthEnvelopedData,
                undefined
            );
            return new AuthEnvelopedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                recipientInfos,
                authEncryptedContentInfo,
                authAttrs,
                mac,
                unauthAttrs
            );
        };
    }
    return _cached_decoder_for_AuthEnvelopedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthEnvelopedData */
let _cached_encoder_for_AuthEnvelopedData: $.ASN1Encoder<AuthEnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthEnvelopedData */

/* START_OF_SYMBOL_DEFINITION _encode_AuthEnvelopedData */
/**
 * @summary Encodes a(n) AuthEnvelopedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthEnvelopedData, encoded as an ASN.1 Element.
 */
export function _encode_AuthEnvelopedData(
    value: AuthEnvelopedData,
    elGetter: $.ASN1Encoder<AuthEnvelopedData>
) {
    if (!_cached_encoder_for_AuthEnvelopedData) {
        _cached_encoder_for_AuthEnvelopedData = function (
            value: AuthEnvelopedData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.authEncryptedContentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.authAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.authAttrs, $.BER),
                        /* REQUIRED   */ _encode_MessageAuthenticationCode(
                            value.mac,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unauthAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.unauthAttrs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthEnvelopedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthEnvelopedData */

/* eslint-enable */
