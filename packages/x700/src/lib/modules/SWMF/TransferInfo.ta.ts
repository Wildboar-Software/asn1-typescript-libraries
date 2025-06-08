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
import { SWMF_TRANSFER } from '../SWMF/SWMF-TRANSFER.oca';
export { SWMF_TRANSFER } from '../SWMF/SWMF-TRANSFER.oca';
import { TransferInfoSet } from '../SWMF/TransferInfoSet.osa';
export { TransferInfoSet } from '../SWMF/TransferInfoSet.osa';

/* START_OF_SYMBOL_DEFINITION TransferInfo */
/**
 * @summary TransferInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferInfo ::= SEQUENCE {
 *   transferProtocol      SWMF-TRANSFER.&id({TransferInfoSet}),
 *   protocolSpecificInfo
 *     SWMF-TRANSFER.&Value({TransferInfoSet}{@.transferProtocol})
 * }
 * ```
 *
 * @class
 */
export class TransferInfo {
    constructor(
        /**
         * @summary `transferProtocol`.
         * @public
         * @readonly
         */
        readonly transferProtocol: OBJECT_IDENTIFIER,
        /**
         * @summary `protocolSpecificInfo`.
         * @public
         * @readonly
         */
        readonly protocolSpecificInfo: _Element
    ) {}

    /**
     * @summary Restructures an object into a TransferInfo
     * @description
     *
     * This takes an `object` and converts it to a `TransferInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransferInfo`.
     * @returns {TransferInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TransferInfo]: TransferInfo[_K] }
    ): TransferInfo {
        return new TransferInfo(_o.transferProtocol, _o.protocolSpecificInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION TransferInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TransferInfo */
/**
 * @summary The Leading Root Component Types of TransferInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TransferInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'transferProtocol',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'protocolSpecificInfo',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TransferInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TransferInfo */
/**
 * @summary The Trailing Root Component Types of TransferInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TransferInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TransferInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TransferInfo */
/**
 * @summary The Extension Addition Component Types of TransferInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TransferInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TransferInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferInfo */
let _cached_decoder_for_TransferInfo: $.ASN1Decoder<TransferInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TransferInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TransferInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferInfo} The decoded data structure.
 */
export function _decode_TransferInfo(el: _Element) {
    if (!_cached_decoder_for_TransferInfo) {
        _cached_decoder_for_TransferInfo = function (
            el: _Element
        ): TransferInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TransferInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'transferProtocol';
            sequence[1].name = 'protocolSpecificInfo';
            let transferProtocol!: OBJECT_IDENTIFIER;
            let protocolSpecificInfo!: _Element;
            transferProtocol = $._decodeObjectIdentifier(sequence[0]);
            protocolSpecificInfo = $._decodeAny(sequence[1]);
            return new TransferInfo(transferProtocol, protocolSpecificInfo);
        };
    }
    return _cached_decoder_for_TransferInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransferInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferInfo */
let _cached_encoder_for_TransferInfo: $.ASN1Encoder<TransferInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TransferInfo */
/**
 * @summary Encodes a(n) TransferInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferInfo, encoded as an ASN.1 Element.
 */
export function _encode_TransferInfo(
    value: TransferInfo,
    elGetter: $.ASN1Encoder<TransferInfo>
) {
    if (!_cached_encoder_for_TransferInfo) {
        _cached_encoder_for_TransferInfo = function (
            value: TransferInfo,
            elGetter: $.ASN1Encoder<TransferInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.transferProtocol,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.protocolSpecificInfo,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TransferInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransferInfo */

/* eslint-enable */
