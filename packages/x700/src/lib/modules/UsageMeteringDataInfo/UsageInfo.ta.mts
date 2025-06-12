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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { UMF_USAGE } from '../UsageMeteringDataInfo/UMF-USAGE.oca.mjs';
export { UMF_USAGE } from '../UsageMeteringDataInfo/UMF-USAGE.oca.mjs';
import { UsageInfoSet } from '../UsageMeteringDataInfo/UsageInfoSet.osa.mjs';
export { UsageInfoSet } from '../UsageMeteringDataInfo/UsageInfoSet.osa.mjs';

/* START_OF_SYMBOL_DEFINITION UsageInfo */
/**
 * @summary UsageInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageInfo ::= SEQUENCE {
 *   serviceType  UMF-USAGE.&id({UsageInfoSet}),
 *   usageData    UMF-USAGE.&Value({UsageInfoSet}{@serviceType})
 * }
 * ```
 *
 * @class
 */
export class UsageInfo {
    constructor(
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        readonly serviceType: OBJECT_IDENTIFIER,
        /**
         * @summary `usageData`.
         * @public
         * @readonly
         */
        readonly usageData: _Element
    ) {}

    /**
     * @summary Restructures an object into a UsageInfo
     * @description
     *
     * This takes an `object` and converts it to a `UsageInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UsageInfo`.
     * @returns {UsageInfo}
     */
    public static _from_object(
        _o: { [_K in keyof UsageInfo]: UsageInfo[_K] }
    ): UsageInfo {
        return new UsageInfo(_o.serviceType, _o.usageData);
    }
}
/* END_OF_SYMBOL_DEFINITION UsageInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UsageInfo */
/**
 * @summary The Leading Root Component Types of UsageInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UsageInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'serviceType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec('usageData', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UsageInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UsageInfo */
/**
 * @summary The Trailing Root Component Types of UsageInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UsageInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UsageInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UsageInfo */
/**
 * @summary The Extension Addition Component Types of UsageInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UsageInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UsageInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageInfo */
let _cached_decoder_for_UsageInfo: $.ASN1Decoder<UsageInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageInfo */

/* START_OF_SYMBOL_DEFINITION _decode_UsageInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) UsageInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsageInfo} The decoded data structure.
 */
export function _decode_UsageInfo(el: _Element) {
    if (!_cached_decoder_for_UsageInfo) {
        _cached_decoder_for_UsageInfo = function (el: _Element): UsageInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'UsageInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'serviceType';
            sequence[1].name = 'usageData';
            let serviceType!: OBJECT_IDENTIFIER;
            let usageData!: _Element;
            serviceType = $._decodeObjectIdentifier(sequence[0]);
            usageData = $._decodeAny(sequence[1]);
            return new UsageInfo(serviceType, usageData);
        };
    }
    return _cached_decoder_for_UsageInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UsageInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageInfo */
let _cached_encoder_for_UsageInfo: $.ASN1Encoder<UsageInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageInfo */

/* START_OF_SYMBOL_DEFINITION _encode_UsageInfo */
/**
 * @summary Encodes a(n) UsageInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsageInfo, encoded as an ASN.1 Element.
 */
export function _encode_UsageInfo(
    value: UsageInfo,
    elGetter: $.ASN1Encoder<UsageInfo>
) {
    if (!_cached_encoder_for_UsageInfo) {
        _cached_encoder_for_UsageInfo = function (
            value: UsageInfo,
            elGetter: $.ASN1Encoder<UsageInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.serviceType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.usageData, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UsageInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UsageInfo */

/* eslint-enable */
