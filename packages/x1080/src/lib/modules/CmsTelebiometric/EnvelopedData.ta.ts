/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */,
    v4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v5 /* IMPORTED_LONG_NAMED_INTEGER */,
    v5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from '../CmsTelebiometric/CMSVersion.ta';
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */,
    v4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v5 /* IMPORTED_LONG_NAMED_INTEGER */,
    v5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from '../CmsTelebiometric/CMSVersion.ta';
import {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from '../CmsTelebiometric/RecipientInfos.ta';
export {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from '../CmsTelebiometric/RecipientInfos.ta';
import {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from '../CmsTelebiometric/EncryptedContentInfo.ta';
export {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from '../CmsTelebiometric/EncryptedContentInfo.ta';

/* START_OF_SYMBOL_DEFINITION EnvelopedData */
/**
 * @summary EnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData ::= SEQUENCE {
 *   version                    CMSVersion(v0 | v2),
 * --originatorInfo         [0] IMPLICIT OriginatorInfo OPTIONAL,
 *   recipientInfos             RecipientInfos,
 *   encryptedContentInfo       EncryptedContentInfo,
 *   ...,
 *   [[2: unprotectedAttrs  [1] IMPLICIT Attributes
 *        {{UnprotectedAttributes}} OPTIONAL ]] }
 * ```
 *
 * @class
 */
export class EnvelopedData {
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
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EnvelopedData
     * @description
     *
     * This takes an `object` and converts it to a `EnvelopedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnvelopedData`.
     * @returns {EnvelopedData}
     */
    public static _from_object(
        _o: { [_K in keyof EnvelopedData]: EnvelopedData[_K] }
    ): EnvelopedData {
        return new EnvelopedData(
            _o.version,
            _o.recipientInfos,
            _o.encryptedContentInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnvelopedData */
/**
 * @summary The Leading Root Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnvelopedData: $.ComponentSpec[] = [
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
        'encryptedContentInfo',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnvelopedData */
/**
 * @summary The Trailing Root Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnvelopedData */
/**
 * @summary The Extension Addition Component Types of EnvelopedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnvelopedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData */
let _cached_decoder_for_EnvelopedData: $.ASN1Decoder<EnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _decode_EnvelopedData */
/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnvelopedData} The decoded data structure.
 */
export function _decode_EnvelopedData(el: _Element) {
    if (!_cached_decoder_for_EnvelopedData) {
        _cached_decoder_for_EnvelopedData = function (
            el: _Element
        ): EnvelopedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let recipientInfos!: RecipientInfos;
            let encryptedContentInfo!: EncryptedContentInfo;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                recipientInfos: (_el: _Element): void => {
                    recipientInfos = _decode_RecipientInfos(_el);
                },
                encryptedContentInfo: (_el: _Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EnvelopedData,
                _extension_additions_list_spec_for_EnvelopedData,
                _root_component_type_list_2_spec_for_EnvelopedData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EnvelopedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                recipientInfos,
                encryptedContentInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EnvelopedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData */
let _cached_encoder_for_EnvelopedData: $.ASN1Encoder<EnvelopedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData */

/* START_OF_SYMBOL_DEFINITION _encode_EnvelopedData */
/**
 * @summary Encodes a(n) EnvelopedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopedData, encoded as an ASN.1 Element.
 */
export function _encode_EnvelopedData(
    value: EnvelopedData,
    elGetter: $.ASN1Encoder<EnvelopedData>
) {
    if (!_cached_encoder_for_EnvelopedData) {
        _cached_encoder_for_EnvelopedData = function (
            value: EnvelopedData,
            elGetter: $.ASN1Encoder<EnvelopedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CMSVersion(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_RecipientInfos(
                                value.recipientInfos,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_EncryptedContentInfo(
                                value.encryptedContentInfo,
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
    return _cached_encoder_for_EnvelopedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnvelopedData */

/* eslint-enable */
